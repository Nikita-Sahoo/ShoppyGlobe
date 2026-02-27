import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotalAmount } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    );
  }

  
};

export default Cart;