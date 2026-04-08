import { Container, Button, Carousel, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Homepage() {

  const navigate = useNavigate()
  return (
    <Container className="mt-5">
      <header className="text-center mb-5">
        <h1>Welcome to React FakeStore!</h1>
        <Button variant="primary" onClick={() => navigate('/products')}>
          Start Shopping
        </Button>
      </header>
      <Carousel>
        <Carousel.Item>
          <Row>

          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Homepage