import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledProblemLink = styled(Link)`
    text-decoration: none; /* Remove underline */
    color: inherit; 
  
`;
export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Pretendard';
    margin-left: 10px;
`;
export const SubmissionSearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SearchBar = styled.input`
    padding: 8px;
    font-size: 16px;
    margin-right: 10px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableHeader = styled.th`
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    margin-top: 20px;
`;

export const ResultSuccess = styled.span`
    color: green;
    font-weight: bold;
`;

export const ResultFailure = styled.span`
    color: red;
    font-weight: bold;
`;
