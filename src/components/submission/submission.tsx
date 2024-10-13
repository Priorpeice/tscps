import React, { useState, SyntheticEvent } from "react";
import ForbiddenRedirect from '../../handler/forbiddenRedirect';

import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Header } from "../../styles/container";
import NavigationBar from "../navigationbar/navgivationBar";
import CodeEditor from "../CodeEditor";
import { CompileForm } from "../../interface/compile";
import { Logo, LogoLink } from "../../styles/logo";
import {
  handleCompileSubmit,
  handleCompileChange,
} from "../../handler/formHandler";
import InputBox from "../InputBox";
import CompileLanguageSelect from "../CompileLanguageSelect";
import { languageOptions } from "../CompileLanguage";
import { handleSubmission } from "../../handler/submitHandler";
import { LoadingModal } from "../loading/loadingModal";
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
  Input,
} from "../../styles/allSubmission";
import { CodeEditorContainer } from "../../styles/allSubmission";

const SubmissionPage: React.FC = () => {
  const initialCompileForm: CompileForm = {
    language: "java",
    code: "",
    input: "",
  };
  const { problemId } = useParams<{ problemId: string }>();
  const [compileForm, setCompileForm] =
    useState<CompileForm>(initialCompileForm);
  const [output, setOutput] = useState<string | null>(null);
  const accessToken: string | null = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(false);
  const [isForbidden, setIsForbidden] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleCompile = async (e: SyntheticEvent) => {
    setLoading(true); // 컴파일 시작 시 로딩 상태 활성화
    try {
      await handleCompileSubmit(e, compileForm, setOutput);
    } finally {
      setLoading(false); // 컴파일 종료 후 로딩 상태 비활성화
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true); // 제출 시작 시 로딩 상태 활성화
    try {
      const responseData = await handleSubmission(
        compileForm,
        accessToken,
        problemId
      );
      setOutput(responseData);
      alert("제출이 완료되었습니다.");
      navigate(`../../submission/${problemId}`); // Navigate to desired route
    } catch (error:any) {

      if (error.status == 401) {
        setIsForbidden(true);
      } 
      console.error("서버 요청 중 오류 발생:", error);
    } finally {
      setLoading(false); // 제출 완료 후 로딩 상태 비활성화
    }
  };

  if (isForbidden) {
    // 403 Forbidden일 때 처리할 컴포넌트를 리턴
    return <ForbiddenRedirect />;
  }

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
            handleCompileChange={(e: any) =>
              handleCompileChange(e, compileForm, setCompileForm)
            }
            value={compileForm.language}
          />
        </Section>
        <Section>
          <SectionTitle>Input Values</SectionTitle>
          <InputBox
            compileForm={compileForm}
            handleCompileChange={(e: any) =>
              handleCompileChange(e, compileForm, setCompileForm)
            }
          />
        </Section>
        <Section>
          <SectionTitle>소스 코드</SectionTitle>
          <CodeEditorContainer>
            <CodeEditor
              compileForm={compileForm}
              setCompileForm={setCompileForm}
              style={{ width: "100%", height: "500px" }}
            />
          </CodeEditorContainer>
          <SubmitButton onClick={handleCompile}>컴파일</SubmitButton>
          <OutputContainer>
            <SectionTitle>실행 결과</SectionTitle>
            {loading ? (
              <LoadingModal isOpen={loading} />
            ) : (
              <Pre>{output}</Pre>
            )}
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
