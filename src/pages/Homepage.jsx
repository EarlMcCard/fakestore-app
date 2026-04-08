import { Container, Button, Carousel, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Homepage({products}) {

  const groupProducts = (arr, size) => {
    const groups = []
    const featured = arr.slice(0,9)
    for(let i = 0; i < featured.length; i+= size){
      groups.push(featured.slice(i, i+size))
    }
    return groups
  }

  const productGroups = groupProducts(products, 3)
  const navigate = useNavigate()
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1>Featured Collections</h1>
      </div>

      <Carousel variant="dark" indicators={false}>
        {productGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((product) => (
                <Col md={4} key={product.id} className="p-3">
                  <div className="carousel-card text-center shadow-sm p-3 bg-white rounded">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{height: '150px', objectFit: 'contain'}}  
                        className="mb-3"
                      />
                      <h6 className="text-truncate">{product.title}</h6>
                      <p className="text-success fw-bold">{product.price.toFixed(2)}</p>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => navigate('/products')}
                  >View in Shop</Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

    <div className="text-center mt-5">
      <Button size="lg" onClick={() => navigate('/products')}>
        Explore All {products.length} Products
      </Button>
    </div>
    </Container>
  )
}

export default Homepage