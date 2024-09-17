import 'remixicon/fonts/remixicon.css'
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Product from './components/Product';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
// import Layout from "./components/Admin/Layout";
import NotFound from './components/NotFound'
import Products from './components/Admin/Products';
import Dashboard from './components/Admin/Dashboard';
import Payments from './components/Admin/Payments';
import Setting from './components/Admin/Setting';
import Customer from './components/Admin/Customer';
import Order from './components/Admin/Order';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path='category' element={<Category />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/layout'>
            <Route path='products' element={<Products />} />

            <Route path='order' element={<Order />} />

            <Route path='dashboard' element={<Dashboard />} />
            <Route path='payments' element={<Payments />} />
            <Route path="settings" element={<Setting />} />
            <Route path="customer" element={<Customer />} />

          </Route>
          <Route path='*' element={<NotFound /> } />
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
export default App;