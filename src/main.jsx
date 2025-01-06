import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Name from './name.jsx'
//  import Cat from './nameform.jsx'
//import App from './list.jsx';


import Appli from './Appli.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Name/>
     
    <App/>  
    <Cat/>*/}
    <Appli/>
  </StrictMode>,
)
