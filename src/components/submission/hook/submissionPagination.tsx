import React from "react";
import { PageButton, PaginationContainer } from "../../../styles/submissionPagination";

interface SubmissionPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const SubmissionPagination: React.FC<SubmissionPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <PaginationContainer>
            <PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
            >
                Previous
            </PageButton>
            {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                    key={i}
                    onClick={() => onPageChange(i)}
                    disabled={currentPage === i}
                >
                    {i + 1}
                </PageButton>
            ))}
            <PageButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages-1}
            >
                Next
            </PageButton>
        </PaginationContainer>
    );
};

export default SubmissionPagination;
