import { useState, useEffect } from 'react';
import axios from 'axios';

interface PaginationData {
  currentPage: number;
  searchTerm: string;
  handlePageChange: (pageNumber: number) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: any[]; // Adjust the type of items according to your data structure
  postsPerPage: number;
}

const usePagination = (apiUrl: string): PaginationData => {
  const [items, setItems] = useState<any[]>([]); // Adjust the type according to your data structure
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
         
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [apiUrl]);

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
    postsPerPage
  };
};

export default usePagination;
