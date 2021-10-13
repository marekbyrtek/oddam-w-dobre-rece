import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (totalItems > itemsPerPage) {
        return (
            <Pagination>
                {pageNumbers.map(el => {
                    return <Pagination.Item key={el} onClick={() => paginate(el)}>{el}</Pagination.Item>
                })}
            </Pagination>
        )
    } else {
        return null;
    }
}

export default PaginationComponent;
