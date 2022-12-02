import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAllPosts, updatePost } from '../service/api';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const EditPost = () => {
  const navigate = useNavigate();
  const postId = useParams();

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: '',
  });
  useEffect(() => {
    getPostData(postId.id);
  }, []);

  const getPostData = async (id) => {
    const response = await getAllPosts(id);
    const data = response.data;
    setFormData((prevData) => {
      return {
        ...prevData,
        title: data.title,
        body: data.body,
        userId: data.userId,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(postId.id, formData);
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
          Edit Post
        </Button>
      </Box>
    </Container>
  );
};

export default EditPost;
