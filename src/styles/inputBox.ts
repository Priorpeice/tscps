
import styled from 'styled-components';

export const Container = styled.div`
  .line {
    /* Add any styles for the line if necessary */
  }
`;

export const InputBoxWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export const TextArea = styled.textarea`
  width: 100%; /* Make the textarea take the full width of its container */
  height: 100px; /* Fixed height */
  resize: none; /* Disable resizing */
  padding: 10px;
  background-color: white;
  color:  #1B2834;
  border: 1px solid #0066CC;
  border-radius: 5px;
  font-family: inherit; /* Ensure the font matches the rest of the app */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */

  &:focus {
    outline: none;
    border-color: #005bb5;
  }
`;
