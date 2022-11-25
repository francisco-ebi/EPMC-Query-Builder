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
  onNextPage
}) {
  return (
    <div className="paginator">
      <span className="hit-count">
        {getFirstResultNum(currentPage)}-{(currentPage + 1) * 25} of&nbsp;
        <b>{hitCount.toLocaleString()}</b> results
      </span>
      <div className="paginator">
        <button
            type="button"
            onClick={onPrevPage}
          >
            Prev
        </button>
        <button
          type="button"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}