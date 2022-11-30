import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllPosts, addPost } from '../service/api';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    body: '',
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
    <form onSubmit={handleSubmit}>
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
      <Button type='submit' variant='contained' color='primary'>
        Add Post
      </Button>
    </form>
  );
};

export default AddPost;
