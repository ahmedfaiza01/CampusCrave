import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import MealPlans from "./pages/MealPlans/MealPlans"; 
 
import SignUp from "./components/SignUp/SignUp";
import Aboutpage from "./pages/Aboutpage/Aboutpage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import VerifyPaymentPage from "./pages/VerifyPaymentPage/VerifyPaymentPage";
import MyOrderPage from "./pages/MyOrderPage/MyOrderPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/mealplans" element={<MealPlans />} />
      
      <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/myorder/verify" element={<VerifyPaymentPage />} />

      {/* ✅ Protected Routes */}
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
      <Route path="/myorder" element={<PrivateRoute><MyOrderPage /></PrivateRoute>} />
    </Routes>
  );
};

export default App;
