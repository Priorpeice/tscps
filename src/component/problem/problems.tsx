import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination'; // usePagination hook import
import ItemList from '../page/ItemList';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import {  Posts, Buttons, Button, SearchBar } from '../../styles/postList';
import { Footer } from '../../styles/footer';


const Problems: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, handleSearchClick,items ,postsPerPage,totalPages,totalPosts} = usePagination('/api/problems','/api/problems/search'); // usePagination hook usage

   

    const basePath = '/problem';

    return (
        <Container>
            <Header>
               <NavigationBar/>
                <Link to="/">
                    <div className="cpsLogo" id="cpsLogo"> CPS </div>
                </Link>
            </Header>
            <Posts>
            <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                <ItemList items={items} basePath={basePath} searchTerm={searchTerm} />  </Posts>
            <Buttons>
                <Button onClick={handleSearchClick}>Search</Button> 
                <Link to="../problems">
                    <Button className="problem-button">Problem</Button>
                </Link>
                <Link to="../boards">
                    <Button className="board-button">Board</Button>
                </Link>
                <Link to="../board/write">
                    <Button className="write-button">Write</Button>
                </Link>
            </Buttons>
            <Footer>
                <Pagination
                    currentPage={currentPage}
                    totalPosts={totalPosts}
                    totalPages={totalPages}
                    postsPerPage={postsPerPage}
                    onPageChange={handlePageChange}
                />
            </Footer>
        </Container>
    );
};

export default Problems;
