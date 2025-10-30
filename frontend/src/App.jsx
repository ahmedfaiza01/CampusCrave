import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactPage/ContactPage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import MealPlans from "./pages/MealPlans/MealPlans"; 

import SignUp from "./components/SignUp/SignUp";
import Aboutpage from "./pages/Aboutpage/Aboutpage";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mealplans" element={<MealPlans />} />
  
       <Route path="/login" element={<Home />} />
       <Route path="/SignUp" element={<SignUp />} />
      
    </Routes>
  );
};

export default App;
