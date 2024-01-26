import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
