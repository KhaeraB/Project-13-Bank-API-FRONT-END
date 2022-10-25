import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import Error from './views/Error';
import Profil from './views/Profil';
import Login from './views/Login'; 
import Transactions from './views/Transactions';
import Header from './components/Header'; 
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Header/>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profil' element={<Profil/>} />
      <Route path='/transactions' element={<Transactions/>} />
      <Route path='/*' element={<Error/>} />
  </Routes> 
  <Footer/>
</Router>
);


