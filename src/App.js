import React, { useState } from 'react';
import News from './components/News';
import './App.css'
import Navbar from './components/Navbar';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Sports from './components/Sports';
import Science from './components/Science';
import Technology from './components/Technology';

import { Routes, Route } from 'react-router-dom'

function App() {

  const [mode,setmode] = useState("dark")

  const toggleMode = () => {
    if(mode == "dark"){
      setmode("light")
      document.body.style.backgroundColor = "black";
    }else{
      setmode("dark")
      document.body.style.backgroundColor = "white"
    }
  }
 
  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<News mode={mode} />}></Route>
        <Route path='/Business' element={<Business mode={mode}  />}></Route>
        <Route path='/Entertainment' element={<Entertainment mode={mode}  />}></Route>
        <Route path='/Health' element={<Health mode={mode}  />}></Route>
        <Route path='/Sports' element={<Sports mode={mode}  />}></Route>
        <Route path='/Science' element={<Science mode={mode}  />}></Route>
        <Route path='/Technology' element={<Technology mode={mode}  />}></Route>
      </Routes>



    </>
  );
}

export default App;
