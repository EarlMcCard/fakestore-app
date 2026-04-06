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

  return (
    <div className='app-container'>
      <header>
        <h1>My React FakeAPI Store</h1>
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  )
}

export default App