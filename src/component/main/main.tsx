import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import ideImage from '../../image/terminal.png';
import problemImage from '../../image/problem.png';
import authImage from '../../image/auth.png';
import userImage from '../../image/user.png';
import { ModalButton ,LoginPopup} from '../login/loginPopUp'; // 컴포넌트 import

const MainPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="frame">
      <div className="header" id="mainHeader"> </div>
      <div className="logo" id="mainCpsLogo">CPS</div>

      <div className="rectangleBox" id="rectangleBox1"></div>
      <div className="rectangleBox" id="rectangleBox2"></div>
      <div className="rectangleBox" id="rectangleBox3"></div>

      {/* VectorButton 컴포넌트 사용 */}
      <ModalButton openModal={openPopup} />
      <LoginPopup isOpen={isPopupOpen} closeModal={closePopup} />

      <Link to="/ide">
        <div className="text text-ide" id="ideText">IDE</div>
      </Link>
      <Link to="/problems">
        <div className="text text-problem" id="problemText">Problem</div>
      </Link>
      <Link to="/another-page">
        <div className="text text-verification" id="verificationText">verification</div>
      </Link>

      <img id="pcCheckIcon" src={authImage} alt="PC Check Icon" />
      <img id="terminalIcon" src={ideImage} alt="Terminal Icon" />
      <img id="mathSymbolsIcon" src={problemImage} alt="Math Symbols Icon" />
      <img id="userIcon" src={userImage} alt="Rectangle" />
    </div>
  );
};

export default MainPage;
