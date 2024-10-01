import axios from 'axios';

// 검증 요청 핸들러 함수
export const verifyInput = async (inputValue: string) => {
  try {
    const response = await axios.post('/api/verification', { question: inputValue });
    return response.data.object.response; // 서버로부터 반환된 검증 결과 반환
  } catch (error) {
    console.error('Error during verification:', error);
    return 'Verification failed. Please try again.'; // 에러 발생 시 메시지 반환
  }
};
