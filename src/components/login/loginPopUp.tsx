import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './loginform.css';
import { Vector } from '../../styles/mainStyle';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../store/slice/authSlice';
import { Wrapper,Button, Input, InputContainer, LoginContainer, SignupLink, Title } from '../../styles/login';


interface ModalButtonProps {
  openModal: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ openModal }) => {
  return (
    <Vector onClick={openModal}>Sign in</Vector>
  );
};

interface LoginPopupProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/api/auth/login', {
        memberId: username,
        password: password,
      });
     
      const token = response.data.object.accessToken;
      dispatch(setAccessToken(token));
      closeModal();
    } catch (error:any) {
      console.error('Login failed!', error.response?.data);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          borderRadius: '10px',
          padding: '0',
          width: '400px',
          height: '400px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Wrapper>
        <LoginContainer>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <label>ID</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter ID"
              />
            </InputContainer>
            <InputContainer>
              <label>Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </InputContainer>
            <Button type="submit">Sign in</Button>
          </form>
          <SignupLink>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </SignupLink>
        </LoginContainer>
      </Wrapper>
    </ReactModal>
  );
};

export { ModalButton, LoginPopup };
