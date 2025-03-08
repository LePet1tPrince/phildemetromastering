import Pagination from 'react-bootstrap/Pagination';
import React from 'react';

const Paginate = ({ cardsPerPage, totalCards, currentPage, handlePageChange }) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Create pagination items
  const items = [];

  // Determine range of page numbers to show
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, totalPages);

  // Adjust start page if we're near the end
  if (endPage === totalPages) {
    startPage = Math.max(endPage - 4, 1);
  }

  // Add page number items
  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center my-4">
      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        />

        {startPage > 1 && (
          <>
            <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
            {startPage > 2 && <Pagination.Ellipsis disabled />}
          </>
        )}

        {items}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <Pagination.Ellipsis disabled />}
            <Pagination.Item onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        )}

        <Pagination.Next
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Paginate;
