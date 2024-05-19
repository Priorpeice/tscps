import {styled} from 'styled-components';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: auto;
  background: #FFFFFF;
`;

export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 18.75vh;
  left: 0px;
  top: 0px;
  background: #1B2834;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.25);
`;

export const CpsLogo = styled.div`
  position: absolute;
  width: 138.88px;
  height: 58.28px;
  left: 50%;
  transform: translateX(-50%);
  top: 3.44vh;
  color: white;
  font-size: 4.5vw;
  text-align: center;
`;

export const RectangleBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 10vw; 
  height: 10vw;
  background: #FFFFFF;
  border: 0.5px solid #3F3F3F;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40%;
`;
export const UserIcon = styled.img`
  position: absolute;
  width: 5.21vw;
  left: 92.71vw;
  top: 1.47vh;
  background: #FFFFFF;
  border-radius: 10px;
`;
export const Vector = styled.button`
  position: absolute;
  width: 5.21vw;
  height: 3.2vh;
  left: 92.8vw;
  top: 12.75vh;
  background: #FFFFFF;
  border-radius: 2.5vw;
  text-align: center;
  line-height: 2.5vh;
  font-size: 0.8vw;
  color: black;
`;

export const Text = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-weight: 200;
  font-size: 1.25vw;
  line-height: 1.5vw;
  color: #000000;
`;

export const IdeText = styled(Text)`
  position: absolute;
  left: 25vw;
  top: 43.7vh; 
  height: auto;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const ProblemText = styled(Text)`
  position: absolute;
  left: 50vw;
  top: 43.7vh; 
  height: auto;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const VerificationText = styled(Text)`
  position: absolute;
  left: 75vw;
  top: 43.7vh; 
  height: auto;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const PcCheckIcon = styled.img`
  position: absolute;
  width: 5vw; 
  left: 75vw;
  top: 38vh; 
  transform: translate(-50%, -50%);
`;

export const TerminalIcon = styled.img`
  position: absolute;
  width: 5vw; 
  left: 25vw;
  top: 38vh;
  transform: translate(-50%, -50%);
`;

export const MathSymbolsIcon = styled.img`
  position: absolute;
  width: 5vw; 
  left: 50vw;
  top: 38vh;
  transform: translate(-50%, -50%);
`;


export const Popup = styled.div`
  position: absolute;
  z-index: 9999;
`;
