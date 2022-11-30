import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({ post }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Post of the Day
        </Typography>
        <Typography variant='h5' component='div'>
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          by User: {post.userId}
        </Typography>
        <Typography variant='body2'>{post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => navigate('/posts')}>
          Back to all Posts
        </Button>
      </CardActions>
    </Card>
  );
}
