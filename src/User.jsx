import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './User.css'; // Import the CSS file for styling

function User(){
   
const[users,setUsers]=useState([]);

useEffect(()=>{
    axios.get("https://backenddemo-q48u.onrender.com/api/user/fetch")
    .then(res=>{
        console.log(res.data);
        setUsers(res.data);
    })
    .catch(err=>{
        console.error(err);
    });
}, []);
const deleteUser = (id) => {
    axios.delete(`https://backenddemo-q48u.onrender.com/api/user/delete/${id}`
)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.error(err);
    });

}

return(
    <div className="user-container">
        <h1> User Component</h1>
        
        <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((users) => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td><button className="update-button"><Link to={`/update/${users._id}`}>Update</Link></button></td>
                            <td><button className="delete-button" onClick={() => deleteUser(users._id)}>Delete</button></td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="button-group">
            <button className="create-button"><Link to="/create">Create User</Link></button><br/>
            <button className="update-all-button"><Link to="/update">Update</Link></button>
        </div>
    </div>
);
}

export default User;
