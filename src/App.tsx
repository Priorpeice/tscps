import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './component/main/main';
import IDEPage from './component/ide/ide';
import PostDetail from './component/board/board';
import ProblemDetails from './component/problem/problem';
import CompileResultPage from './component/result'; // 결과 창 페이지 컴포넌트의 경로에 따라 수정
import BoardPage from './component/board/boards';
import ProblemPage from './component/problem/problems';
import BoardCreationPage from './component/board/creationPage';
import ProblemCreationPage from './component/problem/creationPage';
import MemberRegisterPage from './component/member/register'
import VerificationPage from './component/verification/verfication';
import SubmissionPage from './component/submission/submission';
import AllSubmissionsListPage from './component/submission/allSubmissionList';
import SubmissionsListPage from './component/submission/submissionList';
const App = () => {
  return (

      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/ide" element={<IDEPage />} />
        <Route path="/result" element={<CompileResultPage />} />
        <Route path="/problems" element={<ProblemPage />} />
        <Route path="/boards" element={<BoardPage />} />
        <Route path="/board/:boardId" element={<PostDetail />} />
        <Route path="/problem/:problemId" element={<ProblemDetails/>} />
        <Route path="/board/write" element={<BoardCreationPage/>}/>
        <Route path="/problem/write" element={<ProblemCreationPage/>}/>
        <Route path="/register" element={<MemberRegisterPage/>}/>
        <Route path="/verification" element={<VerificationPage/>}/>
        <Route path="/problem/:problemId/submit" element={<SubmissionPage/>}/>
        <Route path="/submissions" element={<AllSubmissionsListPage/>}/>
        <Route path="/submission/:problemId" element={<SubmissionsListPage/>}/>
      </Routes>
 
  );
};

export default App;
