import { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002/api'
import './App.css'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <a href="/home">Home</a>
    </>
  )
}

export default App
