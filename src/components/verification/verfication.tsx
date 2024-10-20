import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import { VerificationBox, VerificationInput, VerificationOutput } from '../../styles/verification';
import { Logo, LogoLink } from '../../styles/logo';
import { handleVeriSubmit } from './handler/verificationHandler';
const VerificationPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isVerifying) return; // 검증 중이면 입력 무시
    setIsVerifying(true);     // 버튼 비활성화
    await handleVeriSubmit(e, inputValue, setOutputValue);
    setIsVerifying(false);    // 검증 후 다시 활성화
  };

  return (
    <Container>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
      <VerificationBox>
        <form onSubmit={handleSubmit}>
          <VerificationInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter verification data"
            disabled={isVerifying}  // 검증 중에는 입력 비활성화
          />
          <button type="submit" disabled={isVerifying}>
            {isVerifying ? '검증 중...' : '코드 분석'}
          </button>
        </form>
        <VerificationOutput
          value={outputValue}
          readOnly
          placeholder="Verification result will appear here"
        />
      </VerificationBox>
    </Container>
  );
};

export default VerificationPage;
