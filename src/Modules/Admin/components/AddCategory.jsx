import React, { useState } from 'react';
import { Paper, Typography, Box, TextField, Button, Grid, FormHelperText } from '@mui/material';
import axios from 'axios';

export default function AddCategory() {
  const API_HOST = "http://localhost:5000";
  const API_ENDPOINT = "/api/category/AddCategory";

  const [data, setData] = useState({
    category_name: '',
    category_description: '',
  });
  const [imagee, setImage] = useState(null);

  const [errors, setErrors] = useState({
    category_name: '',
    category_description: '',
    category_image: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validate = () => {
    const newErrors = { category_name: '', category_description: '', category_image: '' };

    if (!data.category_name) {
      newErrors.category_name = 'Category name is required.';
    }

    if (!data.category_description) {
      newErrors.category_description = 'Category description is required.';
    }

    if (!imagee) {
      newErrors.category_image = 'Category image is required.';
    } else if (!['image/jpeg', 'image/png'].includes(imagee.type)) {
      newErrors.category_image = 'Only JPEG and PNG images are allowed.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const formData = new FormData();
    formData.append('category_name', data.category_name);
    formData.append('category_description', data.category_description);
    formData.append('category_image', imagee);

    axios.post(`${API_HOST}${API_ENDPOINT}`, formData)
      .then((res) => {
        console.log(res.data); // Log response if needed
        alert("Category added successfully!"); // Show alert message
        setData({ // Clear form fields after successful submission
          category_name: '',
          category_description: '',
        });
        setImage(null); // Clear image selection
        setErrors({ // Clear errors
          category_name: '',
          category_description: '',
          category_image: '',
        });
      })
      .catch((err) => {
        console.error("There was an error submitting the form!", err);
        // Optionally handle error scenarios with alerts or other UI feedback
      });
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }} mt={10}>
      <Grid container justifyContent="center">
        <Grid item lg={12}>
          <Paper elevation={10} sx={{ p: 5 }}>
            <Typography sx={{ color: 'orangered', mb: 4, fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }} variant="h4" component="h1" align='center'>
              Add Category
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="categoryname"
                  onChange={handleChange}
                  value={data.category_name}
                  label="Enter Your Category Name"
                  name="category_name"
                  variant="outlined"
                  size="large"
                  fullWidth
                  error={!!errors.category_name}
                  helperText={errors.category_name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="categoryimage"
                  onChange={handleFileChange}
                  name="category_image"
                  variant="outlined"
                  fullWidth
                  type="file"
                  error={!!errors.category_image}
                  helperText={errors.category_image}
                />
              </Grid>
            </Grid>
            <TextField
              id="cdescription"
              onChange={handleChange}
              value={data.category_description}
              label="Enter Your Category Description"
              name="category_description"
              type="text"
              variant="outlined"
              size="large"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={!!errors.category_description}
              helperText={errors.category_description}
            />
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ backgroundColor: 'orangered', color: 'white', '&:hover': { backgroundColor: '#e64a19' } }}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
