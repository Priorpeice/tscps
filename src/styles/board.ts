import { styled } from 'styled-components';
import MessageIcon from '../image/message.png'
/* 게시글과 댓글을 들어 있는 박스 */
export const PostAndCommentBox = styled.div`
 position: relative;
  top: 5vh;
  width: calc(100% - 20vh); 
  height: 48vh; 
  display: flex;
  margin: 0 auto; 
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center; /* 세로 방향 가운데 정렬 */
`;

export const PostBox = styled.div`
  position: relative;
  width: 48vh;
  height:40vh;
  border: 0.107vh solid #F4F4F4;
`;

export const CommentBox = styled.div`
  position: relative;
  width: 52vh;
  height: 40vh;
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
padding-left:15px;
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
  height: 15vh; /* 변경 */
  left: 1.92vh; /* 변경 */
  top: 5vh; /* 변경 */
 
`;

export const CommentPostBar = styled.textarea`
  box-sizing: border-box;
  width: 95%; 
  height: 3.33vh; 
  border: none; 
  margin: 0; 
  padding: 7px; 
`;

export const CommentParagraph = styled.p`
  margin: 10px; 
  font-weight: bold;
  font-size: 15px;
`;

export const CommentTitleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end; 
  color: black; /* 텍스트 색상 설정 */
`;
export const CommentContentBox = styled.div`
  position: relative;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  max-width: 200px;
   margin-left: auto;
  
  /* 말풍선 꼬리 */
  ::after {
    content: '';
    position: absolute;
    bottom: -10px;  /* 꼬리의 위치 */
    left: 20px;     /* 꼬리의 위치 */
    border-width: 10px;
    border-style: solid;
    border-color: #f0f0f0 transparent transparent transparent; /* 말풍선 색에 맞춘 꼬리 */
  }
`;

export const CommentTitleContentBox = styled.div`
  position: relative;
  margin-bottom: 1px;
`;

export const MessageButton = styled.button`
bottom:-5vh;
background-image: url(${MessageIcon});
background-size: cover;
padding-right:5px;
width: 2.5vh; 
height: 2.5vh; 
border: none;
cursor: pointer;
background-color : #FFFFFF; 
`;
export const MessageContainer = styled.div`
  display: flex;
  align-items: center; 
  width: 50%;
  justify-content: center;
  border: 0.0535vh solid #000000; 
  border-radius: 15px; 
  padding: 5px;
  background: #FFFFFF;
  margin: 20px auto; 
`;

