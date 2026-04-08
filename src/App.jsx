import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/ProductPage"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching data", err)
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <Router>
      <div className="app-container">
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products ({products.length})</Link>      
    </nav>

    {loading ? (
      <div className="text-center mt-5">Loading FakeStore...</div>
    ) : (
        <Routes>
          <Route path="/" element={<Homepage products={products}/>} />
          <Route path="/products" element={<ProductPage products={products}/>} />
        </Routes>

    )}


      </div>
    </Router>
  )
}

export default App