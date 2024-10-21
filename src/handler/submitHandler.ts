import axios from 'axios';
import { CompileForm } from "../interface/compile";
import axiosInstance from '../utils/axiosInstance';

export const handleSubmission = async (compileForm: CompileForm, accessToken: string | null, problemId: string | undefined) => {
  try {
    const safeProblemId: string = problemId || '';

    const response = await axiosInstance.post(
      '/submit',
      {
        ...compileForm,
        problemId: safeProblemId
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    );

    return response.data;

  } catch (error:any) {
    console.error('서버 요청 중 오류 발생:', error);
    throw error.response;
  }
};
