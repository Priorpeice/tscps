// src/component/auth/SignupForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Frame,MainHeader,CpsLogo } from '../../styles/mainStyle';
import {
  RegisterContainer,
  SignupFormContainer,
  InputLabel,
  InputField,
  DuplicateCheckButton,
  SubmissionButton
} from '../../styles/register';
import { FormData } from '../../interface/memberForm';



const SignupForm: React.FC = () => {
  const [isIdAvailable, setIsIdAvailable] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    id: '',
    pw: '',
    name: '',
    doubleCheckPw: '',
    nickname: '',
    phone: '',
    scode: 0,
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
    if (name === 'id') {
      setIsIdAvailable(false);
    }
  };

  const handleDuplicateCheck = async () => {
    try {
      const response = await axios.get(`/api/auth/member/duplicate?loginId=${formData.id}`);
      setIsIdAvailable(!response.data);
      alert(response.data ? '중복된 아이디입니다.' :'사용 가능한 아이디입니다.');
    } catch (error) {
      console.error('중복 확인 중 오류 발생:', error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!isIdAvailable) {
      alert('중복 확인이 필요합니다. 아이디를 확인해 주세요.');
      return;
    }

    try {
      const response = await axios.post('/api/auth/member', formData);
      alert(`회원가입이 성공했습니다!\n아이디: ${formData.id}\n이름: ${formData.name}\n닉네임: ${formData.nickname}\n전화번호: ${formData.phone}\n학번: ${formData.scode}\n이메일: ${formData.email}`);
      // 회원가입이 성공했을 때 사용자에게 알림 등을 추가할 수 있습니다.
    } catch (error) {
      console.error('Error occurred:', error);
      // 오류 발생 시 사용자에게 알림 등을 추가할 수 있습니다.
    }
  };

  return (
    <Frame>
      <MainHeader />
      <Link to="/">
        <CpsLogo>CPS</CpsLogo>
      </Link>
      <RegisterContainer>
      <SignupFormContainer>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <InputField
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
          <DuplicateCheckButton onClick={handleDuplicateCheck}>중복확인</DuplicateCheckButton>

          <InputLabel htmlFor="pw">비밀번호</InputLabel>
          <InputField
            type="password"
            id="pw"
            name="pw"
            value={formData.pw}
            onChange={handleChange}
            required
          />
          <InputLabel htmlFor="doubleCheckPw">비밀번호 확인</InputLabel>
          <InputField
            type="password"
            id="doubleCheckPw"
            name="doubleCheckPw"
            value={formData.doubleCheckPw}
            onChange={handleChange}
            required
          />
          <InputLabel htmlFor="name">이름</InputLabel>
          <InputField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputLabel htmlFor="nickname">닉네임</InputLabel>
          <InputField
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />

          <InputLabel htmlFor="phone">전화번호</InputLabel>
          <InputField
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <InputLabel htmlFor="scode">학번:</InputLabel>
          <InputField
            type="number"
            id="scode"
            name="scode"
            value={formData.scode.toString()}
            onChange={handleChange}
          />

          <InputLabel htmlFor="email">이메일:</InputLabel>
          <InputField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <SubmissionButton type="submit">가입하기</SubmissionButton>
        </form>
      </SignupFormContainer>
      </RegisterContainer>
    </Frame>
  );
};

export default SignupForm;
