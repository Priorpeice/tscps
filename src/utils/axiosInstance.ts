// src/utils/axiosInstance.ts
import axios from 'axios';
import { store } from '../store/store';// 스토어 가져오기
import { setError,clearError } from '../store/errorSlice';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api', // 기본 URL 설정
});

/*요청 instance*/
axiosInstance.interceptors.request.use(
  (config) => { 
    return config;
  },
  (error) => {
        return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(clearError());
    return response;
  },
  (error) => {
    if (error.response) {
      const code = error.response.status.toString();
      const content = error.response.data?.message || '알 수 없는 오류가 발생했습니다.';
      alert(content);
      store.dispatch(setError({ code, content }));
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
