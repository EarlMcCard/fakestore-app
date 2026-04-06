import { useState } from "react"
import ProductList from './components/ProductList'

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "White",
      price: "499.99",
      description: "Made to order",
      image: "https://placehold.co/300x200/333/white?text=White"
    },
        {
      id: 2,
      name: "Red",
      price: "499.99",
      description: "Made to order",
      image: "https://placehold.co/300x200/333/red?text=Red"
    },
        {
      id: 3,
      name: "Green",
      price: "499.99",
      description: "Made to order",
      image: "https://placehold.co/300x200/333/green?text=Green"
    },
        {
      id: 4,
      name: "Yellow",
      price: "499.99",
      description: "Made to order",
      image: "https://placehold.co/300x200/333/yellow?text=Yellow"
    },
        {
      id: 5,
      name: "Gray",
      price: "499.99",
      description: "Made to order",
      image: "https://placehold.co/300x200/333/gray?text=Gray"
    },
  ])

  return (
      <div className="app-container">
        <header>
          <h1>React FakeStore App</h1>
        </header>
        <main>
          <ProductList products={products}/>
        </main>
      </div>
  )
}

export default App
