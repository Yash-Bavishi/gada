import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import ItemScreen from './screens/ItemScreen';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import CartScreen from './screens/CartScreen';
import { Provider } from 'react-redux';
import store from './store.js';
      //<Route path="/cart" element={<Cart />} />
      //<Route path="/item" element={<Item />} />
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
			<Route path="/" element={<HomeScreen />} />
			<Route path="/item/:itemName" element={<ItemScreen />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/cart/" element={<CartScreen />} />
		</Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </Provider>
  </React.StrictMode>
);
