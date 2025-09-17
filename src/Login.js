import React, { useState } from 'react';
import "./Login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from './firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {

  switch (error.code) {
    case "auth/invalid-email":
      alert("Please enter a valid email address.");
      break;
    case "auth/user-not-found":
      alert("No account found with this email.");
      break;
    case "auth/wrong-password":
      alert("Incorrect password.");
      break;
    default:
      alert("Login failed. Please try again.");
  }
})
  }


  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      alert("This email is already registered.");
      break;
    case "auth/invalid-email":
      alert("Please enter a valid email.");
      break;
    case "auth/weak-password":
      alert("Password should be at least 6 characters.");
      break;
    default:
      alert("Registration failed. Please try again.");
  }
});

  };

  return (
    <div className='login'>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className='login__logo'>
          <StorefrontIcon className='login__logoImage' fontSize='large' />
          <h2 className='login__logoTitle'>Eshop</h2>
        </div>
      </NavLink>

      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type='submit'
            className='login__signInbutton'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Eshop's Conditions of Use & Sale. Please see our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button
          className='login__registerButton'
          onClick={register}
        >
          Create Your Eshop Account
        </button>
      </div>
    </div>
  );
};

export default Login;
