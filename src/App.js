import React from 'react';
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
 
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<News />}></Route>
        <Route path='/Business' element={<Business />}></Route>
        <Route path='/Entertainment' element={<Entertainment />}></Route>
        <Route path='/Health' element={<Health />}></Route>
        <Route path='/Sports' element={<Sports />}></Route>
        <Route path='/Science' element={<Science />}></Route>
        <Route path='/Technology' element={<Technology />}></Route>
      </Routes>



    </>
  );
}

export default App;
