// src/utils/axiosInstance.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '../store/store';// 스토어 가져오기
import { setError,clearError } from '../store/slice/errorSlice';
import { getCookie } from '../store/cookieUtils';
import { accessToken, setAccessToken } from '../store/slice/authSlice';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api', // 기본 URL 설정
});

/*요청 instance*/
axiosInstance.interceptors.request.use(
  async (config) => { 
    const accessToken = store.getState().accessToken.accessToken; // Redux 스토어에서 accessToken 가져오기
    const refreshToken = Cookies.get('refreshToken');
    const dispatch = useDispatch();
    
    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    else if(!accessToken && refreshToken) 
    {
      try{
        const response = await axios.post('/auth/rt', { refreshToken });
        const token = response.data.object.accessToken;
        dispatch(setAccessToken(token));
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      catch(error:any)
      {
        return Promise.reject(error);
      }
    }
    return config;
  },
  (error) => {
        return Promise.reject(error);
  }
);
let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

/* refreshToken 발급 후 모든 대기 요청에 새 accessToken 추가 */
const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

/* refreshToken 요청 후 대기중인 요청 추가 */
const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};
// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    store.dispatch(clearError());
    return response;
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    // accessToken 만료로 401 또는 403 에러 발생 시
    if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshToken = getCookie('refreshToken'); // 쿠키에서 refreshToken 가져오기
          const { data } = await axios.post<any>('/rt', {}, {
            headers: { 'Authorization': `Bearer ${refreshToken}` }
          });
          
          const newAccessToken = data.data.object.accessToken;
          if (newAccessToken) {
            store.dispatch({ type: 'auth/setAccessToken', payload: newAccessToken }); // 새 accessToken을 Redux 스토어에 저장
            onRefreshed(newAccessToken);
          } else {
            throw new Error('Failed to refresh access token');
          }
          isRefreshing = false;
        } catch (err) {
          store.dispatch(setError({ code: '401', content: '토큰 재발급 실패' }));
          isRefreshing = false;
          return Promise.reject(err);
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((newToken: string) => {
          // 새로운 accessToken으로 원래 요청 다시 실행
          if (originalRequest.headers) {
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          }
          resolve(axiosInstance(originalRequest));
        });
      });
    } else {
      const code = error.response?.status.toString();
      const content = error.response?.data?.object?.message || '알 수 없는 오류가 발생했습니다.';
      alert(content);
      store.dispatch(setError({ code, content }));
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
