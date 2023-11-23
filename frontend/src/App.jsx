import { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002/api'
import './App.css'
import Home from './components/Home/Home'
import { Route, Router, Routes } from 'react-router'

function App() {

  return (
    <>
      <a href="https://trendy-4f2i.vercel.app/home">HOME</a>

      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
