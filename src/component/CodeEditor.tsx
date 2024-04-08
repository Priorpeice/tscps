// CodeEditor.tsx
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';

interface Props {
  compileForm: {
    language: string;
    code: string;
  };
  setCompileForm: React.Dispatch<React.SetStateAction<{
    language: string;
    code: string;
  }>>;
}

const CodeEditor: React.FC<Props> = ({ compileForm, setCompileForm }) => {
  const handleEditorChange = (value: string) => {
    setCompileForm((prevForm) => ({ ...prevForm, code: value }));
  };

  const getAceMode = (language: string): string => {
    switch (language) {
      case 'java':
        return 'java';
      case 'py':
        return 'python';
      case 'c':
      case 'cpp':
        return 'c_cpp';
      case 'js':
        return 'javascript';
      case 'dart':
        return 'javascript';
      default:
        return 'text';
    }
  };

  const getAceTheme = (language: string): string => {
    switch (language) {
      case 'java':
      case 'c':
      case 'cpp':
      case 'dart':
        return 'monokai';
      case 'py':
      case 'js':
        return 'github';
      default:
        return 'textmate';
    }
  };

  return (
    <div className="idePage" id="idePage">
      <AceEditor
        mode={getAceMode(compileForm.language)}
        theme={getAceTheme(compileForm.language)}
        name="codeTextArea"
        editorProps={{ $blockScrolling: true }}
        value={compileForm.code}
        onChange={handleEditorChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
