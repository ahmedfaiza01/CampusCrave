import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import OurHomeMenu from '../../components/OurHomeMenu/OurHomeMenu'
import Footer from '../../components/Footer/Footer'
import AboutHome from '../../components/AboutHome/Abouthome'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>

      <SpecialOffer/>
      <AboutHome/>
      <OurHomeMenu/>
      <Footer />
    </>
  )
}

export default Home
