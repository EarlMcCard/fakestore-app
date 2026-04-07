import React from 'react'

function FilterBar({searchTerm, onSearchChange, onCategoryChange}) {
    return (
        <div className="filter-bar-container">
            <div className="search-bar">
                <input
                type="text"
                placeholder='Search for products...'
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-buttons">
                <button onClick={() => handleFilterChange("All")}>All</button>
                <button onClick={() => handleFilterChange("electronics")}>Electronics</button>
                <button onClick={() => handleFilterChange("men's clothing")}>Mens Clothing</button>
                <button onClick={() => handleFilterChange("women's clothing")}>Womens Clothing</button>
                <button onClick={() => handleFilterChange("jewelery")}>Jewelery</button>
            </div>
        </div>
    )
}

export default FilterBar