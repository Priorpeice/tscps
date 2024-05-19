import React from 'react';
import { PaginationStyle,PaginationItem,PostAnchor } from '../../styles/postList';
interface Props {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPosts, totalPages, postsPerPage ,onPageChange }) => {
  const pageNumbers: number[] = [];

  // 전체 페이지 수 계산
 

  // 페이지 숫자 배열 생성
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationStyle>
        {pageNumbers.map((number) => (
          <PaginationItem key={number} className={number === currentPage+1 ? 'active' : ''}>
            <PostAnchor href="javascript:void(0)" onClick={() => onPageChange(number-1)}>
              {number}
            </PostAnchor>
          </PaginationItem>
        ))}
      </PaginationStyle>
    </nav>
  );
};

export default Pagination;
