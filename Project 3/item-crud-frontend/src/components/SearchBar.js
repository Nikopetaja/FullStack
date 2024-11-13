import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar mb-3">
            <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
            />
            <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
