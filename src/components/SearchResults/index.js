import TitleInfo from './TitleInfo';
import AuthorInfo from './AuthorInfo';
import JournalInfo from './JournalInfo';
import ExtraInfo from './ExtraInfo';
import Paginator from './Paginator';
import "./SearchResults.css";

const SearchResults = ({ results, loading, ...restProps}) => {
  const overlayClassName = loading ? "overlay active" : "overlay";
  return (
    <div className="container">
      <div className={overlayClassName} aria-hidden="true">
        <p>Loading...</p>
      </div>
      <h1 className="section-title">Search results</h1>
      <div
        className="sr-only"
        id="announce"
        role="region"
        aria-live="polite"
        >
          {results.length > 0 ? 'Search results are available': null}
      </div>
      {results.length === 0 ? (
        <span>Enter a search term to view results</span>
      ) : (
        <>
          <div className="results-wrapper">
            <Paginator { ...restProps }/>
            <div className="blue-bar-separator"></div>
            {results.map(publication => (
              <div className="result" key={publication.id}>
                <TitleInfo title={publication.title}/>
                <AuthorInfo author={publication.authorString}/>
                <JournalInfo publication={publication} />
                <ExtraInfo publication={publication} />
                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
};

export default SearchResults;