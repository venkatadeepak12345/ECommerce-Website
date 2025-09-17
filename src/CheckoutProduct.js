import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removefrombasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      title: title,  // or an id if you have one to identify products uniquely
    });
  };

  console.log("Product title:", title);

  return (
    <div className="product">
      <img src={image} alt={title} className="product__image" />
      <div className="product__info">
        <p
          className="product__title"
          style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}
        >
          {title}
        </p>
        <p className="product__price">${price}</p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => <span key={i}>⭐</span>)}
        </div>
        <button onClick={removefrombasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
