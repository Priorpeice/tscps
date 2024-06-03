import { styled } from 'styled-components';

export const VerificationBox = styled.div`
position: relative;
width: 80vh;
height: 50vh;
left: 5vh;
top: 5vh;
display: flex;
justify-content: center;
margin: 0 auto;
`;


export const VerificationInput = styled.textarea`
  width: 40vh;
  height: 100%;
  margin-right: 2vh;
  border: 1px solid;
  background: #F0F0F0;
  padding: 10px; 
  box-sizing: border-box;
  resize: none;
  
  text-align: left;
  
  &::placeholder {
    text-align: center; /* Center-align placeholder text */
  }

  &:focus {
    border-color: #1B2834; 
    outline: none; 
  }
`;
export const VerificationOutput = styled.textarea`
  width: 40vh;
  height: 100%;
  margin-right: 2vh;
  border: 1px solid;
  background: #F0F0F0;
  padding: 10px; 
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
  resize: none; 
  
  text-align: left; 
  
  &::placeholder {
    text-align: center; 
  }

  &:focus {
    border-color: #1B2834; 
    outline: none; 
  }
`;