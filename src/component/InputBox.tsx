import React from 'react';

interface CompileForm {
  language: string;
  code: string;
  input?: string;
}

interface Props {
  compileForm: CompileForm;
  handleCompileChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputBox: React.FC<Props> = ({ compileForm, handleCompileChange }) => {
  return (
    <div>
      <div className="line"></div>
      <div className="inputBox" id="inputBox">
        <label htmlFor="input" className="inputLabel">Enter input</label>
        <br />
        <textarea
          name="input"
          rows={5}
          cols={50}
          value={compileForm.input}
          onChange={handleCompileChange}
        ></textarea>
      </div>
      <br />
    </div>
  );
};

export default InputBox;
