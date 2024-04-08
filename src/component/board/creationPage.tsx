import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import ForbiddenRedirect from '../../handler/forbiddenRedirect';

const CreateBoardPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isForbidden, setIsForbidden] = useState(false);
  const accessToken: string | null = localStorage.getItem('accessToken');
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/api/board', 
      {
        title: title,
        content: content
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      
      alert(`게시되었습니다!${response}`);
      
    } catch (error:any) {
      if (error.response && error.response.status === 403) {
          // 403 Forbidden일 때 ForbiddenRedirect 사용
          setIsForbidden(true);
      } 
      console.error('Error creating problem:', error);
      // Handle error, e.g., show error message to user
  }
  };
  if (isForbidden) {
    // 403 Forbidden일 때 처리할 컴포넌트를 리턴
    return <ForbiddenRedirect />;
}
  return (
    <div>
      <h1>게시판</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>내용:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">게시</button>
      </form>
    </div>
  );
}

export default CreateBoardPage;
