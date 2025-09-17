import React from 'react';
import "./CheckOut.css";
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';


import { productData } from './data/productData';
import { useStateValue } from './StateProvider';

const CheckOut = () => {
  const [{ basket }] = useStateValue(); // If you're using context

  // Decide what to render: basket or full product list
  const itemsToShow = basket && basket.length > 0 ? basket : productData;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* Display products in a responsive grid */}
          <div className="checkout__products">
            {itemsToShow.map((item, index) => (
              <CheckoutProduct
              
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
