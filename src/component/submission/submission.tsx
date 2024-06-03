// src/component/submission/SubmissionPage.tsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Header } from '../../styles/container';
import NavigationBar from '../navigationbar/navgivationBar';
import CodeEditor from '../CodeEditor';
import { CompileForm } from '../../interface/compile';
import { Logo, LogoLink } from '../../styles/logo';
import { handleCompileSubmit, handleCompileChange } from '../../handler/formHandler';
import CompileLanguageSelect from '../CompileLanguageSelect';
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
import { CodeEditorContainer } from '../../styles/submission'; // Import the styled component

const SubmissionPage: React.FC = () => {
  const initialCompileForm: CompileForm = {
    language: 'java',
    code: '',
    input: '',
  };
  const { problemId } = useParams<{ problemId: string }>();
  const [compileForm, setCompileForm] = useState<CompileForm>(initialCompileForm);
  const [inputValue, setInputValue] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const languageOptions = [
    { value: 'java', label: 'Java' },
    { value: 'py', label: 'Python' },
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'js', label: 'JavaScript' },
    { value: 'dart', label: 'Dart' },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCompileSubmit = () => {
    // Simulate submission and output
    setOutput('Output will be displayed here.');
  };

  const handleSubmit = () => {
    // Simulate submission and output
    setOutput('Output will be displayed here.');
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
          <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter input values" />
        </Section>
        <Section>
          <SectionTitle>소스 코드</SectionTitle>
          <CodeEditorContainer>
            <CodeEditor
              compileForm={compileForm}
              setCompileForm={setCompileForm}
              style={{ width: '100%', height: '500px' }} // Pass styles as props
            />
          </CodeEditorContainer>
          <SubmitButton onClick={handleCompileSubmit}>컴파일</SubmitButton>
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
