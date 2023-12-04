import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Guru from './components/ForGuru/Guru'
import Suraj from './components/ForSuraj/Suraj'
import Pravin from './components/ForPravin/Pravin'
import Vishal from './components/ForVishal/Vishal'
import Arvind from './components/ForArvind/Arvind'
import HomePage from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/Guru",
    element: <Guru/>,
  },
  {
    path: "/Suraj",
    element: <Suraj/>,
  },
  {
    path: "/Pravin",
    element: <Pravin/>,
  },
  {
    path: "/Arvind",
    element: <Arvind/>,
  },
  {
    path: "/Vishal",
    element: <Vishal/>,
  },
  {
    path: "/Home",
    element: <HomePage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
