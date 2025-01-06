import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    const submit = (e) => {
        e.preventDefault();
        axios.post("https://backenddemo-q48u.onrender.com/api/user/create", { name, email, address })
            .then(res => {
                console.log(res.data);
     
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div className="container">
            <h2>Create User</h2>
            
            <form onSubmit={submit}>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} /><br />
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} /><br />
                <button type="submit">Create</button>
            </form>
            <button>
                <Link to="/" className="link-button">User</Link>
            </button><br />
            <button>
                <Link to="/update" className="link-button">Update User</Link>
            </button>
        </div>
    );
}

export default CreateUser;