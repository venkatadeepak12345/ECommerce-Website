import React from 'react'
import "./Header.css";
import { useState,useEffect } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';
const Header = () => {
  const [{basket},dispatch]=useStateValue()
  const [theme,setTheme]=useState("dark")
  useEffect(()=>{
    document.body.classList.remove("light","medium",
      "dark");
      document.body.classList.add(theme)
    
  },[theme]);
  return (
    <div className='header'>
      
      <NavLink to="/" style={{textDecoration:"none"}}>
      <div className='header__logo'>
    <StorefrontIcon className='header__logoImage' fontSize='large'/>
    <h2 className='header__logoTitle'>EShop</h2>
   </div>
      </NavLink>
   <div className='header__search'>
    <input type='text' className='header__searchInput'/>
    <SearchIcon className='header__searchLogo'/>
   </div>
   <div className='header__nav'>
  <NavLink to="/login" style={{textDecoration:"none"}}>
   
    <div className='nav__item'>
      <span className='nav__itemLineOne'>Hello Guest</span>
      <span className='nav__itemLineTwo'>Sign In</span>
    </div>
  </NavLink>
    <div className='nav__item'>
       <span className='nav__itemLineOne'>Your</span>
      <span className='nav__itemLineTwo'>Shop</span>
    </div>
    <NavLink to="/checkout" style={{textDecoration:"none"}}>
    <div className='nav__item'>
      <ShoppingBasketIcon/>
      <span className='nav__itemLineTwo nav__BasketCount'>{basket.length}</span>
    </div>
    </NavLink>
      </div>
      <div className='theme-selector'>
      <button onClick={()=>setTheme("light")} className={`light ${theme==="light"? 'activeTheme':""}`}>Light</button>
       <button onClick={()=>setTheme("medium")} className={`medium ${theme==="medium"? 'activeTheme':""}`}>Medium</button>
        <button onClick={()=>setTheme("dark")} className={`dark ${theme==="dark"? 'activeTheme':""}`}>Dark</button>
      </div>
    </div>
  )
}
export default Header
