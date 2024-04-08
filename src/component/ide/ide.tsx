import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CompileLanguageSelect from '../CompileLanguageSelect';
import CodeEditor from '../CodeEditor';
import InputBox from '../InputBox';
import { handleCompileSubmit, handleCompileChange } from '../../handler/formHandler'; // Removed unnecessary imports
import './ide.css';

interface CompileForm {
  language: string;
  code: string;
  input?: string;
}

interface Props {
  initialRows?: number;
  initialCompileForm?: CompileForm;
}

const IDEPage: React.FC<Props> = ({ initialRows, initialCompileForm }) => {
  const [compileForm, setCompileForm] = useState<CompileForm>(
    initialCompileForm || {
      language: 'java',
      code: '',
      input: '',
    }
  );

  const navigate = useNavigate();

  useEffect(() => {
    // Update compileForm when initialCompileForm changes
    setCompileForm(
      initialCompileForm || {
        language: 'java',
        code: '',
        input: '',
      }
    );
  }, [initialCompileForm]);

  const languageOptions = [
    { value: 'java', label: 'Java' },
    { value: 'py', label: 'Python' },
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'js', label: 'JavaScript' },
    { value: 'dart', label: 'Dart' },
  ];

  return (
    <div className="idePage" id="idePage">
      <div className="header" id="header"></div>
      <Link to="/">
        <div className="cpsLogo" id="cpsLogo"> CPS </div>
      </Link>
      <div className="vectorGroup"></div>
      <form onSubmit={(e) => handleCompileSubmit(e, compileForm, navigate)}>
        <CompileLanguageSelect
          languageOptions={languageOptions}
          handleCompileChange={(e:any) => handleCompileChange(e, compileForm, setCompileForm)}
          value={compileForm.language}
        />
        <CodeEditor
          compileForm={compileForm}
          setCompileForm={setCompileForm}
        />
        <InputBox
          compileForm={compileForm}
          handleCompileChange={(e:any) => handleCompileChange(e, compileForm, setCompileForm)}
        />
        <input type="submit" value="Compile" className="button" />
      </form>
      <div className="footer" id="footer"></div>
    </div>
  );
};

export default IDEPage;
