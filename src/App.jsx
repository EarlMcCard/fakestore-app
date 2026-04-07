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
        setProducts(response.data)
      } catch (err) {
        setError('Failed to fetch products. Please try again later.')
      }
    }
    fetchProducts()
  }, [])

  const [filterCategory, setFilterCategory] = useState("All")
  const displayedProducts = filterCategory === "All" ? products : products.filter(product => product.category === filterCategory)
  
  const handleFilterChange = (category) => {
    setFilterCategory(category)
  }


  return (
    <div className='app-container'>
      <header>
        <h1>React FakeStore</h1>
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