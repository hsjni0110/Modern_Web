import React from 'react'
import About from '../sections/About'
import Explore from '../sections/Explore'
import Feedback from '../sections/Feedback'
import Footer from '../components/Footer'
import GetStarted from '../sections/GetStarted'
import Hero from '../sections/Hero'
import Insights from '../sections/Insights'
import Navbar from '../components/Navbar'
import WhatsNew from '../sections/WhatsNew'
import World from '../sections/World'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[#1d2f49] overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='z-0 gradient-03' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='z-0 gradient-04' />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='z-0 gradient-04' />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}

export default Home