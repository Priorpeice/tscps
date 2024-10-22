// src/component/board/CreateBoardPage.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CreationContainer, Form, FormGroup, Label, Input, Textarea, Button } from '../../styles/Creation';
import { Container,Header } from '../../styles/container';
import NavigationBar from '../navigationbar/navgivationBar';
import { Logo,LogoLink } from '../../styles/logo';
import axiosInstance from '../../utils/axiosInstance';
const CreateBoardPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken); 
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    const isEmptyOrWhitespace = (str: string) => !/\S/.test(str);

    if (isEmptyOrWhitespace(title) || isEmptyOrWhitespace(content)) {
      alert('제목과 내용을 모두 입력해 주세요.');
      return;
    }
    try {
      const response = await axiosInstance.post('/board', 
      {
        title: title,
        content: content
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      }
    );
      
      alert(`게시되었습니다!`);
      navigate('../../boards');
    } catch (error:any) {
      // if (error.response && error.response.status === 401) {
      //   // 403 Forbidden일 때 ForbiddenRedirect 사용
      //   setIsForbidden(true);
      // } 
      // console.error('Error creating problem:', error);
      // // Handle error, e.g., show error message to user
    }
  };

  // if (isForbidden) {
  //   // 403 Forbidden일 때 처리할 컴포넌트를 리턴
  //   return <ForbiddenRedirect />;
  // }

  return (
    <Container>
      <Header>
        <NavigationBar/>
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
    <CreationContainer>
      <h1>게시판</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>제목:</Label>
          <Input type="text" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>내용:</Label>
          <Textarea value={content} onChange={handleContentChange} />
        </FormGroup>
        <Button type="submit">게시</Button>
      </Form>
    </CreationContainer>
    </Container>
  );
}

export default CreateBoardPage;
