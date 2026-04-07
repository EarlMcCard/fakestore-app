import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        setProducts(response.data)
      } catch (err) {
        setError('Failed to fetch products. Please try again later.')
      }
    }
    fetchProducts()
  }, [])

const [filterCategory, setFilterCategory] = useState("All")
    
const [searchTerm, setSearchTerm] = useState("")

const displayedProducts = products.filter((product) => {
    const matchesCategory = filterCategory === "All" || product.category === filterCategory;
    const matchesSearch = product?.name?.toLowerCase().includes(searchTerm?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFilterChange = (category) => {
    setFilterCategory(category)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='app-container'>
      <header>
        <h1>React FakeStore</h1>

          <div className="search-bar">
            <input type="text" 
            placeholder='Search for products...'
            value={searchTerm}
            onChange={handleSearchChange}
            />
          </div>

         <div className="filter-buttons">
          <button onClick={() => handleFilterChange("All")}>All</button>
          <button onClick={() => handleFilterChange("electronics")}>Electronics</button>
          <button onClick={() => handleFilterChange("men's clothing")}>Mens Clothing</button>
          <button onClick={() => handleFilterChange("women's clothing")}>Womens Clothing</button>
          <button onClick={() => handleFilterChange("jewelery")}>Jewelery</button>
         </div>
      </header>
      <main>
        <ProductList products={displayedProducts} />
        
      </main>
    </div>
  )
}

export default App