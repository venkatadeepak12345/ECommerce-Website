import React from 'react';
import './Home.css';
// Image imports
import banimg from './assets/image.png';
import cargoimg from "./assets/cargo.jpg"
import menstshirt from "./assets/MensTshirt.jpg"
import polotshirts from "./assets/Tommy.jpg";
import Lymoshirts from "./assets/lymioshirts.jpg"
import shirts from "./assets/shirts.jpg"
import sammsung from './assets/Samsung.jpg';
import redmi from './assets/Redmi 15.jpg';
import vivo from "./assets/Vivo.jpg"
import oneplus from "./assets/oneplus.jpg";
import sams from "./assets/oppo.jpg"
import samsungtv from "./assets/sAMSUNGTV.jpg"
import sonytv from "./assets/SONTTV.jpg"
import panasonic from "./assets/PANASONIC.jpg"
import philps from "./assets/Phlips.jpg"
import lg from "./assets/LG.jpg"
import bracelet from "./assets/Bracelet.jpg"
import earrings from "./assets/earrings-cat.webp"
import fingerrings from "./assets/rings-cat.jpg"
import goldring from "./assets/goldring.webp"
import dia from "./assets/necklace.webp"
import Product from './Product';
const Home = () => {
  // Product array with 20 products
  const products = [
    { title: "Boys Shirts", price: 400, rating: 4, image: Lymoshirts },
    { title: "Cargo Jeans", price: 300, rating: 3, image: cargoimg },
    { title: "MensTShirts", price: 900, rating: 3, image: menstshirt },
    { title: "TommyTShirts", price: 1900, rating: 4, image: polotshirts },
    { title: "Shirts", price: 1900, rating: 4, image: shirts },
    { title: "Samsung Phone", price: 12000, rating: 5, image: sammsung },
    { title: "Redmi Phone", price: 14000, rating: 5, image: redmi },
    { title: "Vivo Phone", price: 14000, rating: 5, image: vivo },
    { title: "OnePlus Phone", price: 24000, rating: 4, image: oneplus },
    { title: "Oppo Phone", price: 34000, rating: 4, image: sams },
    {title: "Bracelet",  price:8000, rating: 5, image:bracelet},
    {title: "EarRings",  price:80000, rating: 5, image:earrings},
    {title: "FingerRings",  price:100000, rating: 5, image:fingerrings},
    {title: "GoldRings",  price:40000, rating: 5, image:goldring},
    {title: "Necklace",  price:80000, rating: 5, image:dia},
    { title: "Samsung-TV", price: 42000, rating: 5, image: samsungtv },
    { title: "Sony-Tv", price: 70000, rating: 5, image: sonytv },
    { title: "Pansonic Tv", price: 44400, rating: 4, image: panasonic },
    { title: "Philps Tv", price: 42000, rating: 5, image: philps },
    { title: "LG", price: 70000, rating: 5, image: lg },
   ];
  return (
    <div className='home'>
      <div className='home__container'>
        {/* Banner image */}
        <img src={banimg} alt='Banner' className='home__image' />
        {/* 4 rows of 5 products */}
        {[0, 1, 2,3].map((rowIndex) => (
          <div className='home__row' key={rowIndex}>
            {products.slice(rowIndex * 5, rowIndex * 5 + 5).map((item, index) => (
              <Product
                key={index + rowIndex * 5}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;

