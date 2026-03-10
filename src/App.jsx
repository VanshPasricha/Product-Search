import React, { useState } from 'react';
import ProductList from './components/ProductList';

// ── Product Data ──────────────────────────────────────────────
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, image: "/laptop.png" },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000, image: "/headphones.png" },
    { id: 3, name: "T-shirt", category: "Clothing", price: 800, image: "/tshirt.png" },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500, image: "/shoes.png" },
    { id: 5, name: "Coffee Mug", category: "Home", price: 300, image: "/coffee_mug.png" },
];

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home'];

// ── App Component ─────────────────────────────────────────────
function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

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
                <div className="header-logo-wrapper">
                    <img src="/logo.png" alt="LUNA Store" className="header-logo" />
                </div>
                <h1>Product Search &amp;<br />Category Filter</h1>
                <p>Instantly find what you need across our curated collection</p>
            </header>

            {/* ── Controls ── */}
            <div className="controls">
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
