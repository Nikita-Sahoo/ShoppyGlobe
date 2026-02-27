import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotalAmount, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cartItems.length === 0 && !orderPlaced) {
      navigate('/cart');
    }
  }, [cartItems, navigate, orderPlaced]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };


  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart before checking out.</p>
        <button onClick={() => navigate('/')} className="shop-now-btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                />
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                />
              </div>
            </div>

            <h2>Payment Information</h2>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date *</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  
                  placeholder="MM/YY"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  placeholder="123"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="place-order-btn"
            >
              
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Checkout;