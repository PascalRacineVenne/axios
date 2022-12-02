import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#212121' }} position='static'>
      <Toolbar>
        <NavLink
          to='/'
          sx={{
            pl: 20,
            color: '#fff',
            fontSize: 18,
            textDecoration: 'none',
          }}
        >
          React JS Crud
        </NavLink>
        <NavLink
          to='posts'
          sx={{
            pl: 20,
            color: '#fff',
            fontSize: 18,
            textDecoration: 'none',
          }}
        >
          {' '}
          All Posts
        </NavLink>
        <NavLink
          to='add'
          sx={{
            pl: 20,
            color: '#fff',
            fontSize: 18,
            textDecoration: 'none',
          }}
        >
          {' '}
          Add Post
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
