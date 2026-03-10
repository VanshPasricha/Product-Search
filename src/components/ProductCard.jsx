import React from 'react';

const categoryClass = {
    Electronics: 'electronics',
    Clothing: 'clothing',
    Home: 'home',
};

const categoryIcon = {
    Electronics: '⚡',
    Clothing: '👕',
    Home: '🏠',
};

function ProductCard({ product }) {
    return (
        <div className="product-card">
            {/* Product Image */}
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                />
            </div>

            {/* Category Tag */}
            <span className={`product-category-tag ${categoryClass[product.category] || ''}`}>
                <span>{categoryIcon[product.category] || '📦'}</span>
                {product.category}
            </span>

            {/* Name */}
            <h3 className="product-name">{product.name}</h3>

            {/* Price Row */}
            <div className="product-details">
                <div>
                    <p className="product-price-label">Price</p>
                    <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
                <button className="add-to-cart-btn" aria-label={`Add ${product.name} to cart`}>
                    + Add
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
