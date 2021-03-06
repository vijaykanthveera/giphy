import React from "react";

const SearchForm = (props) => {
  return (
    <div className="search-form">
      <input
        type="text"
        data-testid="searchkeyword"
        className="txtbox"
        ref={props.inputRef}
        placeholder="Search"
      ></input>
      <br />
      <button
        data-testid="go"
        type="button"
        onClick={(e) => props.handleSearch(e)}
      >
        Go
      </button>
      <button type="button" onClick={(e) => props.handleClear(e)}>
        Clear
      </button>
    </div>
  );
};

export default React.memo(SearchForm);
