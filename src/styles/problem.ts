import { styled } from 'styled-components';
export const ProblemContainer = styled.div`
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

export const SubmitLinkButton = styled.button`
  float: right;
  background-color: #1B2834;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  font-weight:bold;
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const Section = styled.section`
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  border-bottom: 2px solid #1B2834;
  padding-bottom: 5px;
`;

export const ExampleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Example = styled.div`
  width: 48%;
`;
export const Pre = styled.pre`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 0;
`;

export const CopyButton = styled.button`
  font-size: 12px;
  padding: 2px 5px;
  margin-left: 10px;
  background-color: #1B2834;
  color: white;
  border: none;
  cursor: pointer;
`;