import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { getAllPosts, addPost } from '../service/api';
import { v4 as uuidv4 } from 'uuid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: uuidv4(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ title: '', body: '' });
    getAllPosts();
    navigate('/posts');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <Container sx={{ margin: 5 }}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          label='Title'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          aria-describedby='my-helper-text'
        />
        <TextField
          label='Body'
          id='body'
          name='body'
          value={formData.body}
          onChange={handleChange}
        />
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          sx={{ margin: 1, display: 'flex' }}
        >
          Add Post
        </Button>
      </Box>
    </Container>
  );
};

export default AddPost;
