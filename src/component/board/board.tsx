import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PostTitleBox, PostBox,PostContentBox,CommentBox, PostAndCommentBox ,CommentPostBar,CommentTitleBox,CommentContentBox,CommentTitleContentBox, MessageButton} from '../../styles/board';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container,Header } from '../../styles/container';

interface Comment {
    id: number;
    content: string;
    regDate: string;
    // Add other properties as needed
}

interface Board {
    title: string;
    content: string;
    comments: Comment[];
    // Add other properties as needed
}

const PostDetail: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>(); // Specify the type of useParams
    const [board, setBoard] = useState<Board | null>(null); // Specify the type of useState
    const [newComment, setNewComment] = useState<string>('');
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
    const handleCommentSubmit = async () => {
        try {
            const response = await axios.post<Comment>(`/api/board/${boardId}/comments`, {
                content: newComment,
            });
            // Append the new comment to the existing comments
            setBoard((prevBoard) => ({
                ...prevBoard!,
                comments: [...(prevBoard!.comments ?? []), response.data],
              }));
            // Clear the comment input
            setNewComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };
    return (
        <Container>
        <Header></Header>
        <NavigationBar/>
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
               <CommentTitleContentBox key = {comment.id}>
            <CommentTitleBox>
               <p>{comment.id}</p>
               <p>{comment.regDate}</p>
                </CommentTitleBox>
             <CommentContentBox>
               <p>{comment.content}</p>
             </CommentContentBox>
               </CommentTitleContentBox>
              ))}
                <CommentPostBar
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onSubmit={handleCommentSubmit}
                >
                </CommentPostBar>
              <MessageButton />
              </CommentBox>
              
            </PostAndCommentBox>
          ) 
          
          : (
            <div>Loading...</div>
          )}
        </Container>
      );
};

export default PostDetail;
