import React from 'react';
import { CompileForm } from '../interface/compile';
import { Container, InputBoxWrapper, Label, TextArea } from '../styles/inputBox';

interface Props {
  compileForm: CompileForm;
  handleCompileChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputBox: React.FC<Props> = ({ compileForm, handleCompileChange }) => {
  return (
    <Container>
      <div className="line"></div>
      <InputBoxWrapper id="inputBox">
        <Label htmlFor="input">Enter input</Label>
        <TextArea
          name="input"
          value={compileForm.input}
          onChange={handleCompileChange}
        />
      </InputBoxWrapper>
      <br />
    </Container>
  );
};

export default InputBox;
