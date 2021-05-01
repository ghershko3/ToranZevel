import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase"

import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiFJKUysGc5NXLP77uk3V8dcb8Z1ueA1I",
  authDomain: "toranzevel-cd73b.firebaseapp.com",
  databaseURL: "https://toranzevel-cd73b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "toranzevel-cd73b",
  storageBucket: "toranzevel-cd73b.appspot.com",
  messagingSenderId: "262748502257",
  appId: "1:262748502257:web:0a61d4af21283ac77bd150",
  measurementId: "G-1K6R6PVSYR"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
