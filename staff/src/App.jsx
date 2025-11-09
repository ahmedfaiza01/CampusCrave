import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import StaffSubscriptions from "./components/StaffSubscriptions";
import StaffInventory from './components/StaffInventory';
import Items from './components/Items';
import List from './components/List';
import Order from './components/Order';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Items/>} />
        <Route path='list' element={<List/> } />
        <Route path='orders' element={<Order/>} />
         <Route path="subscriptions" element={<StaffSubscriptions />} />
        <Route path="inventory" element={<StaffInventory />} />
      </Routes>
    </>
  )
}

export default App
