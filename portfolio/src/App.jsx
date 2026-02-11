import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Projects/>
      <Experience />
      <Footer/>
    </div>
  )
}

export default App
