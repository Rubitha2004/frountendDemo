
import React from 'react';
import './App.css';
import Home from './Home';
import Aboutus from './About';
import Contactus from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 // Ensure you have a logo image in the assets folder

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li className="logo">
                <Link to="/">
                  <img src="images/pic.jpeg"  />Ruby
                </Link>
                
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
        <footer>
          <p>
            <Link to="/">&copy; 2023 Your Bags. All rights reserved.</Link>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
