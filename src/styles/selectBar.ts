import styled from 'styled-components';

export const Select = styled.select`
  width: 200px;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  background-color: #F5F5F5;
  color: #333333;
  appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none; 
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #005bb5;
  }
`;

export const Option = styled.option`
  background-color: #1B2834;
  color: white;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: '▼'; /* Custom arrow */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color:  #1B2834;
  }
`;
