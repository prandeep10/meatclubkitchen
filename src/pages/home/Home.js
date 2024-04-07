import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import FeaturedSection from '../../components/featuredsection/FeaturedSection'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <FeaturedSection/>
    <Testimonials/>
    <Carousel/>
    <Footer/>
    </>
  )
}

export default Home