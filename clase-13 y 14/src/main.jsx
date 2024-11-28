import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Agregar from './Agregar.jsx'
import TraerCollection from './TraerCollection.jsx';
import Query from './Query.jsx'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACgQ9BI2ObAcEoYMhjcemVeDneJnVOGqw",
  authDomain: "coder-76270.firebaseapp.com",
  projectId: "coder-76270",
  storageBucket: "coder-76270.firebasestorage.app",
  messagingSenderId: "977223169500",
  appId: "1:977223169500:web:89bb6e521f331ab8e98b19"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Agregar/> */}
    {/* <TraerCollection/> */}
    <Query/>
  </>,
)
