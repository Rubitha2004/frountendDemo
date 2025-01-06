import React from 'react'
import User from './User.jsx';
import CreateUser from './CreateUser.jsx';
import UpdateUser from './UpdateUser.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 export const Appli = () => {
  return (
    

    <Router>
<Routes>
  <Route path="/" element={<User/>} />
  <Route path="/create" element={<CreateUser />}/>
  <Route path ="/update/:id" element={<UpdateUser />}/>
 
</Routes>
    </Router>
  )
}
export default Appli;