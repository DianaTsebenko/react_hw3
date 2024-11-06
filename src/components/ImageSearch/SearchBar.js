import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Searchbar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    onSubmit(query);
    e.target.reset();
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <FaSearch className="icon" />
          <span className="button-label">Search</span>
        </button>
        <input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
