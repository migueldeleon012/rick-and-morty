import { useState } from 'react';
import './pagination.css';

const Pagination = ({ currentPage, setCurrentPage, currentDataInfo }) => {
  const pageNumberArray = [];
  const numberPages = currentDataInfo.pages;
  const numberPagesDisplayed = 5;
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  for (let i = 1; i <= numberPages; i++) {
    pageNumberArray.push(i);
  }

  const changePages = (e) => setCurrentPage(Number(e.target.textContent));

  const handlePrevButton = () => {
    if ((currentPage - 1) % maxPageLimit === 0) {
      setMaxPageLimit(maxPageLimit - numberPagesDisplayed);
      setMinPageLimit(minPageLimit - numberPagesDisplayed);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextButton = () => {
    console.log(currentPage);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + numberPagesDisplayed);
      setMinPageLimit(minPageLimit + numberPagesDisplayed);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const renderPageNumber = (pageNumber) => {
    if (pageNumber <= maxPageLimit && pageNumber > minPageLimit) {
      return (
        <button
          key={pageNumber}
          onClick={changePages}
          className={pageNumber == currentPage ? 'active' : undefined}
        >
          {pageNumber}
        </button>
      );
    }
  };

  return (
    <section className="pagination">
      <button onClick={handlePrevButton} disabled={currentPage <= 1}>
        prev
      </button>
      {minPageLimit >= 1 && (
        <button onClick={handlePrevButton} disabled={currentPage <= 1}>
          &hellip;
        </button>
      )}
      {pageNumberArray.map(renderPageNumber)}
      {pageNumberArray.length > maxPageLimit && (
        <button
          onClick={handleNextButton}
          disabled={currentPage >= pageNumberArray.length}
        >
          &hellip;
        </button>
      )}
      <button
        onClick={handleNextButton}
        disabled={currentPage >= pageNumberArray.length}
      >
        next
      </button>
    </section>
  );
};

export default Pagination;
