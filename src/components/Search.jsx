import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div>
      <input
        ref={searchInput}
        className="rounded-xl border bg-slate-800 px-3 py-1 outline-none"
        placeholder="Search..."
        value={search}
        type="text"
        onChange={handleSearch}
        autoFocus
      />
    </div>
  );
};

export default Search
