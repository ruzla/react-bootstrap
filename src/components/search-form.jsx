import React from 'react';

const SearchForm = props => (
  <div className="searchForm">
    <input type="text" value={props.searchText} placeholder="Enter Location...." onKeyPress={props.handleKeyDown} onChange={props.handleInputChange} />
    <button onClick={() => props.locationSearch(props.searchText)} type="submit">Search</button>
    <span>{props.searchError}</span>
  </div>
);

export default SearchForm;
