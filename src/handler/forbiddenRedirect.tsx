import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {LoginPopup} from '../components/login/loginPopUp'; // 로그인 폼 컴포넌트 import
import ReactModal from 'react-modal';
const ForbiddenRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { state } = location;
    setIsOpen(true);
    
  }, [location]);



  return <LoginPopup isOpen = {isOpen} closeModal={(()=> {setIsOpen(false); navigate('/');})}/>; // 로그인 팝업 렌더링
};

export default ForbiddenRedirect;
