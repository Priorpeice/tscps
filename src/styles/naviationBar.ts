import React from 'react';
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationBar = styled.div`
  position: relative;
  width: 38.8vw; 
  height: 3.2vh; 
  left: 1.2vh;
  top: 12vh; 
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 2.13vh; 
  line-height: 3.2vh; 
  color: #FFFFFF;
  display: flex; 


`;
export const NavigationLink = styled(NavLink )`
  color: #958A8A;
  text-decoration: none;
  &.active {
    color:#FFFFFF; 
    font-weight: bolder; 
  }
  margin-right: 1.5vw; 
  &:last-child {
    margin-right: 0;
  }
`;