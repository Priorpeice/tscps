import axios from 'axios';
import { Comment } from '../../../interface/comment';
import { Board } from '../../../interface/board';

export const handleCommentSubmit = async (
    boardId: string,
    newComment: string,
    setBoard: React.Dispatch<React.SetStateAction<Board | null>>,
    setNewComment: React.Dispatch<React.SetStateAction<string>>,
    accessToken: string | null // accessToken 추가
) => {
    try {
        const response = await axios.post<Comment>(
            `/api/board/${boardId}`,
            {
                content: newComment
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );
        // Append the new comment to the existing comments
        setBoard((prevBoard) => ({
            ...prevBoard!,
            comments: [...(prevBoard!.comments ?? []), response.data]
        }));
        // Clear the comment input
        setNewComment('');
    } catch (error) {
        alert("로그인을 다시해주세요");
        console.error('Error posting comment:', error);
    }
};
