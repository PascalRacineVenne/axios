import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (id) => {
  id = id || '';
  return await axios.get(`${baseURL}/${id}`);
};

export const addPost = async (post) => {
  try {
    return await axios.post(baseURL, post);
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    return await axios.put(`${baseURL}/${id}`, updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};
