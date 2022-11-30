import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../service/api';

import Card from './Card';

const Post = () => {
  const [post, setPost] = useState({});
  const postId = useParams();

  const getPost = async (id) => {
    const response = await getAllPosts(id);
    setPost(response.data);
  };

  useEffect(() => {
    getPost(postId.id);
  }, []);

  return (
    <>
      <Card post={post} />
    </>
  );
};

export default Post;
