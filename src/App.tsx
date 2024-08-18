import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import { Dragons } from './Dragons';
import { Welcome } from './Welcome';
import { Humans } from './Humans';
import { Survey } from './Survey';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/humans" element={<Humans />} />
      <Route path="/survey" element={ <Survey /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
