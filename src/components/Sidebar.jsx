import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

function Sidebar() {

return(
    <div className="sidebar p-3 border-end h-100 bg-light">
        <h5>Edit Products</h5>
        <ListGroup variant="flush" />
            <ListGroup.Item action as={Link} to='/products'>
            All Products
            </ListGroup.Item>
            <ListGroup.Item action  as={Link} to='/add-product' className="text-primary fw-bold">
             + Add New Product
            </ListGroup.Item>
    </div>
)
}

export default Sidebar