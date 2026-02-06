import { useState } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import Projects from './Projects'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Projects/>
    </div>
  )
}

export default App
