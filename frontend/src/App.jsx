import { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002/api'
import './App.css'
import Home from './components/Home/Home'
import { Route, Router } from 'react-router'

function App() {

  return (
    <>
      <a href="https://trendy-4f2i.vercel.app/home">HOME</a>

      <Router>
        <Route path='/home' element={<Home />} />
      </Router>
    </>
  )
}

export default App
