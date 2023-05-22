import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';

      //<Route path="/cart" element={<Cart />} />
      //<Route path="/item" element={<Item />} />
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);
