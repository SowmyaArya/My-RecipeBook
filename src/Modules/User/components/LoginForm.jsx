import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import loginImage from '../Images/login.jpg';  // Ensure the path is correct

const API_HOST = "http://localhost:5000";
const API_ENDPOINT = "/api/user/Login";

const LoginForm = () => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });

    useEffect(() => {
        const storedToken = localStorage.getItem('UserToken');
        if (storedToken) {
            try {
                setUserToken(JSON.parse(storedToken));
            } catch (error) {
                console.error("Invalid JSON in localStorage for 'UserToken'");
            }
        }
    }, []);

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_HOST}${API_ENDPOINT}`, userInfo);
            alert(res.data.message);
            if (res.data.success) {
                localStorage.setItem("UserToken", JSON.stringify(res.data.userTocken));
                setUserToken(res.data.userTocken);
                navigate('/');
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: `url(${loginImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '1rem'
            }}
        >
            <Paper
                sx={{
                    width: { xs: '90%', sm: '400px' },
                    padding: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Semi-transparent background
                    borderRadius: '8px'
                }}
            >
                <Typography
                    sx={{ color: 'red', mb: 3 }}
                    variant="h3"
                    component="h1"
                    align='center'
                >
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="email"
                        name="email"
                        onChange={handleChange}
                        label="Enter Your Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        name="password"
                        onChange={handleChange}
                        label="Enter Your Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button
    type="submit"
    variant="contained"
    fullWidth
    sx={{
        mt: 2,
        backgroundColor: 'orangered',  // Set background color to orange
        color: 'white',
        '&:hover': {
            backgroundColor: 'orangered',  // Change background color on hover
        }
    }}
>
    Submit
</Button>

                </form>
                <Typography align='center' sx={{ mt: 2 }}>
                    New user?
                    <Link to="/Register" style={{ textDecoration: 'none', color: 'red', marginLeft: '5px' }}>Register</Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default LoginForm;
