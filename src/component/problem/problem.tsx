import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Problem {
  id: string;
  title: string;
  content: string;
  examples: { id: string; input: string; output: string }[];
}

const ProblemDetails: React.FC = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  let content: JSX.Element;

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

  if (loading) {
    content = <div>Loading...</div>;
  } else if (!problem) {
    content = <div>Problem not found</div>;
  } else {
    content = (
      <div>
        <h2>{problem.title}</h2>
        <p>{problem.content}</p>
        <h3>Examples:</h3>
        <ul>
          {problem.examples.map(example => (
            <li key={example.id}>
              <strong>Input:</strong> {example.input}, <strong>Output:</strong> {example.output}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ProblemDetails;
