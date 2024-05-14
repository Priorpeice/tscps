import React from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const NavigationBar = styled.div`
  position: absolute;
  width: 38.8vw; /* 변경 */
  height: 3.2vh; /* 변경 */
  left: 1.57vw; /* 변경 */
  top: 12vh; /* 변경 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 2.13vh; 
  line-height: 3.2vh; 
  color: #FFFFFF;

`;
export const NavigationLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
`;