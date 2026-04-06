function ProductItem({product}) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="buy-btn">View Details</button>
            </div>
        </div>
    )
}

export default ProductItem