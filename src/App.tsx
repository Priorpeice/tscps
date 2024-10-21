import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/main/main';
import IDEPage from './components/ide/ide';
import PostDetail from './components/board/board';
import ProblemDetails from './components/problem/problem';
import CompileResultPage from './components/result'; // 결과 창 페이지 컴포넌트의 경로에 따라 수정
import BoardPage from './components/board/boards';
import ProblemPage from './components/problem/problems';
import BoardCreationPage from './components/board/creationPage';
import ProblemCreationPage from './components/problem/creationPage';
import MemberRegisterPage from './components/member/register'
import VerificationPage from './components/verification/verfication';
import SubmissionPage from './components/submission/submission';
import AllSubmissionsListPage from './components/submission/allSubmissionList';
import SubmissionsListPage from './components/submission/submissionList';
import SubmissionsDetailPage from './components/submission/submissionDetail';
import MyPage from './components/myPage/myPage';
import ForbiddenRedirect from './handler/forbiddenRedirect';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
const App = () => {
  const errorCode = useSelector((state: RootState) => state.error.code); 
  return (
    <>
    {errorCode && <ForbiddenRedirect />} 
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ide" element={<IDEPage />} />
      <Route path="/result" element={<CompileResultPage />} />
      <Route path="/problems" element={<ProblemPage />} />
      <Route path="/boards" element={<BoardPage />} />
      <Route path="/board/:boardId" element={<PostDetail />} />
      <Route path="/problem/:problemId" element={<ProblemDetails />} />
      <Route path="/board/write" element={<BoardCreationPage />} />
      <Route path="/problem/write" element={<ProblemCreationPage />} />
      <Route path="/register" element={<MemberRegisterPage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/problem/:problemId/submit" element={<SubmissionPage />} />
      <Route path="/submissions" element={<AllSubmissionsListPage />} />
      <Route path="/submission/:problemId" element={<SubmissionsListPage />} />
      <Route path="/submission/detail/:submissionId" element={<SubmissionsDetailPage />} />
      <Route path="/myPage" element={<MyPage />} />
    </Routes>
  </>

  );
};

export default App;
