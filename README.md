# 🛍️ Product Search & Category Filter

A React application that lets users search products by name and filter them by category — with real-time dynamic updates.

## Features

- 🔍 **Live Search** — filter products by name as you type (case-insensitive)
- 🏷️ **Category Filter** — filter by All, Electronics, Clothing, or Home
- ⚡ **Combined Filters** — search and category work together simultaneously
- 📭 **Empty State** — friendly message when no products match

## Tech Stack

- [React 18](https://react.dev/) — functional components, `useState`
- [Vite 5](https://vitejs.dev/) — fast dev server & build tool
- Vanilla CSS — dark-mode design system with animations

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── App.jsx                  # State management & filter logic
├── index.css                # Global styles & design tokens
├── main.jsx                 # React entry point
└── components/
    ├── ProductCard.jsx      # Single product display
    └── ProductList.jsx      # Product grid + empty state
```

## Product Data

```js
const products = [
  { id: 1, name: "Laptop",      category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones",  category: "Electronics", price: 2000  },
  { id: 3, name: "T-shirt",     category: "Clothing",    price: 800   },
  { id: 4, name: "Shoes",       category: "Clothing",    price: 2500  },
  { id: 5, name: "Coffee Mug",  category: "Home",        price: 300   },
];
```

## React Concepts Used

| Concept | Usage |
|---------|-------|
| `useState` | `searchQuery` and `selectedCategory` state |
| Controlled inputs | Search `<input>` bound to state |
| `Array.filter()` | Derives `filteredProducts` from both filters |
| Props | `products` → `ProductList` → `ProductCard` |
| Functional components | `App`, `ProductList`, `ProductCard` |
