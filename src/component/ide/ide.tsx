// src/component/ide/ide.tsx

import React, { useState, useEffect } from 'react';
import CodeEditor from '../CodeEditor';
import CompileLanguageSelect from '../CompileLanguageSelect';
import { handleCompileSubmit, handleCompileChange } from '../../handler/formHandler';
import { CompileForm } from '../../interface/compile';
import NavigationBar from '../navigationbar/navgivationBar';
import { Logo,LogoLink } from '../../styles/logo';
import InputBox from '../InputBox';
import { Container,Header } from '../../styles/container';
import { Label } from '../../styles/inputBox';
import {
  PageContainer,
  IdeHeader,
  Content,
  CompileLanguageContainer,
  CodeEditorContainer,
  InputOutputContainer,
  Panel,
  CompileButton,
  CompilationResult,
  Footer,
} from '../../styles/ide';

interface IDEPageProps {
  initialRows?: number;
  initialCompileForm?: CompileForm;
}

const IDEPage: React.FC<IDEPageProps> = ({ initialRows, initialCompileForm }) => {
  const [compileForm, setCompileForm] = useState<CompileForm>(
    initialCompileForm || {
      language: 'java',
      code: '',
      input: '',
    }
  );
  const [compilationResult, setCompilationResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    handleCompileSubmit(e, compileForm, (result) => {
      setCompilationResult(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    setCompileForm(
      initialCompileForm || {
        language: 'java',
        code: '',
        input: '',
      }
    );
  }, [initialCompileForm, compilationResult]);

  const languageOptions = [
    { value: 'java', label: 'Java' },
    { value: 'py', label: 'Python' },
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'js', label: 'JavaScript' },
    { value: 'dart', label: 'Dart' },
  ];

  return (
    <PageContainer>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink >
      </Header>
      <Content>
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%' }}>
          <CompileLanguageContainer>
            <CompileLanguageSelect
              languageOptions={languageOptions}
              handleCompileChange={(e:any) => handleCompileChange(e, compileForm, setCompileForm)}
              value={compileForm.language}
            />
            <CompileButton type="submit">Run</CompileButton>
          </CompileLanguageContainer>
          <Content>
            <CodeEditorContainer>
              <CodeEditor
                compileForm={compileForm}
                setCompileForm={setCompileForm}
                style={{ width: '100%', height: '700px' }}
              />
            </CodeEditorContainer>
            <InputOutputContainer>
              <Panel>
                <InputBox
                  compileForm={compileForm}
                  handleCompileChange={(e:any) => handleCompileChange(e, compileForm, setCompileForm)}
                />
              </Panel>
              <Panel>
              <Label htmlFor="compilationResult">Compilation Output:</Label>
                <CompilationResult id="compilationResult">
                  {loading && <p>Loading...</p>}
                  {!loading && compilationResult && (
                    <>
                      <h3>Compilation Result:</h3>
                      <pre>{compilationResult}</pre>
                    </>
                  )}
                </CompilationResult>
              </Panel>
            </InputOutputContainer>
          </Content>
        </form>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default IDEPage;
