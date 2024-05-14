import { styled } from 'styled-components';

export const InputLabel = styled.label`
  position: absolute;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin-left: 2vh;
  text-align: right;
`;

export const InputField = styled.input`
  position: absolute;
  box-sizing: border-box;
  width: 30vw; /* 수정 */
  height: 5vh; 
  left: 10vh;
  padding: 10px;
  border: 1px solid #F6F6F6;
  border-radius: 5px;
  margin-top: 5px;
 
`;

export const ErrorText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #FF5050;
`;


// Styled component for the text "중복확인"
export const DuplicateCheckButton = styled.button`
  position: relative;
  width: 7vw; /* 수정 */
  height: 5vh; /* 수정 */
  
  background: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  color: #1B2834;
  cursor: pointer;
`;


export const SignupFormContainer = styled.div`
  position: absolute;
  width: 80vw; 
  height: 60vh; 
  left: 50%;
  top: 26.68vh;
  background: #1B2834;
  border-radius: 30px;
  transform: translateX(-50%);
`;

export const SubmissionButton = styled.button`
position: absolute;
width: 7vw; 
height: 5vh;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Inter';
font-weight: 500;
`;