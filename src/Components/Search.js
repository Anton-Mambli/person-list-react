import React from "react";

const Search = ({ onSearch, persons }) => {
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Введите имя..." />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
