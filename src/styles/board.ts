import { styled } from 'styled-components';
import MessageIcon from '../image/message.png'
/* 게시글과 댓글을 들어 있는 박스 */
export const PostAndCommentBox = styled.div`
 position: absolute;
  width: 100vw; /* 변경 */
  height: 41.94vh; /* 변경 */
  left: 1.6vh; /* 변경 */
  top: 16.4vh; /* 변경 */
 
`;

export const PostBox = styled.div`
  position: absolute;
  width: 70vh; 
  height: 43.92vh; 
  left: 4vh; 
  top: 5vh; 
  border: 0.107vh solid #F4F4F4; 
`;
export const CommentBox = styled.div`
  position: absolute;
  width: 70vh;  /* 변경 */
  height: 43.92vh; /* 변경 */
  left: 74vh; /* 변경 */
  top: 5vh; /* 변경 */
  border: 0.107vh solid #F4F4F4;
`;
export const PostTitleBox = styled.div`
position: absolute;
width: 70vh; /* 변경 */
height: 4.63vh; /* 변경 */
left: 0vh; /* 변경 */
top: 0vh;
border-bottom: 0.0535vh solid #ddd;


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 2.13vh; /* 변경 */
line-height: 5vh; /* 변경 */
color: #1B2834;

`

export const PostContentBox = styled.div`
  position: absolute;
  width: 49.7vh; /* 변경 */
  height: 29.87vh; /* 변경 */
  left: 1.92vh; /* 변경 */
  top: 5vh; /* 변경 */
 
`;

export const CommentPostBar = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 38vh; /* 변경 */
  height: 3.33vh; /* 변경 */
  left: 17vh; 
  bottom: 5vh; 
  background: #FFFFFF;
  border: 0.0535vh solid #000000;
  border-radius: 15px;
`;


export const CommentTitleBox = styled.div`
  position: absolute;
  width: 27vh; 
  height: 10.4vh; 
  left: 98.9vh;
  top: 40.3vh; 
  
`;
export const CommentContentBox = styled.div`
  position: absolute;
  width: 61vh; 
  height: 10.4vh; 
  left: 125.9vh; 
  top: 40.5vh; 
`;

export const CommentTitleContentBox = styled.div`
  position: absolute;
  width: 88vh; 
  height: 10.4vh; 
  left: 98.9vh;
  top: 40.5vh; 

`;

export const MessageButton = styled.button`
  position : absolute;  
  background-image: url(${MessageIcon});
  background-size: cover;
  width: 2.5vh; /* Adjusted width using vh units */
  height: 2.5vh; /* Adjusted height using vh units */
  left: 55vh; 
  bottom: 5vh; 
  border: none;
  cursor: pointer;
`;


