import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Dragons } from './Dragons';
import { Welcome } from './Welcome';
import { Humans } from './Humans';
import { Survey } from './Survey';
import { Gallery } from './Gallery';
import { HumanAdmin } from './admin/Human';
import { HumansAdmin } from './admin/Humans';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/humans" element={<Humans />} />
        <Route path="/admin/humans/:id" element={<HumanAdmin />} />
        <Route path="/admin/humans" element={<HumansAdmin />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
