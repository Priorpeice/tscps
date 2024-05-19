import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PostTitleBox, PostBox, PostContentBox, CommentBox, PostAndCommentBox, CommentPostBar, CommentTitleBox, CommentContentBox, CommentTitleContentBox, MessageButton ,MessageContainer} from '../../styles/board';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import { handleCommentSubmit } from '../comment/handler/commentHandler';
import { Board } from '../../interface/board';
import { Comment } from '../../interface/comment';

const PostDetail: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>(); // Specify the type of useParams
    const [board, setBoard] = useState<Board | null>(null); // Specify the type of useState
    const [newComment, setNewComment] = useState<string>('');
    const accessToken: string | null = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get<Board>(`/api/board/${boardId}`); // Specify the type of axios.get
                setBoard(response.data);
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
        await handleCommentSubmit(boardId!, newComment, setBoard, setNewComment, accessToken);
    };

    return (
        <Container>
            <Header></Header>
            <NavigationBar />
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
                        Comments
                        {board.comments.map((comment) => (
                            <CommentTitleContentBox key={comment.id}>
                                <CommentTitleBox>
                                    <p>{comment.id} {comment.regDate}</p>     
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
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
               />
            <MessageButton onClick={handleCommentButtonClick} />
            </MessageContainer>
        </Container>
    );
};

export default PostDetail;
