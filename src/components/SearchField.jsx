import React from "react";

const SearchField = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default SearchField;
