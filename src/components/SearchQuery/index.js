import { useState } from "react";
import "./SearchQuery.css";

const SearchQuery = (onSearch) => {
  const [term, setTerm] = useState("");
  const [operator, setOperator] = useState("OR");
  const [query, setQuery] = useState([]);

  const addTerm = event => {
    event.preventDefault();
    const tempQuery = [...query];
    if (query.length === 0) {
      tempQuery.push(term);
    } else {
      tempQuery.push(operator, term);
    }
    setQuery(tempQuery);
    setTerm("");
  };

  return (
    <>
      <div className="blue-bar">
        <h2>Add keyword or phrase</h2>
      </div>
      <form className="term-form" onSubmit={addTerm}>
        <label htmlFor="searchTerm">
          Enter a term or phrase
        </label>
        <div className="controls">
          <div className="inner-container">
            {query.length ? (
            <select
              name="operator"
              id="operator"
              value={operator}
              onChange={event => setOperator(event.target.value)}
            >
              <option value="OR">OR</option>
              <option value="AND">AND</option>
              <option value="NOT">NOT</option>
            </select>
            ) : null}
            <input
              type="text"
              id="searchTerm"
              value={term}
              onChange={e => setTerm(e.target.value)}
            />
          </div>
          <button
            className="button"
            type="submit"
            disabled={term.length === 0}
          >
            Add
          </button>
        </div>
      </form>
      <hr className="separator"/>
    </>
  )
};

export default SearchQuery;