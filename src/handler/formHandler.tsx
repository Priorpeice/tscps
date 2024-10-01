import { SyntheticEvent } from 'react';

interface CompileForm {
  language: string;
  code: string;
  input?: string;
}

export const handleCompileSubmit = async (
  e: SyntheticEvent,
  compileForm: CompileForm,
  setCompilationResult: React.Dispatch<React.SetStateAction<string | null>>
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
      console.log('컴파일 폼이 성공적으로 제출되었습니다:', data.object.output);
      if(data.object.output == ""){
        console.log(data.object.runTime)
        setCompilationResult(data.object.runTime);
      }else{
      setCompilationResult(data.object.output); // 컴파일 결과를 설정
      }
    } else {
      console.error('컴파일 폼 제출 중 오류 발생:', response.statusText);
      setCompilationResult('컴파일 폼 제출 중 오류 발생: ' + response.statusText);
    }
  } catch (error: any) {
    console.error('컴파일 폼 제출 중 오류 발생:', error.message);
    setCompilationResult('컴파일 폼 제출 중 오류 발생: ' + error.message);
  }
};

export const handleCompileChange = (
  e: SyntheticEvent<HTMLTextAreaElement>,
  compileForm: CompileForm,
  setCompileForm: React.Dispatch<React.SetStateAction<CompileForm>>
) => {
  const { name, value } = e.currentTarget;
  setCompileForm((prevForm) => ({ ...prevForm, [name]: value }));
};
