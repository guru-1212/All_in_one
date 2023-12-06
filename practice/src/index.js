import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import MainRender from './components/Main_render_body/MainRender';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

  <div className='router_container'>
  <BrowserRouter>
    <Header/>
      <MainRender/>
    </BrowserRouter>
  </div>
    <Footer/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
