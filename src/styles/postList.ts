import styled ,{css}from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyles = css`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 기본 링크 색상으로 설정 */
`;

export const PostLink = styled(Link)`
  ${linkStyles}
`;

export const PostAnchor = styled.a`
  ${linkStyles}
`;

export const Posts = styled.div`
  position: absolute;
  width: 100vw; /* 변경 */
  left: calc(50% - 50vw); /* 변경 */
  top: 16.67vh; /* 변경 */
  padding: 2.13vh; /* 변경 */
  background: #FFFFFF;
  border: 0.107vh solid #F4F4F4; /* 변경 */
  border-bottom: 0.0535vh solid #ddd; /* 변경: 각 게시물을 구분하는 선 */
  text-decoration: none;
`;

export const PaginationStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.li`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

export const BoardList = styled.div`
  position: relative;
  width: 93.75vw; 
  height: 1.71vh; 
  left: 3.125vw; 
  top: 85vh; 
 
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1.07vh;
`;

export const Button = styled.button`
  width: 12vh; 
  height: 5vh; 
  margin-right: 1.07vh; 
  background: #1B2834;
  border: 0.0535vh solid #C6C6C6; 
  color: #fff;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 23vh;
  height: 5vh;
  left: 15vh;
  top: 30vh;
  padding: 10px;
  border: 1px solid #C6C6C6;
  border-radius: 5px;
  margin-right: 10px;
 
`;
export const SearchBarAndButton = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem; 
gap: 1rem; 
`;
