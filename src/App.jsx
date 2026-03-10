import React, { useState } from 'react';
import ProductList from './components/ProductList';

// ── Product Data ──────────────────────────────────────────────
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
    { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
    { id: 5, name: "Coffee Mug", category: "Home", price: 300 },
];

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home'];

// ── App Component ─────────────────────────────────────────────
function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter products based on search query AND selected category
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === 'All' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="app">
            {/* ── Header ── */}
            <header className="header">
                <div className="header-badge">
                    <span className="dot" />
                    React Product Store
                </div>
                <h1>Product Search &amp;<br />Category Filter</h1>
                <p>Instantly find what you need across our curated collection</p>
            </header>

            {/* ── Controls ── */}
            <div className="controls">
                {/* Search Input (controlled) */}
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        id="search-input"
                        type="text"
                        className="search-input"
                        placeholder="Search products by name…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search products"
                    />
                </div>

                {/* Category Filter Buttons */}
                <div className="filter-section" role="group" aria-label="Filter by category">
                    <span className="filter-label">Category:</span>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            id={`filter-${cat.toLowerCase()}`}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                            aria-pressed={selectedCategory === cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Product List ── */}
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default App;
