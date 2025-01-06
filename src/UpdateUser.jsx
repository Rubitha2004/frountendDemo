import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './CreateUser.css';
const UpdateUser = () => {
  const {id} =useParams();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const update = (e) => {
    e.preventDefault();
    axios.put(`https://backenddemo-q48u.onrender.com/api/user/update/${id}`,{name,email,address})
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  } 


  return (
    <>
     <div className="container">
          <h2>Update User</h2>
         
          <form onSubmit={update}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br />
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Address</label>
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br />
            <button type="submit">Update</button>
          </form>
          <button>
            <Link to="/" className="link-button">User</Link>
          </button><br/>
          <button>
          <Link to="/create"  className="link-button">Create</Link>
          </button>
        </div>
    </>
  )
}

export default UpdateUser;