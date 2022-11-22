import { useState } from "react";
import SearchQuery from "./components/SearchQuery";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <h1 className="section-title">Advanced search query builder</h1>
      <SearchQuery></SearchQuery>
      <SearchResults results={results}></SearchResults>
    </>
  );
}
export default App;