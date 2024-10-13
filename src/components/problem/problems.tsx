import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination'; // usePagination hook import
import ItemList from '../page/ItemList';
import NavigationBar from '../navigationbar/navgivationBar';
import { Container, Header } from '../../styles/container';
import {  Posts, Buttons, Button, SearchBar,SearchBarAndButton ,ListTitle} from '../../styles/postList';
import { Footer } from '../../styles/footer';
import { Logo,LogoLink } from '../../styles/logo';

const Problems: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, handleSearchClick,items ,postsPerPage,totalPages,totalPosts} = usePagination('/api/problems','/api/problems/search'); // usePagination hook usage

   

    const basePath = '/problem';

    return (
        <Container>
            <Header>
               <NavigationBar/>
               <LogoLink to="/">
                    <Logo>CPS</Logo>
                </LogoLink >
            </Header>
            <Posts>
                <SearchBarAndButton>
                    <ListTitle>Problems</ListTitle>
                    <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                    <Buttons>
                    <Button onClick={handleSearchClick}>Search</Button> 
                        <Link to="../problem/write">
                            <Button className="write-button">Write</Button>
                        </Link>
                    </Buttons>
                </SearchBarAndButton>
                <ItemList items={items} basePath={basePath} searchTerm={searchTerm} />  
            </Posts>
            
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
