import React from 'react';
import ReactDOM from 'react-dom/client';
//import {BrowserRouter, Routes, Route} from "react-router-dom";

import './css/index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const App =() =>{
  return (
    // <main>
    //   <h1> OMG!!!</h1>
    //   <body>
    //     <h1>Lunch Menu</h1>

    //     <section>
    //         <p>View all Items</p>
    //         <a href = "/api/lunch_menu">All Items</a>
    //     </section>
    //   </body>
    // </main>

    <main>
      <h1>Lunch Menu</h1>
      <section>
        <p>View all Items</p>
        {/* <a href="/api/lunch_menu">All Items</a> */}
        <a href="/api/lunch_menu">All Items</a>

        {/* <a href="http://localhost:3000/api/lunch_menu">All Items</a> */}
      </section>
    </main>
  );
};

root.render(
    // <App />
    <React.StrictMode>
    <App />
  </React.StrictMode>
);


