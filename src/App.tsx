import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Dragons } from './Dragons';
import { Welcome } from './Welcome';
import { Humans } from './Humans';
import { Survey } from './Survey';
import { Gallery } from './Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/humans" element={<Humans />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
