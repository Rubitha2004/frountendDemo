//import Samplebook from './samplebook.jsx';
//import './App.css';
import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {


  return (
    
     
    <Router>
      <div>
      <nav>
        <ol>
          <li><Link to="/">home</Link></li>
          <li><Link to="/About">AboutUs</Link></li>
          <li><Link to="/Contact">ContactUs</Link></li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
      </div>
    </Router>
  
      
  )
}

export default App
