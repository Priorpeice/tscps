import React, { ReactNode } from 'react';
import { ModalWrapper, ModalContent } from '../../styles/loadingModal';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void; 
}

export const LoadingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <p>로딩 중입니다...</p>
      </ModalContent>
    </ModalWrapper>
  );
};


