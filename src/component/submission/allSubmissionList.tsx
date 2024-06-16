import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../page/pagination';
import usePagination from '../page/usePagination';
import ItemList from '../page/ItemList';
// import './submissions.css';
import NavigationBar from '../navigationbar/navgivationBar';
import { Logo, LogoLink } from '../../styles/logo';
import { Container, Header } from '../../styles/container';
import { Posts, Buttons, Button, SearchBar, SearchBarAndButton, ListTitle } from '../../styles/postList';
import { Footer } from '../../styles/footer';

const AllSubmissionsListPage: React.FC = () => {
    const { currentPage, searchTerm, handlePageChange, handleSearchChange, handleSearchClick, items, postsPerPage, totalPages, totalPosts } = usePagination('/api/submissions', '/api/submissions/search');

    const basePath = '/submission';

    return (
        <Container>
            <Header>
                <NavigationBar />
                <LogoLink to="/">
                    <Logo>CPS</Logo>
                </LogoLink>
            </Header>
            <Posts>
                <SearchBarAndButton>
                    <ListTitle>Submissions</ListTitle>
                    <SearchBar type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                    <Buttons>
                        <Button onClick={handleSearchClick}>Search</Button>
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

export default AllSubmissionsListPage;
