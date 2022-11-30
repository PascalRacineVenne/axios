import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAllPosts, updatePost } from '../service/api';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EditPost = () => {
  const navigate = useNavigate();
  const postId = useParams();

  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  useEffect(() => {
    getPostData(postId.id);
  }, [formData]);

  const getPostData = async (id) => {
    const response = await getAllPosts(id);
    const data = response.data;
    setFormData((prevData) => {
      return {
        ...prevData,
        title: data.title,
        body: data.body,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(formData);
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
        Edit Post
      </Button>
    </form>
  );
};

export default EditPost;
