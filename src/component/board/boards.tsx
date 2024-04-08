import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination';
import ItemList from '../page/ItemList';
import './boards.css';
import NavigationBar from '../navigationbar/navgivationBar';

const Boards: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, items, postsPerPage } = usePagination('/api/boards');

    const totalPosts = items.length;
    const basePath = '/board';

    return (
        <div className="container">
            <div className="header">
               <NavigationBar/>
                <Link to="/">
                    <div className="cpsLogo" id="cpsLogo"> CPS </div>
                </Link>
            </div>
            <div className="posts">
                <input type="text" className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                <ItemList items={items} basePath={basePath} searchTerm={searchTerm} />
            </div>
            <div className="buttons">
                <Link to="../problems">
                    <button className="problem-button">Problem</button>
                </Link>
                <Link to="../boards">
                    <button className="board-button">Board</button>
                </Link>
                <Link to="../board/write">
                    <button className="write-button">Write</button>
                </Link>
            </div>
            <div className="footer">
                <Pagination
                    currentPage={currentPage}
                    totalPosts={totalPosts}
                    postsPerPage={postsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Boards;
