import { SyntheticEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface CompileForm {
  language: string;
  code: string;
  input?: string;
}

export const handleCompileSubmit = async (
  e: SyntheticEvent,
  compileForm: CompileForm,
  navigate: NavigateFunction
) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: compileForm.language,
        code: compileForm.code,
        input: compileForm.input,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('컴파일 폼이 성공적으로 제출되었습니다:', data);
      navigate('/result', { state: { compilationResult: data } });
    } else {
      console.error('컴파일 폼 제출 중 오류 발생:', response.statusText);
    }
  } catch (error:any) {
    console.error('컴파일 폼 제출 중 오류 발생:', error.message);
  }
};

export const handleCompileChange = (
  e: SyntheticEvent<HTMLInputElement>,
  compileForm: CompileForm,
  setCompileForm: React.Dispatch<React.SetStateAction<CompileForm>>
) => {
  const { name, value } = e.currentTarget;
  setCompileForm((prevForm) => ({ ...prevForm, [name]: value }));
};
