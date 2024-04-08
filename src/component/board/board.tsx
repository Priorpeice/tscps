import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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

    return (
        <div>
            {board ? (
                <div>
                    <h2>{board.title}</h2>
                    <p>{board.content}</p>
                    <h3>Comments:</h3>
                    <ul>
                        {board.comments.map(comment => (
                            <li key={comment.id}>
                                <p>{comment.content}</p>
                                <p>{comment.regDate}</p>
                                {/* 댓글 작성자 정보 등 추가 표시 가능 */}
                            </li>
                        ))}
                    </ul>
                    {/* 게시물의 댓글 등을 여기에 표시 */}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PostDetail;
