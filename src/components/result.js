import React from 'react';
import { useLocation } from 'react-router-dom';

const CompileResultPage = () => {
    const location = useLocation();
    const { compilationResult } = location.state;
  
    return (
      <div>
        <h1>Compile Result</h1>
  
        {compilationResult && (
          <div>
            <h2>Compilation Output:</h2>
            <pre>{compilationResult.object.output}</pre>
            <pre>{compilationResult.object.runTime}</pre>
          </div>
        )}
  
        {/* 다른 결과 정보들도 추가할 수 있습니다. */}
  
        <a href="/ide">Back to IDE</a>
      </div>
    );
  };
  
  export default CompileResultPage;