import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import FilterBar from './components/FilterBar'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // console.log(response.data)
        setProducts(response.data)
      } catch (err) {
        setError('Failed to fetch products. Please try again later.')
      }
    }
    fetchProducts()
  }, [])

const [filterCategory, setFilterCategory] = useState("All")

const handleCategoryChange = (category) => {
  setFilterCategory(category)
}

const [searchTerm, setSearchTerm] = useState("")

const displayedProducts = products.filter((product) => {
    const matchesCategory = filterCategory === "All" || product.category === filterCategory;
    const matchesSearch = product?.name?.toLowerCase().includes(searchTerm?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
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
        <ProductList products={displayedProducts} />
        {displayedProducts.length === 0 && <p>No products found.</p>}
      </main>
    </div>
  )
}

export default App