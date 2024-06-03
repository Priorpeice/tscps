
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  background-color: #2d2d2d;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignupFormContainer = styled.div`
  background-color: #353535;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
`;

export const InputLabel = styled.label`
  color: white;
  margin-bottom: 5px;
  display: block;
  font-size: 14px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DuplicateCheckButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SubmissionButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;
