import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About, Cart, Checkout, Contact, Home, Login, OrderDetails, Orders, Products, Profile } from "./pages";


type PrivateRouteProps = {
  children: React.ReactNode;  
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="profile" >
            <Route index element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
            <Route path="orders/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
