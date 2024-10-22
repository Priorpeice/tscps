import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: auto;
  background-color: #1E2833;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const IdeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: calc(100% - 60px);
  margin-top: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CompileLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
`;

export const CodeEditorContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: #2B3A47;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

export const InputOutputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Panel = styled.div`
  background-color: #2B3A47;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompileButton = styled.button`
  background-color: #0066CC;
  height:30px;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

export const CodeSaveButton = styled.button`
  background-color: #AB38AD;
  height:30px;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

export const CompilationResult = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: white; 
  color:  #1B2834;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 300px;
  width: 93%;

`;
export const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: #2B3A47;
  position: absolute;
  bottom: 0;
`;
