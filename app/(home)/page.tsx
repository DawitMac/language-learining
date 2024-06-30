import React from 'react'
import Hero from '../components/Hero'
import Teachers from '../components/Teachers'
import Description from '../components/Description'
import Princing from '../components/Princing'
import Review from '../components/Review'
import Question from '../components/Question'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Teachers />
    <Description />
    <Princing />
    <Review />
    <Question />
    <Contact />
    <Footer />
    </>
  )
}

export default Page