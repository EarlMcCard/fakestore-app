import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch products.");
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const displayedProducts = products.filter((p) => {
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="product-page">
      <header className="text-center my-4">
        <h2>Our Full Catalog</h2>
        <FilterBar 
          searchTerm={searchTerm}
          onSearchChange={(val) => setSearchTerm(val)}
          onCategoryChange={(cat) => setFilterCategory(cat)}
        />
      </header>
      
      <main className="container">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ProductList products={displayedProducts} />
      </main>
    </div>
  );
}

export default ProductPage;