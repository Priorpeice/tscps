import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Frame, MainHeader, CpsLogo } from '../../styles/mainStyle'; 
import { InputLabel, InputField,DuplicateCheckButton,SignupFormContainer ,SubmissionButton} from '../../styles/register'; 
import { Link } from 'react-router-dom';
interface FormData {
  id: string;
  pw: string;
  doubleCheckPw: string;
  name: string;
  nickname: string;
  phone: string;
  scode: number;
  email: string;
}

const SignupForm: React.FC = () => {
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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
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
      <SignupFormContainer>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="id" style={{ top: '12vh'}}>아이디</InputLabel>
          <InputField
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            style={{ top: '10vh', left: '12vh' ,width: '27vh'}}
          />
          <DuplicateCheckButton style={{ top: '10.5vh' ,left : '42vh'}}>중복확인</DuplicateCheckButton>
  
          <InputLabel htmlFor="pw" style={{ top: '18vh' }}>비밀번호</InputLabel>
          <InputField
            type="password"
            id="pw"
            name="pw"
            value={formData.pw}
            onChange={handleChange}
            required
            style={{ top: '16vh', left: '12vh' }}
          />
          <InputLabel htmlFor="doubleCheckPw" style={{ top: '24vh' }}>비밀번호 확인</InputLabel>
          <InputField
            type="password"
            id="doubleCheckPw"
            name="doubleCheckPw"
            value={formData.doubleCheckPw}
            onChange={handleChange}
            required
            style={{ top: '22vh', left: '12vh' }}
          /> 
          <InputLabel htmlFor="name" style={{ top: '30vh' }}>이름</InputLabel>
          <InputField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ top: '28vh' , left: '12vh' }}
          />
  
          <InputLabel htmlFor="nickname" style={{ top: '12vh', left: '75vh' }}>닉네임</InputLabel>
          <InputField
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            style={{ top: '10vh'  , left: '85vh'}}
          />
  
          <InputLabel htmlFor="phone" style={{ top: '18vh', left: '75vh'  }}>전화번호</InputLabel>
          <InputField
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ top: '16vh', left: '85vh' }}
          />
  
          <InputLabel htmlFor="scode" style={{ top: '24vh', left: '75vh' }}>학번:</InputLabel>
          <InputField
            type="number"
            id="scode"
            name="scode"
            value={formData.scode.toString()}
            onChange={handleChange}
            style={{ top: '22vh' , left: '85vh'}}
          />
  
          <InputLabel htmlFor="email" style={{ top: '30vh', left: '75vh' }}>이메일:</InputLabel>
          <InputField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ top: '28vh', left: '85vh' }}
          />
  
        <SubmissionButton type="submit" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translate(-50%, -50%)' }}>가입하기</SubmissionButton>
        </form>
      </SignupFormContainer>
    </Frame>
  );  
};

export default SignupForm;
