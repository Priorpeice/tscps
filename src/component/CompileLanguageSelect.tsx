import React, { ChangeEvent } from 'react';
import { Select,Option,SelectWrapper } from '../styles/selectBar';
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
    <label htmlFor="compileLanguage">Select Language  :  </label>
    <SelectWrapper>
      <Select
        name="language"
        id="compileLanguage"
        onChange={handleCompileChange}
        value={value}
      >
        {languageOptions && languageOptions.map(option => (
          <Option key={option.value} value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </SelectWrapper>
  </div>
);

export default CompileLanguageSelect;
