import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, selectLoading, selectError, setSearchQuery } from '../redux/productSlice';
import useFetchProducts from '../hooks/useFetchProducts';
import './ProductList.css';

const ProductList = () => {
  const [searchInput, setSearchInput] = useState('');
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  // Fetch products using custom hook
  useFetchProducts();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearchQuery(value));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Products</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      {products.length === 0 ? (
        <div className="no-products">
          <h3>No products found</h3>
        </div>
      ) : (
        <div className="products-grid">
          <h1>All Products</h1>
        </div>
      )} 
    </div>
  );
};

export default ProductList;