import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { useNavigate } from 'react-router-dom';

import { getAllPosts, deletePost } from '../service/api';

export default function DenseTable() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await getAllPosts();
    setPosts(response.data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    getPosts();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align='right'>Body</TableCell>
            <TableCell align='right'>User Id&nbsp;(i)</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <p onClick={() => navigate(`/posts/${row.id}`)}>{row.title}</p>
              </TableCell>
              <TableCell align='right'>{row.body}</TableCell>
              <TableCell align='center'>{row.userId}</TableCell>
              <TableCell align='right'>
                <EditOutlinedIcon onClick={() => navigate(`/edit/${row.id}`)} />
              </TableCell>
              <TableCell align='right' onClick={() => handleDelete(row.id)}>
                <DeleteOutlinedIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
