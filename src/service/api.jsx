import axios from 'axios';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (id) => {
  id = id || '';
  return await axios.get(`${baseURL}/${id}`);
};

export const addPost = async (post) => {
  try {
    const response = await axios.post(baseURL, post);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (id, updatedPost) => {
  console.log(updatedPost);
  try {
    console.log('In try');
    const response = await axios.put(`${baseURL}/${id}`, updatedPost);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (id) => {
  return await axios.delete(`${baseURL}/${id}`);
};

// const post = {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// };
// console.log('post was declared');
// addPost(post);
// console.log('function was called');
// getAllPosts();
// console.log('Get all function was called');
