import {Row, Col} from 'react-bootstrap'
import ProductItem from "./ProductItem"

function ProductList({products}) {
    return (
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
            {products.map((product) => (
                <Col>
                    <ProductItem product={product} />
                </Col>
            ))}
        </Row>
        // <div className="product-list">
        //     {products.map((product) => (
        //         <ProductItem 
        //             key={product.id}
        //             product={product}
        //         />
        //     ))}
        // </div>
    )
}

export default ProductList