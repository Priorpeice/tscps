import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Frame, MainHeader, CpsLogo, RectangleBox, Vector, IdeText, ProblemText, VerificationText, PcCheckIcon, TerminalIcon, UserIcon, MathSymbolsIcon, Popup } from '../../styles/mainStyle'; // styled-components import
import ideImage from '../../image/terminal.png';
import problemImage from '../../image/problem.png';
import authImage from '../../image/auth.png';
import userImage from '../../image/user.png';
import { ModalButton, LoginPopup } from '../login/loginPopUp'; // 컴포넌트 import
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken);


  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Frame>
      <MainHeader />
      <CpsLogo>CPS</CpsLogo>
      {/* Rectangle Boxes */}
      <RectangleBox id="rectangleBox1" style={{ left: '25vw', top: '39.22vh', transform: 'translate(-50%, -50%)' }} />
      <RectangleBox id="rectangleBox2" style={{ left: '50vw', top: '39.22vh', transform: 'translate(-50%, -50%)' }} />
      <RectangleBox id="rectangleBox3" style={{ left: '75vw', top: '39.22vh', transform: 'translate(-50%, -50%)' }} />

      {/* Conditional rendering based on accessToken */}
      {accessToken ? (
        <Link to="/myPage">
         <Vector>profile</Vector>
        </Link>
      ) : (
        <ModalButton openModal={openPopup} />
      )}

      <LoginPopup isOpen={isPopupOpen} closeModal={closePopup} />
      <Link to="/ide">
        <IdeText>IDE</IdeText>
      </Link>
      <Link to="/problems">
        <ProblemText>Problem</ProblemText>
      </Link>
      <Link to="/verification">
        <VerificationText>verification</VerificationText>
      </Link>
      
      {/* 아이콘 이미지 */}
      <Link to="/verification">
      <PcCheckIcon src={authImage} alt="PC Check Icon" />
      </Link>
      <Link to="/ide">
      <TerminalIcon src={ideImage} alt="Terminal Icon" />
      </Link>
      <UserIcon src={userImage} alt="Rectangle" />
      <Link to="/problems">
      <MathSymbolsIcon src={problemImage} alt="Math Symbols Icon" />
      </Link>
      <Popup id="popup" />
    </Frame>
  );
};

export default MainPage;
