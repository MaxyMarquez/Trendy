import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  const path = window.location.pathname;

  if (path === '/home') {
    return <Home />;
  }

  return (
    <>
      <nav>
        <Link to="/home">HOME</Link>
      </nav>
    </>
  );
}

export default App;
