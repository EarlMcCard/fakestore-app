import React from 'react'
import { Card, Badge, Button } from "react-bootstrap"

function ProductItem({product}) {
    return (
        <Card className="h-100 shadow-sm custom-card">
            <div className="p-2 position-absolute">
                <Badge bg="secondary" className="text-capitalize">
                    {product.category}
                </Badge>
            </div>
                <Card.Img 
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{height: '200px', objectFit: 'contain', padding: '20px'}}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title className='fs-6 fw-bold text-truncate' title={product.title}>
                        {product.title}
                    </Card.Title>
                    <Card.Text className='text-success fw-bold fs-5 mb-1'>
                        ${product.price.toFixed(2)}
                    </Card.Text>
                    <Card.Text className='text-muted small flex-grow-1'>
                        {product.description.substring(0,60)}...
                    </Card.Text>
                    <Button variant='primary' className='w-100 mt-2'>View Details</Button>
                </Card.Body>
        </Card>
    )
}

export default ProductItem