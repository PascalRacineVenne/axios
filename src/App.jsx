import React from 'react';

import ResponsiveAppBar from './components/Navbar';
import './App.css';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './components/Home';
import AllPosts from './components/AllPosts';
import Post from './components/Post';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<AllPosts />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
