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
  let pages = [currentPage - 1, currentPage, currentPage + 1];
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
          onClick={onPrevPage}
          >
            Prev
        </button>
        { pages.map(page => (
          <button
            type="button"
            className={page === currentPage ? 'selected': ''}
            onClick={() => setCurrentPage(page)}
            >
              {page}
          </button>
        )) }
        <button
          type="button"
          className="next"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}