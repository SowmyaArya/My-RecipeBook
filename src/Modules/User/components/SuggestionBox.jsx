import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function SuggestionBox() {
  const API_HOST = "http://localhost:5000";
  const API_ENDPOINT = "/api/suggestion/Suggadd";

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    suggestion: '',
  });

  useEffect(() => {
    if (localStorage.getItem("UserToken") === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_HOST}${API_ENDPOINT}`, data)
      .then((res) => {
        alert('Suggestion submitted successfully!');
        console.log(res.data);
        // Reset form fields
        setData({
          name: '',
          email: '',
          suggestion: '',
        });
      })
      .catch((err) => {
        alert('There was an error submitting the form!');
        console.error("There was an error submitting the form!", err.response || err.message || err);
      });
  };
  

  const handleLoginRedirect = () => {
    navigate("/LoginForm");
  };

  if (!isLoggedIn) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          boxShadow: '0px 3px 5px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          mt: '5%',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Suggestion Box
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please login to submit suggestions.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLoginRedirect}>
          Login
        </Button>
      </Box>
    );
  }

  return (
    <>
   
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0px 3px 5px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        mt: '5%',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Suggestion Box
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        "Your ideas shape our recipes! Share your suggestions and help us improve."
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={data.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        value={data.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Suggestion"
        variant="outlined"
        name="suggestion"
        value={data.suggestion}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        required
        placeholder="e.g., Add more vegan recipes, Feature a recipe of the week, Include nutritional information"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
    <Footer/>
    </>
  );
}
