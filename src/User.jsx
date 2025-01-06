
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://backenddemo-q48u.onrender.com/api/user/fetch")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`https://backenddemo-q48u.onrender.com/api/user/delete/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1> User Component</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Address</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((users) => (
              <tr key={users.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{users.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{users.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{users.address}</td>
                <td><button style={{ padding: '10px 15px', margin: '5px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: 'white', backgroundColor: '#4CAF50' }}><Link to={`/update/${users._id}`}>Update</Link></button></td>
                <td><button style={{ padding: '10px 15px', margin: '5px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: 'white', backgroundColor: '#f44336' }} onClick={() => deleteUser(users._id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ padding: '10px 15px', margin: '5px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: 'white', backgroundColor: '#008CBA' }}><Link to="/create">Create User</Link></button><br />
        <button style={{ padding: '10px 15px', margin: '5px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: 'white', backgroundColor: '#008CBA' }}><Link to="/update">Update</Link></button>
      </div>
    </div>
  );
}

export default User;
