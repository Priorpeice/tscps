import React, { useState, useEffect } from 'react';
import CodeEditor from '../CodeEditor';
import CompileLanguageSelect from '../CompileLanguageSelect';
import { handleCompileSubmit, handleCompileChange } from '../../handler/formHandler';
import { CompileForm } from '../../interface/compile';
import NavigationBar from '../navigationbar/navgivationBar';
import { Logo, LogoLink } from '../../styles/logo';
import InputBox from '../InputBox';
import { Container, Header } from '../../styles/container';
import { Label } from '../../styles/inputBox';
import { languageOptions } from '../CompileLanguage';
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
  CodeSaveButton,
} from '../../styles/ide';
import { downloadFile } from '../../handler/fileDownloadHandler';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface IDEPageProps {
  initialRows?: number;
  initialCompileForm?: CompileForm;
}

const IDEPage: React.FC<IDEPageProps> = ({initialCompileForm }) => {
  const [compileForm, setCompileForm] = useState<CompileForm>(
    initialCompileForm || {
      language: 'java',
      code: '',
      input: '',
    }
  );
  const [compilationResult, setCompilationResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const accessToken =useSelector((state: RootState) => state.accessToken.accessToken);

  const handleDownload = async () => {
    const fileVO = { 
      extension: compileForm.language, 
      content: compileForm.code 
  }; 
    const token = accessToken; 

    await downloadFile(fileVO, token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleCompileSubmit(e, compileForm, setCompilationResult); 
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    
  }, [initialCompileForm, compilationResult]);

  return (
    <PageContainer>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
      <Content>
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%' }}>
          <CompileLanguageContainer>
            <CompileLanguageSelect
              languageOptions={languageOptions}
              handleCompileChange={(e: any) => handleCompileChange(e, compileForm, setCompileForm)}
              value={compileForm.language}
            />
            <CompileButton type="submit">Run</CompileButton>
            {accessToken && (<CodeSaveButton type="button" onClick={handleDownload}>Save</CodeSaveButton>)}
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
                  handleCompileChange={(e: any) => handleCompileChange(e, compileForm, setCompileForm)}
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
      {/* <Footer /> */}
    </PageContainer>
  );
};

export default IDEPage;
