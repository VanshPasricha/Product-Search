import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
    if (products.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3 className="empty-title">No products found</h3>
                <p className="empty-subtitle">
                    Try adjusting your search query or changing the category filter.
                </p>
            </div>
        );
    }

    return (
        <div className="product-section">
            <div className="results-meta">
                <p className="results-count">
                    Showing <strong>{products.length}</strong> product{products.length !== 1 ? 's' : ''}
                </p>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
