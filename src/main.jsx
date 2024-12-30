import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Name from './name.jsx'
// import Cat from './nameform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Name/>
    <Cat/> */}
    <App/>
  </StrictMode>,
)
