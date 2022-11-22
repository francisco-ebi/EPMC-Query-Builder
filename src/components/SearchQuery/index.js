import { useState } from "react";
import "./SearchQuery.css";

const SearchQuery = (onAdd) => {
  const [term, setTerm] = useState("");
  return (
    <>
      <div className="blue-bar">
        <h2>Add keyword or phrase</h2>
      </div>
      <form className="term-form">
        <label htmlFor="searchTerm">
          Enter a term or phrase
        </label>
        <div className="controls">
          <input
            type="text"
            id="searchTerm"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <button
            className="button"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </>
  )
};

export default SearchQuery;