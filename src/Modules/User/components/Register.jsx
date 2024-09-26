import React from 'react';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/login.jpg';
import { useForm } from 'react-hook-form';

export default function Register() {
  const API_HOST = "http://localhost:5000";
  const API_ENDPOINT = "/api/user/Useradd";
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post(`${API_HOST}${API_ENDPOINT}`, data)
      .then((res) => {
        alert("Registration successful! Please login.");
        navigate("/LoginForm");
      })
      .catch((err) => {
        console.error("There was an error submitting the form!", err);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Paper sx={{ width: '400px', padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography sx={{ color: 'red', mb: 3 }} variant="h3" component="h1" align='center'>
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
  {...register('name', { 
    required: 'Name is required',
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: 'Name should contain only alphabets and spaces'
    }
  })}
  label="Enter Your Name"
  variant="outlined"
  fullWidth
  margin="normal"
  error={!!errors.name}
  helperText={errors.name?.message}
/>

            <TextField
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'Email is invalid'
                }
              })}
              label="Enter Your Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Phone number is invalid'
                }
              })}
              label="Enter Your Phone"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              {...register('address', { required: 'Address is required' })}
              label="Enter Your Address"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
            <TextField
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              label="Enter Your Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              Submit
            </Button>
          </form>
          <Typography align='center' sx={{ mt: 2 }}>
            Already have an account?  
            <Link to="/LoginForm" style={{ textDecoration: 'none', color: 'red', marginLeft: '5px' }}>Login</Link>
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
