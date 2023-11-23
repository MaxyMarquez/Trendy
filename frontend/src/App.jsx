import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">HOME</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
