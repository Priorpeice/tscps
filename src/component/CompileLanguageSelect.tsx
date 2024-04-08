import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  languageOptions: Option[];
  handleCompileChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const CompileLanguageSelect: React.FC<Props> = ({ languageOptions, handleCompileChange, value }) => (
  <div id="compileLanguageContainer">
    <label htmlFor="compileLanguage">Select Language:</label>
    <select
      name="language"
      id="compileLanguage"
      onChange={handleCompileChange}
      value={value}
    >
      {languageOptions && languageOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default CompileLanguageSelect;
