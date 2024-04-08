import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  id: string;
  pw: string;
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
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디:</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="pw">비밀번호:</label>
          <input type="password" id="pw" name="pw" value={formData.pw} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="name">이름:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="nickname">닉네임:</label>
          <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">전화번호:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="scode">학번:</label>
          <input type="number" id="scode" name="scode" value={formData.scode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default SignupForm;
