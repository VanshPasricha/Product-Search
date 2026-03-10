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
            <span className={`product-category-tag ${categoryClass[product.category] || ''}`}>
                <span>{categoryIcon[product.category] || '📦'}</span>
                {product.category}
            </span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-details">
                <div>
                    <p className="product-price-label">Price</p>
                    <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
