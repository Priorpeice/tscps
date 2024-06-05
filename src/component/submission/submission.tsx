import React, { useState, SyntheticEvent, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Header } from '../../styles/container';
import NavigationBar from '../navigationbar/navgivationBar';
import CodeEditor from '../CodeEditor';
import { CompileForm } from '../../interface/compile';
import { Logo, LogoLink } from '../../styles/logo';
import { handleCompileSubmit, handleCompileChange } from '../../handler/formHandler';
import InputBox from '../InputBox';
import CompileLanguageSelect from '../CompileLanguageSelect';
import { languageOptions } from '../CompileLanguage';
import { handleSubmission } from '../../handler/submitHandler';
import {
  SubmissionContainer,
  Title,
  LanguageButton,
  Section,
  SectionTitle,
  TextArea,
  SubmitButton,
  OutputContainer,
  Pre,
  Input
} from '../../styles/submission';
import { CodeEditorContainer } from '../../styles/submission';

const SubmissionPage: React.FC = () => {
  const initialCompileForm: CompileForm = {
    language: 'java',
    code: '',
    input: '',
  };
  const { problemId } = useParams<{ problemId: string }>();
  const [compileForm, setCompileForm] = useState<CompileForm>(initialCompileForm);
  const [output, setOutput] = useState<string | null>(null);
  const accessToken: string | null = localStorage.getItem('accessToken');

  const handleCompile = async (e: SyntheticEvent) => {
    await handleCompileSubmit(e, compileForm, setOutput);
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const responseData = await handleSubmission(compileForm,accessToken,problemId); 
      setOutput(responseData); 
      alert('데이터를 성공적으로 받았습니다: ' + responseData);
    } catch (error) {
      console.error('서버 요청 중 오류 발생:', error);
    }
  };

  return (
    <Container>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
      <SubmissionContainer>
        <Title>{problemId}</Title>
        <LanguageButton>언어 설정</LanguageButton>
        <Section>
          <SectionTitle>언어</SectionTitle>
          <CompileLanguageSelect
            languageOptions={languageOptions}
            handleCompileChange={(e: any) => handleCompileChange(e, compileForm, setCompileForm)}
            value={compileForm.language}
          />
        </Section>
        <Section>
          <SectionTitle>Input Values</SectionTitle>
          <InputBox
                  compileForm={compileForm}
                  handleCompileChange={(e:any) => handleCompileChange(e, compileForm, setCompileForm)}
                />
        </Section>
        <Section>
          <SectionTitle>소스 코드</SectionTitle>
          <CodeEditorContainer>
            <CodeEditor
              compileForm={compileForm}
              setCompileForm={setCompileForm}
              style={{ width: '100%', height: '500px' }}
            />
          </CodeEditorContainer>
          <SubmitButton onClick={handleCompile}>컴파일</SubmitButton>
          <OutputContainer>
            <SectionTitle>실행 결과</SectionTitle>
            <Pre>{output}</Pre>
          </OutputContainer>
        </Section>
        <Section>
          <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
        </Section>
      </SubmissionContainer>
    </Container>
  );
};

export default SubmissionPage;
