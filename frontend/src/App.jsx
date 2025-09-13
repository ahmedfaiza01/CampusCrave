import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/Aboutpage/AboutPage";
import Menu from "./pages/Menu/Menu";

import MealPlans from "./pages/MealPlans/MealPlans"; 
import Checkout from "./pages/MealPlans/Checkout"; 
import CartContext from "./pages/CartContext/CartContext";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<CartContext />} />
      <Route path="/mealplans" element={<MealPlans />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
