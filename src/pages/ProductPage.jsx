import { useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import Sidebar from '../components/Sidebar'

function ProductPage({products}) {

  const [filterCategory,  setFilterCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  
  const displayedProducts = products.filter((p) => {
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className='px-0 d-none d-md-block'>
          <Sidebar />
        </Col>

        <Col md={9} lg={10} className='p-4'>
          <header className="mb-4">
            <h2>Inventory</h2>
            <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onCategoryChange={setFilterCategory}
            />
          </header>

          <ProductList products={displayedProducts} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;