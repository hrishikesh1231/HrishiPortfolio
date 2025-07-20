import React from 'react';

import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import WanderLust from './pages/WanderLust';
import Zerodha from './pages/Zerodha';
import Forever from './pages/Forever';
import Weather from './pages/Weather';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Projects/>}></Route>
      <Route path='/wanderlust' element={<WanderLust/>}></Route>
      <Route path='/zerodha' element={<Zerodha/>}></Route>
      <Route path='/forever' element={<Forever/>}></Route>
      <Route path='/weather' element={<Weather/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
);
