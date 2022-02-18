import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HotelContext from './components/ContextAPI/HotelContext';
import SAJEK from './components/HotelRoom/Sajek';
import SREEMONGAL from './components/HotelRoom/SREEMONGAL';
import SUNDARBON from './components/HotelRoom/SUNDARBON';

function App() {
  return (
    <div>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="SAJEK" element={<SAJEK/>}/> 
          <Route path="SREEMONGOL" element={<SREEMONGAL/>}/>          
          <Route path="SUNDARBON" element={<SUNDARBON/>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
