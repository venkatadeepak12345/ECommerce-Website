import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzUAtnnxhI4PUZAhRc9y3T8rYBwLOoo-o",
  authDomain: "eshop-f5028.firebaseapp.com",
  projectId: "eshop-f5028",
  storageBucket: "eshop-f5028.firebasestorage.app",
  messagingSenderId: "349369980116",
  appId: "1:349369980116:web:4889c04df7a402e6a61741",
  measurementId: "G-VSV8NNDLBN"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);