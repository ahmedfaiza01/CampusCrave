import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/Aboutpage/AboutPage'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart';
const App = () => {
  return (
    
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/Cart' element={<Cart />}/>
      </Routes>
    
  )
}

export default App
