import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Experience from './Components/Experience'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Projects/>
      <Experience />
    </div>
  )
}

export default App
