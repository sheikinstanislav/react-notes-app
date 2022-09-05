import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
