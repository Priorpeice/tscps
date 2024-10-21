// src/component/problem/CreateProblemPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ForbiddenRedirect from '../../handler/forbiddenRedirect';
import { CreationContainer, Form, FormGroup, Label, Input, Textarea,InAndOutput, Button, AddButton } from '../../styles/Creation';
import { Container, Header } from '../../styles/container';
import NavigationBar from '../navigationbar/navgivationBar';
import { Logo, LogoLink } from '../../styles/logo';
import axiosInstance from '../../utils/axiosInstance';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CreateProblemPage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [inputs, setInputs] = useState<string[]>(['']);
    const [outputs, setOutputs] = useState<string[]>(['']);
    const [isForbidden, setIsForbidden] = useState(false);
    const accessToken= useSelector((state: RootState) => state.accessToken.accessToken);
    const navigate = useNavigate(); 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isEmptyOrWhitespace = (str: string) => !/\S/.test(str);

        if (isEmptyOrWhitespace(title) || isEmptyOrWhitespace(content)) {
          alert('제목과 내용을 모두 입력해 주세요.');
          return;
        }
        
        try {
            const response = await axiosInstance.post('/problem', {
                title,
                content,
                inputs,
                outputs
            },
            {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              }
        );
            alert(`게시되었습니다!`);
           navigate('../../problems');
        } catch (error:any) {
            if (error.response && error.response.status === 401) {
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

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'input') {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        } else if (name === 'output') {
            const newOutputs = [...outputs];
            newOutputs[index] = value;
            setOutputs(newOutputs);
        }
    };

    const handleAddInputOutput = (type: 'input' | 'output') => {
        if (type === 'input') {
            setInputs([...inputs, '']);
        } else if (type === 'output') {
            setOutputs([...outputs, '']);
        }
    };

    return (
        <Container>
        <Header>
        <NavigationBar/>
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
        <CreationContainer>
            <h2>Create New Problem</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title:</Label>
                    <Input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label>Content:</Label>
                    <Textarea value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label>Inputs:</Label>
                    {inputs.map((input, index) => (
                        <InAndOutput
                            key={index}
                            name="input"
                            value={input}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(index, e)}
                            required
                        />
                    ))}
                    <AddButton type="button" onClick={() => handleAddInputOutput('input')}>Add Input</AddButton>
                </FormGroup>
                <FormGroup>
                    <Label>Outputs:</Label>
                    {outputs.map((output, index) => (
                        <InAndOutput
                            key={index}
                            name="output"
                            value={output}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(index, e)}
                            required
                        />
                    ))}
                    <AddButton type="button" onClick={() => handleAddInputOutput('output')}>Add Output</AddButton>
                </FormGroup>
                <Button type="submit">Create Problem</Button>
            </Form>
        </CreationContainer>
        </Container>
    );
};

export default CreateProblemPage;
