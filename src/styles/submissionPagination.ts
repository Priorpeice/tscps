import React from 'react';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

export const PageButton = styled.button`
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #ddd;
    background-color: #f4f4f4;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;