import { styled } from 'styled-components';
import MessageIcon from '../image/message.png'
/* 게시글과 댓글을 들어 있는 박스 */
export const PostAndCommentBox = styled.div`
 position: relative;
  top: 5vh;
  width: calc(100% - 20vh); 
  height: 45vh; 
  display: flex;
  margin: 0 auto; 
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center; /* 세로 방향 가운데 정렬 */
`;

export const PostBox = styled.div`
  position: relative;
  width: 48vh;
  height: 43.92vh;
  border: 0.107vh solid #F4F4F4;
`;

export const CommentBox = styled.div`
  position: relative;
  width: 52vh;
  height: 43.92vh;
  border: 0.107vh solid #F4F4F4;
  overflow-y: auto;
`;

export const CommentsHeader = styled.div`
  background-color: #F4F4F4;
  padding: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold; /* Example: Making the text bold */
`;
export const PostTitleBox = styled.div`
position: relative;
width: 48vh; /* 변경 */
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
  position: relative;
  width: 49.7vh; /* 변경 */
  height: 29.87vh; /* 변경 */
  left: 1.92vh; /* 변경 */
  top: 5vh; /* 변경 */
 
`;

export const CommentPostBar = styled.textarea`
position: relative;  
bottom:-5vh;
box-sizing: border-box;
width: 38vh; /* 변경 */
height: 3.33vh; /* 변경 */
background: #FFFFFF;
border: 0.0535vh solid #000000;
border-radius: 15px;
margin-left: 1vh; /* 간격 조정 */
margin : 5px;
padding: 7px;
`;


export const CommentTitleBox = styled.div`
  position: relative;
  color: black; /* 텍스트 색상 설정 */
  display: inline-block; /* 컨텐츠가 옆에 나오도록 설정 */
  margin-right: 10px; /* 댓글 사이의 간격 설정 */
  
`;
export const CommentContentBox = styled.div`
  position: relative;
  color: black; 
`;

export const CommentTitleContentBox = styled.div`
  position: relative;
  margin-bottom: 1px;
`;

export const MessageButton = styled.button`
position: relative;  
bottom:-5vh;
background-image: url(${MessageIcon});
background-size: cover;
width: 2.5vh; /* Adjusted width using vh units */
height: 2.5vh; /* Adjusted height using vh units */
border: none;
cursor: pointer;
background-color : #FFFFFF; 
`;
export const MessageContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  
`;

