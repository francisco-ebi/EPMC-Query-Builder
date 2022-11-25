import { useState, useEffect } from "react";
import SearchQuery from "./components/SearchQuery";
import SearchResults from "./components/SearchResults";
import { fetchSearchResults } from "./api";
import usesDidMountEffect from './hooks/useDidMountEffect';

let resultsPerPage = {};

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hitCount, setHitCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextCursorMark, setNextCursorMark] = useState(null);

  const fetchResults = (params) => {
    if (resultsPerPage[currentPage]) {
      setResults(resultsPerPage[currentPage])
    } else {
      fetchSearchResults(params)
      .then(data => {
        setNextCursorMark(data.nextCursorMark);
        setHitCount(data.hitCount);
        setResults(data.results);
        resultsPerPage[currentPage] = data.results;
      });
    }

  }

  const resetState = () => {
    setResults([]);
    setNextCursorMark(null);
    setHitCount(null);
    setCurrentPage(0);
    resultsPerPage = {};
  }

  // dont run effect when receiving initial value
  // will be handled in onSearchResults function
  usesDidMountEffect(() => {
    fetchResults({query, cursorMark: nextCursorMark});
  }, [currentPage]);

  const onSearchResults = (query) => {
    resetState();
    setQuery(query);
    fetchResults({query})
  }
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <>
      <h1 className="section-title">
        Advanced search query builder
      </h1>
      <SearchQuery onSearchResults={onSearchResults} />
      <SearchResults
        results={results}
        hitCount={hitCount}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        currentPage={currentPage}
      >
      </SearchResults>
    </>
  );
}
export default App;