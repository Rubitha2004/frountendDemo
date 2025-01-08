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
      .catch((err)=> {
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
  };

  return (
    <div className="container">
      <style>
        {`

        body {
            background-image: url('./src/assets/light.webp');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }

          .container {
            margin-top: 50px;
            background-image: url('./src/assets/image.jpg');
            background-size: cover;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .heading {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2em;
            color: white;
            font-weight: bold;
          }

          .table {
            width: 100%;
            border-collapse: collapse;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .table th, .table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }

          .table th {
            background-color: rgb(170, 127, 51);
              color: white;
            font-weight: bold;
          }

          .table td {
            background-color: rgb(246, 187, 159);
          }

          .button {
            padding: 10px 15px;
            margin: 5px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            color: white;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .button-update {
            background-color: #4CAF50;
          }

          .button-update:hover {
            background-color: #45a049;
          }

          .button-delete {
            background-color: #f44336;
          }

          .button-delete:hover {
            background-color: #e53935;
          }

          .button-create, .button-update-link {
            background-color: #008CBA;
          }

          .button-create:hover, .button-update-link:hover {
            background-color: #007bb5;
          }

          .flex-div {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
      <h1 className="heading">User Details</h1>
      <table className="table">
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
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button className="button button-update">
                    <Link to={`/update/${user._id}`} style={{ color: 'white', textDecoration: 'none' }}>Update</Link>
                  </button>
                  <button className="button button-delete" onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="flex-div">
        <button className="button button-create">
          <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>Create User</Link>
        </button>
        <button className="button button-update-link">
          <Link to="/update" style={{ color: 'white', textDecoration: 'none' }}>Update</Link>
        </button>
      </div>
    </div>
  );
}

export default User;