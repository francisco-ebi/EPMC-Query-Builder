import "./Paginator.css"

const getFirstResultNum = (currentPage) => {
  if (currentPage === 0) {
    return 1;
  }
  return currentPage * 25;
}

export default function Paginator({
  currentPage,
  hitCount,
  onPrevPage,
  onNextPage,
  setCurrentPage,
}) {
  // only show 3 pages at most
  let pages = [currentPage, currentPage + 1, currentPage + 2];
  pages = pages.filter(page => page > 0);
  return (
    <div className="paginator">
      <span className="hit-count">
        {getFirstResultNum(currentPage)}-{(currentPage + 1) * 25} of&nbsp;
        <b>{hitCount.toLocaleString()}</b> results
      </span>
      <div className="paginator">
        <button
          type="button"
          className="prev"
          aria-label="navigate to previous page"
          onClick={onPrevPage}
          >
            Prev
        </button>
        { pages.map(page => (
          <button
            key={page}
            type="button"
            aria-label={`navigate to page number ${page}`}
            className={page === currentPage + 1 ? 'selected': ''}
            onClick={() => setCurrentPage(page - 1)}
            >
              {page}
          </button>
        )) }
        <button
          type="button"
          className="next"
          aria-label="navigate to next page"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}