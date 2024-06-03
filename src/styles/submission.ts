import { styled } from 'styled-components';

export const SubmissionContainer = styled.div`
  width: 70vw;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const LanguageButton = styled.button`
  float: right;
  background-color: #1B2834;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Section = styled.section`
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  border-bottom: 2px solid #1B2834;
  padding-bottom: 5px;
`;

export const Pre = styled.pre`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  resize: none;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 20px 0;
  background-color: #1B2834;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

export const OutputContainer = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  margin-top: 20px;
`;
export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 14px;
`;
export const CodeEditorContainer = styled.div`
  width: 100%;
  height: 400px; /* Set the desired height */
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;