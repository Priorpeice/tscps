import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import { VerificationBox, VerificationInput, VerificationOutput } from '../../styles/verification';
import { Logo,LogoLink } from '../../styles/logo';
const VerificationPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [outputValue, setOutputValue] = useState<string>('');
    
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/verification', { question: inputValue });
        setOutputValue(response.data.object.response); 
      } catch (error) {
        console.error('Error during verification:', error);
        setOutputValue('Verification failed. Please try again.');
      }
    };
  
    return (
      <Container>
        <Header> 
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
        </Header>
        
        <VerificationBox>
          <form onSubmit={handleSubmit}>
            <VerificationInput
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter verification data"
            />
            <button type="submit">Submit</button>
          </form>
          <VerificationOutput
            value={outputValue}
            readOnly
            placeholder="Verification result will appear here"
          />
        </VerificationBox>
      </Container>
    );
};

export default VerificationPage;
