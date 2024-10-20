import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CodeEditor from '../CodeEditor';
import { verifyInput } from "../../handler/verificationApi"; // verifyInput 핸들러 임포트
import NavigationBar from "../navigationbar/navgivationBar";
import { Logo,LogoLink } from '../../styles/logo';
import { Container, Header } from '../../styles/container';
import { Button, CodeSection, Footer, MainSection, SectionHeader, VerificationResultSection } from "../../styles/submissions";
interface LocationState {
  language: string;
}

const SubmissionDetailPage: React.FC = () => {
  const { submissionId } = useParams<{ submissionId: string }>();
  const location = useLocation();
  const [compileForm, setCompileForm] = useState({
    language: (location.state as LocationState)?.language || "js",
    code: "",
  });
  const [verificationResult, setVerificationResult] = useState<string>(""); // 검증 결과 상태

  useEffect(() => {
    axios
      .get(`/api/submission/detail/${submissionId}`)
      .then((response) => {
        const object = response.data.object;
        setCompileForm((prevForm) => ({
          ...prevForm,
          code: object.code,
        }));
      })
      .catch((error) => {
        console.error("Error fetching submission data:", error);
      });
  }, [submissionId]);

  // 검증 핸들러
  const handleVerifyCode = async () => {
    const result = await verifyInput(compileForm.code); // 코드 검증 API 호출
    setVerificationResult(result); // 검증 결과 설정
  };

  return (
    <Container>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>

      <MainSection>
      <CodeSection>
          <SectionHeader bgColor="#E1E1E1" ftColor="#000000" >제출한 코드</SectionHeader>
          <CodeEditor
            compileForm={compileForm}
            setCompileForm={setCompileForm}
            style={{ width: "100%", height: "660px"  }}
            readOnly={true}
          />
        </CodeSection>
        <VerificationResultSection>
          <SectionHeader bgColor="#666666" ftColor="#ffffff">코드 분석 결과</SectionHeader>
            <div>{verificationResult}</div>
        </VerificationResultSection>
      </MainSection>
      <Footer>
        <Button onClick={handleVerifyCode}>코드 분석</Button>
      </Footer>
    </Container>
  );
};


export default SubmissionDetailPage;
