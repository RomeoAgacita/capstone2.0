import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';


import img1 from './images/IMAGEN.png';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='Navbar'>
      <header className="w-full flex  items-center sm:px-8 px-4 py-4 [#e6ebf4]">
      <Link to="/">
        <img src={img1} alt="logo" className="logo"/>
      </Link>

      <Link to="/create-post" id="create" className="font-inter font-medium bg-[#D7D7D7] text-[#000000] px-4 py-2 rounded-md ">Create</Link>
      </header>
    </div>
    <div id='bg'></div>
      <main  className="sm:p-8 px-4 py-8 bg-[#17202A] w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main> 
    <div id='bg2'></div>
    </BrowserRouter>
  )
}

export default App;
