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
            {results.map(result => (
              <div className="result" key={result.id}>
                <p className="title">{result.title}</p>
                <p className="author">{result.authorString}</p>
                {result.journalInfo ? (
                  <p className="journal-info">
                    {result.journalInfo.journal.isoabbreviation},
                    {result.journalInfo.volume}({result.journalInfo.issue}):
                    {result.pageInfo}, {result.firstPublicationDate}
                  </p>
                ) : (
                  <p className="publisher-info">
                    {result.bookOrReportDetails.publisher},
                    {result.bookOrReportDetails.yearOfPublication}
                </p>
                )}
                <p className="extra-info">
                  Cited by: {result.citedByCount} articles |
                  PMID: {result.id} |
                  PMCID: {result.pmcid}
                </p>
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