import axios from 'axios';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (id) => {
  id = id || '';
  return await axios.get(`${baseURL}/${id}`);
};

export const AddPost = async (post) => {
  return await axios.post(baseURL, post);
};

export const updatePost = async (id, post) => {
  return await axios.put(`${baseURL}/${id}`, post);
};

export const deletePost = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};

AddPost({
  userId: 1000,
  id: 1000,
  title: 'Pedro testitos',
  body: 'Amazing new post',
});
