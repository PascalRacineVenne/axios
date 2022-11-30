import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Form = () => {
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

export default Form;
