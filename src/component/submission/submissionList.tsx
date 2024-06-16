// src/component/submission/submissionList.tsx

import React from "react";
import { Link, useParams } from "react-router-dom";
import usePagination from "./hook/useSubmissionPagination";
import NavigationBar from "../navigationbar/navgivationBar";
import {
  Title,
  StyledProblemLink,
  SubmissionSearchWrapper,
  SearchBar,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Footer,
  ResultSuccess,
  ResultFailure,
} from "../../styles/submissions";
import { Logo, LogoLink } from "../../styles/logo";
import { Container, Header } from "../../styles/container";
import SubmissionPagination from "./hook/submissionPagination";

const SubmissionsListPage: React.FC = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const {
    currentPage,
    searchTerm,
    handlePageChange,
    handleSearchChange,
    handleSearchClick,
    items,
    totalPages,
  } = usePagination(`/api/submission/${problemId}`, "/api/submissions/search");

  return (
    <Container>
      <Header>
        <NavigationBar />
        <LogoLink to="/">
          <Logo>CPS</Logo>
        </LogoLink>
      </Header>
      <SubmissionSearchWrapper>
      <Title>Problem: {problemId}번</Title>
      <div>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={handleSearchClick}>Search</Button>
        </div>
      </SubmissionSearchWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader>제출 번호</TableHeader>
            <TableHeader>아이디</TableHeader>
            <TableHeader>문제</TableHeader>
            <TableHeader>결과</TableHeader>
            <TableHeader>언어</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.submissionId}</TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>
                <StyledProblemLink to ={`/problem/${item.problemId}`}>{item.problemId}</StyledProblemLink >
              </TableCell>
              <TableCell>
                {item.isAnswer ? (
                  <ResultSuccess>맞았습니다!!</ResultSuccess>
                ) : (
                  <ResultFailure>틀렸습니다...</ResultFailure>
                )}
              </TableCell>

              <TableCell>{item.language}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Footer>
        <SubmissionPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Footer>
    </Container>
  );
};

export default SubmissionsListPage;
