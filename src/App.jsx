import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from './components/ProductList'
import FilterBar from './components/FilterBar'

function App() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterCategory, setFilterCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch products. Please try again later.")
        setIsLoading(false);
      }
    }
    fetchProducts()
  }, [])

  
  const displayedProducts = products.filter((product) => {
    const matchesCategory = filterCategory === "All" || product.category === filterCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  })
  
  const handleCategoryChange = (category) => {
    setFilterCategory(category)
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value)
  }

  return (
    <div className='app-container'>
      <header>
        <h1>React FakeStore</h1>
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
        />
      </header>
      <main>
        {isLoading && <p>Loading products...</p>}
        {error && <p className='error-message'>{error}</p>}

        {!isLoading && !error && (
          <ProductList products={displayedProducts} />
        )}
      </main>
    </div>
  )
}

export default App