import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './App.js';
import Cadastrar from './pages/cadastrar';
import Listar from './pages/listar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/listar' element={<Listar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


