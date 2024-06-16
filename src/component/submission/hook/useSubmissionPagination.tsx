// hook/useSubmissionPagination.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Submission } from '../../../interface/submission';

interface UsePaginationResult {
    currentPage: number;
    searchTerm: string;
    handlePageChange: (page: number) => void;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchClick: () => void;
    items: Submission[];
    totalPages: number;
    totalPosts: number; // totalPosts 추가
}

const usePagination = (
    apiUrl: string, 
    searchApiUrl: string
): UsePaginationResult => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<Submission[]>([]);
    const [totalPosts, setTotalPosts] = useState<number>(0); 
    const [totalPages, setTotalPages] = useState<number>(0); 
    const postsPerPage = 10;

    const fetchItems = async (page: number, term: string) => {
        try {
            const response = await axios.get(term ? searchApiUrl : apiUrl , {
                params: {
                    page: page,
                    pageSize: postsPerPage,
                    ...(term && { title: term })
                }
            });
            setItems(response.data.object.content);
            setTotalPosts(response.data.object.pageinfo.listCount);
            setTotalPages(response.data.object.pageinfo.maxPage);
          
            console.log(response.data)
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    };

    useEffect(() => {
        fetchItems(currentPage, searchTerm);
    }, [currentPage, searchTerm]); // problemId도 useEffect 의존성에 추가

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        setCurrentPage(0); // 검색 시 첫 페이지로 설정
        fetchItems(0, searchTerm);
    };

    return {
        currentPage,
        searchTerm,
        handlePageChange,
        handleSearchChange,
        handleSearchClick,
        items,
        totalPages,
        totalPosts,
    };
};

export default usePagination;
