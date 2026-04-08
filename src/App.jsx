import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <Router>
      <div className="app-container">
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>      
    </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App