import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './loginform.css';
import { Vector } from '../../styles/mainStyle';


interface ModalButtonProps {
  openModal: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ openModal }) => {
  return (
    <Vector onClick={openModal}>Sign in</Vector>
  );
};

interface LoginContentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginPopup: React.FC<LoginContentProps> = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        memberId: username,
        password: password
      });
      
      // accessToken과 refreshToken을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      closeModal();
    } catch (error:any) {
      console.error('Login failed!', error.response?.data);
      // 에러 처리 코드 추가
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#1B2834',
          borderRadius: '30px',
          padding: '20px',
          width: '967px',
          height: '568px'
        }
      }}
    >
      <div className="popup">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container" id="usernameContainer">  
            <input type="text" id="usernameInput" value={username} onChange={handleUsernameChange} className="input-field" placeholder="ID"  />
          </div>
          <div className="input-container" id="passwordContainer">
            <input type="password" id="passwordInput" value={password} onChange={handlePasswordChange} className="input-field" placeholder="PW"  />
          </div>
          <button type="submit" id="loginButton">Login</button>
        </form>
        <button onClick={closeModal}>Close</button>
        
        <Link to="/register">
          <button className="registerButton">Register</button>
        </Link>
      </div>
    </ReactModal>
  );
};

export { ModalButton, LoginPopup };
