import { useState, useEffect } from 'react';
import axios from 'axios';

interface PaginationData {
  currentPage: number;
  searchTerm: string;
  handlePageChange: (pageNumber: number) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: any[]; // Adjust the type of items according to your data structure
  postsPerPage: number;
  totalPosts: number; 
  totalPages: number;
}

const usePagination = (apiUrl: string): PaginationData => {
  const [items, setItems] = useState<any[]>([]); // Adjust the type according to your data structure
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalPosts, setTotalPosts] = useState<number>(0); 
  const [totalPages, setTotalPages] = useState<number>(0); 
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          page: currentPage, // 현재 페이지 번호
          pageSize: postsPerPage // 페이지당 아이템 수
        }
      });
      console.log(response.data)
      setItems(response.data.object.content);
      setTotalPosts(response.data.object.pageinfo.listCount)
      setTotalPages(response.data.object.pageinfo.maxPage)
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    
   
    if (currentPage === 0) {
      fetchData();
    }
    
  }, [apiUrl, currentPage, postsPerPage]);

  useEffect(() => {
    // currentPage가 0이 아니고 postsPerPage가 0이 아닐 때만 요청
    if (currentPage !== 0 && postsPerPage !== 0) {
      fetchData();
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    currentPage,
    searchTerm,
    handlePageChange,
    handleSearchChange,
    items,
    postsPerPage,
    totalPages,
    totalPosts
  };
};

export default usePagination;
