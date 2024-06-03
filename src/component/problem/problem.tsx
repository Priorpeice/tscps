import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import { Container, Header } from '../../styles/container';
import NavigationBar from '../navigationbar/navgivationBar';
import { Problem } from '../../interface/problem';
import { Logo,LogoLink } from '../../styles/logo';
import {
  ProblemContainer,
  Title,
  Section,
  SectionTitle,
  ExampleSection,
  Example,
  Pre,
  CopyButton,
  SubmitLinkButton
} from '../../styles/problem';

const ProblemDetails: React.FC = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get<Problem>(`/api/problem/${problemId}`);
        setProblem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching problem:', error);
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId]);

  return (
    <Container>
      <Header> 
        <NavigationBar/>
        <LogoLink to="/">
                    <Logo>CPS</Logo>
                </LogoLink >
          </Header>
      <ProblemContainer>
      {loading ? (
        <div>Loading...</div>
      ) : !problem ? (
        <div>Problem not found</div>
      ) : (
        <>
          <Title>{problem.title}</Title>
          <Link to={`/problem/${problemId}/submit`}>
            <SubmitLinkButton>제출</SubmitLinkButton>
          </Link>
          <Section>
            <SectionTitle>문제</SectionTitle>
            <p>{problem.content}</p>
          </Section>
          <Section>
            <SectionTitle>Examples:</SectionTitle>
            {problem.examples.map(example => (
              <ExampleSection key={example.id}>
                <Example>
                  <h3>예제 입력 {example.id} <CopyButton>복사</CopyButton></h3>
                  <Pre>{example.input}</Pre>
                </Example>
                <Example>
                  <h3>예제 출력 {example.id} <CopyButton>복사</CopyButton></h3>
                  <Pre>{example.output}</Pre>
                </Example>
              </ExampleSection>
            ))}
          </Section>
        </>
      )}
      </ProblemContainer>
    </Container>
    
  );
};

export default ProblemDetails;
