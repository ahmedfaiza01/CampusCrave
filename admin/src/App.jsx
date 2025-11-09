import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import AddItems from './components/AddItems'
import List from './components/List'
import Order from './components/Order'
import AddStaff from './components/AddStaff'
import StaffList from './components/StaffList'
import AdminSubscriptions from './components/AdminSubscriptions'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AddItems/>} />
        <Route path='list' element={<List/> } />
        <Route path='orders' element={<Order/>} />
        <Route path='add-staff' element={<AddStaff/>} />
        <Route path='staff-list' element={<StaffList/>} />
        <Route path='subscriptions' element={<AdminSubscriptions/>} />
      </Routes>
    </>
  )
}

export default App
