import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./pages/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("my_store_products");

    if (savedData) {
      setProducts(JSON.parse(savedData));
      setLoading(false);
    } else {
      const fetchInitialData = async () => {
        try {
          const res = await axios.get("https://fakestoreapi.com/products");
          setProducts(res.data);
          localStorage.setItem("my_store_products", JSON.stringify(res.data));
          setLoading(false);
        } catch (err) {
          console.error(err);
          setLoading(false);
        }
      };
      fetchInitialData();
    }
  }, []);

  const handleAddProduct = (newProduct) => {
    const updatedList = [newProduct, ...products];
    setProducts(updatedList);
    localStorage.setItem("my_store_products", JSON.stringify(updatedList));
  };

  if (loading) return <div className="text-center mt-5">Loading Store...</div>;

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
            <Route path="/" element={<Homepage products={products} />} />
            <Route
              path="/products"
              element={<ProductPage products={products} />}
            />
            <Route
              path="/add-product"
              element={<AddProduct onAdd={handleAddProduct} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
