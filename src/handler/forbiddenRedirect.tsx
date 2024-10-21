// src/component/ForbiddenRedirect.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/errorSlice';
import { LoginPopup } from '../components/login/loginPopUp'; 
import { RootState } from '../store/store'; 

const ForbiddenRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const errorCode = useSelector((state: RootState) => state.error.code);

  useEffect(() => { 
    if (errorCode) {
      setIsOpen(true); 
    }
  }, [errorCode, dispatch]);

  const closeModal = () => {
    setIsOpen(false);
    dispatch(clearError()); 
    // navigate('/'); 
  };

  return <LoginPopup isOpen={isOpen} closeModal={closeModal} />;
};

export default ForbiddenRedirect;
