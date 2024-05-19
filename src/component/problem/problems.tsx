import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination'; // usePagination hook import
import ItemList from '../page/ItemList';
import NavigationBar from '../navigationbar/navgivationBar';

const Problems: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, handleSearchClick,items ,postsPerPage,totalPages,totalPosts} = usePagination('/api/problems','/api/problems/search'); // usePagination hook usage

   

    const basePath = '/problem';

    return (
        <div className="container">
            <div className="header">
                <NavigationBar />
                <Link to="/">
                    <div className="cpsLogo" id="cpsLogo"> CPS </div>
                </Link>
            </div>
            <div className="posts">
            <input type="text" className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                <button className="search-button" onClick={handleSearchClick}>Search</button> {/* 검색 버튼 추가 */}
                <ItemList items={items} basePath={basePath} searchTerm={searchTerm} /> </div>
           
            <div className="buttons">
                <Link to="../problems">
                    <button className="problem-button">Problem</button>
                </Link>
                <Link to="../boards">
                    <button className="board-button">Board</button>
                </Link>
                <Link to="../problem/write">
                    <button className="write-button">Write</button>
                </Link>
            </div>
            <div className="footer">
                <Pagination
                    currentPage={currentPage}
                    totalPosts={totalPosts} // totalPosts prop 전달
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    postsPerPage={postsPerPage}
                />
            </div>
        </div>
    );
};

export default Problems;
