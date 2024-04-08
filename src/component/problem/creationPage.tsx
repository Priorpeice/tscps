import React, { useState } from 'react';
import axios from 'axios';
import ForbiddenRedirect from '../../handler/forbiddenRedirect';

const CreateProblemPage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [inputs, setInputs] = useState<string[]>(['']);
    const [outputs, setOutputs] = useState<string[]>(['']);
    const [isForbidden, setIsForbidden] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/problem', {
                title,
                content,
                inputs,
                outputs
            });
            alert(`게시되었습니다!${response}`);
            // Optionally, redirect to another page or show a success message
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

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div>
            <h2>Create New Problem</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>
                <div>
                    <label>Inputs:</label>
                    {inputs.map((input, index) => (
                        <input
                            key={index}
                            type="text"
                            name="input"
                            value={input}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                    ))}
                    <button type="button" onClick={() => handleAddInputOutput('input')}>Add Input</button>
                </div>
                <div>
                    <label>Outputs:</label>
                    {outputs.map((output, index) => (
                        <input
                            key={index}
                            type="text"
                            name="output"
                            value={output}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                    ))}
                    <button type="button" onClick={() => handleAddInputOutput('output')}>Add Output</button>
                </div>
                <button type="submit">Create Problem</button>
            </form>
        </div>
    );
};

export default CreateProblemPage;
