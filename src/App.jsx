import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/Aboutpage/AboutPage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import MealPlans from "./pages/MealPlans/MealPlans"; 
import Checkout from "./pages/MealPlans/Checkout"; 



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mealplans" element={<MealPlans />} />
      <Route path="/checkout" element={<Checkout />} />
       <Route path="/login" element={<Home />} />
      
    </Routes>
  );
};

export default App;
