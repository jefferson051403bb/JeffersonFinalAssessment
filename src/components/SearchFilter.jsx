import React, { useState } from 'react';

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
