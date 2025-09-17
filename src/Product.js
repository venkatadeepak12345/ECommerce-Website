import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ image,title,price,rating }) => {
 const [state,dispatch]=useStateValue()
 const addToBasket=()=>{
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
     
      image:image,
      price:price,
      rating:rating

    },
  });
 };
  return (
    <div className='product'>
      <img src={image} alt={title} className='product__image' />
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>${price}</p>
        <div className='product__rating'>
          {'⭐'.repeat(rating)}
        </div>
      </div>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};
export default Product;
