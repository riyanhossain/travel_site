import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HotelList from './components/HotelList/HotelList';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/HotelList" element={<HotelList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
