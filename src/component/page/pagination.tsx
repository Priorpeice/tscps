import React from 'react';

interface Props {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPosts, postsPerPage, onPageChange }) => {
  const pageNumbers: number[] = [];

  // 전체 페이지 수 계산
  const totalPages: number = Math.ceil(totalPosts / postsPerPage);

  // 페이지 숫자 배열 생성
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <a href="javascript:void(0)" onClick={() => onPageChange(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
