import { useState } from 'react';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

function ProductPage({products}) {

  const [filterCategory,  setFilterCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  
  const displayedProducts = products.filter((p) => {
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="container mt-4">
      <FilterBar 
        searchTerm={searchTerm}
        onSearchChange={(value) => setSearchTerm(value)}
        onCategoryChange={(category) => setFilterCategory(category)}
      />
      <hr />
      <ProductList products={displayedProducts} />
    </div>
  );
}

export default ProductPage;