import { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002/api'
import './App.css'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
