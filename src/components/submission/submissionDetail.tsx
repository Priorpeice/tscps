import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CodeEditor from '../CodeEditor';
import { verifyInput } from "../../handler/verificationApi"; // verifyInput 핸들러 임포트
import NavigationBar from "../navigationbar/navgivationBar";
import { Logo,LogoLink } from '../../styles/logo';
import { Container, Header } from '../../styles/container';
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
      <div style={{ textAlign: 'right' }}> {/* 버튼 오른쪽 정렬 */}
          <button onClick={handleVerifyCode}>코드 검증</button>
        </div>
      <div className="container" style={{ display: "flex" }}>{/* Flexbox 스타일 적용 */}
        <div className="left" style={{ flex: 1, marginRight: "20px" }}>{/* 왼쪽 영역 */}
          <CodeEditor
            compileForm={compileForm}
            setCompileForm={setCompileForm}
            style={{ width: "90%", height: "700px" }}
            readOnly={true}
          />
        </div>
        <div className="right" style={{ flex: 1 }}>{/* 오른쪽 영역 */}
          <label>검증 결과:</label>
          <div>{verificationResult}</div>
        </div>
      </div>
    </Container>
  );
};


export default SubmissionDetailPage;
