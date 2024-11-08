// src/components/TokenForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateTokens, clearTokens } from '../redux/tokenSlice';
import { Button, TextField, Grid, Typography, Box , Stack} from '@mui/material';
import '../styles/TokenForm.css'; // Import the CSS
const TokenForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    blueCount: 0,
    bluePrefix: '',
    bluePerRow: 1,
    redCount: 0,
    redPrefix: '',
    redPerRow: 1,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    dispatch(generateTokens(formValues));
  };

  const handleClear = () => {
    dispatch(clearTokens());
    setFormValues({
      blueCount: 0,
      bluePrefix: '',
      bluePerRow: 1,
      redCount: 0,
      redPrefix: '',
      redPerRow: 1,
    });
  };

  return (
    <div>
      
      <Box className='token-form-container'>
      <Typography variant="h5" mb={2}>Token Generator Form</Typography>
      <Stack spacing={2}>
        <TextField
          name="blueCount"
          label="Number of Blue Tokens"
          value={formValues.blueCount}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="bluePrefix"
          label="Blue Token Prefix"
          value={formValues.bluePrefix}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="bluePerRow"
          label="Blue Tokens Per Row"
          value={formValues.bluePerRow}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="redCount"
          label="Number of Red Tokens"
          value={formValues.redCount}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="redPrefix"
          label="Red Token Prefix"
          value={formValues.redPrefix}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="redPerRow"
          label="Red Tokens Per Row"
          value={formValues.redPerRow}
          onChange={handleChange}
          fullWidth
        />
      </Stack>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Generate
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  
     </div>
  );
};

export default TokenForm;
