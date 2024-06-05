import { CompileForm } from "../interface/compile";

export const handleSubmission = async (compileForm: CompileForm, accessToken: string | null,problemId: string | undefined) => {
  try {
    const safeProblemId: string = problemId || '';
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken ? `Bearer ${accessToken}` : '' 
      },
      body: JSON.stringify({
        ...compileForm,
        problemId: safeProblemId
      })
    };

    const response = await fetch('/api/submit', requestData);

    if (!response.ok) {
      throw new Error('서버 오류');
    }

    const responseData = await response.json();
    return responseData;  

  } catch (error) {
    console.error('서버 요청 중 오류 발생:', error);
    throw error; 
  }
};
