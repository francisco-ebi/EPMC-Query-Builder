import { useState } from "react";
import SearchQuery from "./components/SearchQuery";
import SearchResults from "./components/SearchResults";
import { fetchSearchResults } from './api';

const App = () => {
  const [results, setResults] = useState([]);
  const [hitCount, setHitCount] = useState(null);
  const onSearchResults = (query) => {
    fetchSearchResults(query)
    .then(results => {
      setHitCount(results.hitCount);
      setResults(results.resultList.result);
    });
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
      >
      </SearchResults>
    </>
  );
}
export default App;