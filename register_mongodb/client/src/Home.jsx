import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/getUser')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const userAuth = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    users.map(res => {
      if (res.email === userAuth.email) {
        setUser(res);
      }
    });
  })

  if (userAuth) {
    return (
      <div>
        <h1>Home Component</h1>

        <h2>Your name: {user.name}</h2>
        <h3>Your email: {user.email}</h3>
        <h4>Special ID: {user._id}</h4>

        <button onClick={handleLogout}>
          Log out
        </button>
      </div>
    )
  } else {
    navigate('/login');
  }
}
