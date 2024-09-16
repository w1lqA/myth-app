import React from 'react'
import Header from './components/Header'



import { Main } from './components/Main'
import { Separation } from './components/Separation'
import { About } from './components/About'
import { Downloads } from './components/Downloads'
import { Game } from './components/Game'
import { Social } from './components/Social'
import { SliderSection } from './components/SliderSection'
import { Gallery } from './components/Gallery'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
function App() {

  return (
    <div className='mx-auto overflow-x-hidden'>
      <Header/>
      <Main/>
      <Separation/>
      <About/>
      <Separation/>
      <Downloads/>
      <Game/>
      <Separation/>
      <Social/>
      <SliderSection/>
      <Gallery/>
      <Separation/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
