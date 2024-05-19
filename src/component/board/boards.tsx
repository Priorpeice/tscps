import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination';
import ItemList from '../page/ItemList';
import './boards.css';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';

const Boards: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, handleSearchClick, items, postsPerPage ,totalPages,totalPosts} = usePagination('/api/boards','/api/boards/search');


    const basePath = '/board';

    return (
        <Container>
            <Header>
               <NavigationBar/>
                <Link to="/">
                    <div className="cpsLogo" id="cpsLogo"> CPS </div>
                </Link>
            </Header>
            <div className="posts">
                <input type="text" className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                <button className="search-button" onClick={handleSearchClick}>Search</button> 
                <ItemList items={items} basePath={basePath} searchTerm={searchTerm} />  </div>
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
                    totalPages={totalPages}
                    postsPerPage={postsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </Container>
    );
};

export default Boards;
