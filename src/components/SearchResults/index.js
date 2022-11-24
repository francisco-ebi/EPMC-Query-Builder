import TitleInfo from './TitleInfo';
import AuthorInfo from './AuthorInfo';
import JournalInfo from './JournalInfo';
import ExtraInfo from './ExtraInfo';
import "./SearchResults.css";

const SearchResults = ({ results, hitCount }) => {
  return (
    <div className="container">
      <h1 className="section-title">Search results</h1>
      {results.length === 0 ? (
        <span>Enter a search term to view results</span>
      ) : (
        <>
          <div className="results-wrapper">
            <span>1-25 of <b>{hitCount.toLocaleString()}</b> results</span>
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