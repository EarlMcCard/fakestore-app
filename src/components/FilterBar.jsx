import React from 'react'

function FilterBar({searchTerm, onSearchChange, onCategoryChange}) {
    return (
        <div className="filter-bar-container">
        <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)} 
        />
      </div>

            <div className="filter-buttons">
                <button onClick={() => onCategoryChange("All")}>All</button>
                <button onClick={() => onCategoryChange("electronics")}>Electronics</button>
                <button onClick={() => onCategoryChange("men's clothing")}>Mens Clothing</button>
                <button onClick={() => onCategoryChange("women's clothing")}>Womens Clothing</button>
                <button onClick={() => onCategoryChange("jewelery")}>Jewelery</button>
            </div>
        </div>
    )
}

export default FilterBar