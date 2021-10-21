import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className='search-input'
        type='text'
        placeholder='Search for a City'
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </form>
  );
};

export default SearchBar;
