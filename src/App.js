import {useState,useRef} from 'react'
import Login from "./pages/login";

import Signup from './pages/signup';

import { BrowserRouter, BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './pages/home';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>

    <div className="App">
      <Signup />
      <Login />
      

    
    </div>

  );
}

export default App;
