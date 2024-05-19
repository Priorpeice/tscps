import { useState, useEffect } from 'react';
import axios from 'axios';

interface PaginationData {
  currentPage: number;
  searchTerm: string;
  handlePageChange: (pageNumber: number) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  items: any[]; 
  postsPerPage: number;
  totalPosts: number; 
  totalPages: number;
}

const usePagination = (apiUrl: string, searchApiUrl: string): PaginationData => {
  const [items, setItems] = useState<any[]>([]); // Adjust the type according to your data structure
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalPosts, setTotalPosts] = useState<number>(0); 
  const [totalPages, setTotalPages] = useState<number>(0); 
  
  const fetchData = async (page: number, term: string) => {
    try {
      const response = await axios.get(term ? searchApiUrl : apiUrl, {
        params: {
          page: page,
          pageSize: postsPerPage,
          ...(term && { title: term })
        }
      });
      console.log(response.data);
      setItems(response.data.object.content);
      setTotalPosts(response.data.object.pageinfo.listCount);
      setTotalPages(response.data.object.pageinfo.maxPage);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };
  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [apiUrl, searchApiUrl, currentPage, postsPerPage]);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setCurrentPage(0);
    fetchData(0, searchTerm);
  };

  return {
    currentPage,
    searchTerm,
    handlePageChange,
    handleSearchChange,
    handleSearchClick,
    items,
    postsPerPage,
    totalPages,
    totalPosts
  };
};

export default usePagination;
