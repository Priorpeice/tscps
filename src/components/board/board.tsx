import React, { useState, useEffect ,useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import { PostTitleBox, PostBox, PostContentBox, CommentBox,CommentsHeader, PostAndCommentBox, CommentPostBar, CommentTitleBox, CommentContentBox, CommentTitleContentBox, MessageButton ,MessageContainer, CommentParagraph} from '../../styles/board';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import { handleCommentSubmit } from '../comment/handler/commentHandler';
import { Board } from '../../interface/board';
import { ApiResponse } from '../../interface/response';
import { Logo,LogoLink } from '../../styles/logo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import axiosInstance from '../../utils/axiosInstance';
const PostDetail: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>(); // Specify the type of useParams
    const [board, setBoard] = useState<Board | null>(null); // Specify the type of useState
    const [newComment, setNewComment] = useState<string>('');
    const accessToken = useSelector((state: RootState) => state.accessToken.accessToken); 
    const commentInputRef = useRef<HTMLTextAreaElement>(null); // CommentPostBar에 대한 참조

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosInstance.get<ApiResponse<Board>>(`/board/${boardId}`); // Specify the type of axios.get
                setBoard(response.data.object);
        
            } catch (error) {
                console.error('Error fetching board:', error);
            }
        };

        fetchPost();
    }, [boardId]);

    const handleCommentButtonClick = async () => {
        if (!accessToken) {
          console.error('Access token not found');
          return;
        }
    
        if (newComment.trim() === "") {
          alert("댓글을 입력해야 보낼 수 있습니다."); // Alert으로 에러 메시지 표시
          commentInputRef.current?.focus(); // 다시 포커스 맞추기
          return;
        }
        await handleCommentSubmit(boardId!, newComment, setBoard, setNewComment, accessToken);
      };
    
     
    return (
        <Container>
            <Header>
            <NavigationBar />
            <LogoLink to="/">
                    <Logo>CPS</Logo>
                </LogoLink >
            </Header>
         
            {board ? (
                <PostAndCommentBox>
                    <PostBox>
                        <PostTitleBox>
                            {board.title}
                        </PostTitleBox>
                        <PostContentBox>
                            <p>{board.content}</p>
                        </PostContentBox>
                    </PostBox>
                    <CommentBox>
                        <CommentsHeader>Comments</CommentsHeader>
                        {board.comments.map((comment) => (
                            <CommentTitleContentBox key={comment.id}>
                                <CommentTitleBox>
                                  <CommentParagraph>{comment.id} {comment.nickname}</CommentParagraph>  
                                   {/* {comment.regDate} */}
                                </CommentTitleBox>
                                <CommentContentBox>
                                    <p>{comment.content}</p>
                                </CommentContentBox>
                            </CommentTitleContentBox>
                        ))}                     
                    </CommentBox>
                </PostAndCommentBox>
                
            ) : (
                <div>Loading...</div>
            )}
      <MessageContainer>
        <CommentPostBar
          ref={commentInputRef} // 참조 추가
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <MessageButton onClick={handleCommentButtonClick} />
      </MessageContainer>
        </Container>
    );
};

export default PostDetail;
