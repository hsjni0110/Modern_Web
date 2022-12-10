import React from 'react'
import About from '../sections/About'
import Explore from '../sections/Explore'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Hero from '../sections/Hero'
import Insights from '../components/Insights'
import Navbar from '../components/Navbar'
import WhatsNew from '../components/WhatsNew'
import World from '../components/World'

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
        <div className='z-0 gradient-04'/>
        <WhatsNew />
      </div>
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Home