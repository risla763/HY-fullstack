import React from 'react';

const SearchCountryForm = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div>
      find countries 
      <input 
        id="searchInput"
        type="text"
        value={searchCountry}
        onChange={handleSearchCountry}
        style={{backgroundColor: 'white',color: 'black', top: 0, left:0}}
        className="search-input"
      />
    </div>
  );
};

export default SearchCountryForm;