import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <div className="searchBar">
      <input
        className="search"
        type="search"
        placeholder="searchHero"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
