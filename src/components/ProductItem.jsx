function ProductItem({product}) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image"/>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="description">{product.description}</p>
                <button className="view-details-btn">View Details</button>
            </div>
        </div>
    )
}

export default ProductItem