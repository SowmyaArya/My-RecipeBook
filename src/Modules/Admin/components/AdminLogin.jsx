import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../User/Images/logo.png';
import adminBackground from '../../../Images/adminbackground.jpg'; // Make sure this path is correct

const API_HOST = "http://localhost:5000";
const API_ENDPOINT = "/api/admin/login";

const AdminLogin = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [adminToken, setAdminToken] = useState(null);
    const [adminInfo, setAdminInfo] = useState({ email: '', password: '' });

    useEffect(() => {
        const stoOrangeToken = localStorage.getItem('AdminToken');
        if (stoOrangeToken) {
            try {
                setAdminToken(JSON.parse(stoOrangeToken));
            } catch (error) {
                console.error("Invalid JSON in localStorage for 'AdminToken'");
            }
        }
    }, []);

    const handleChange = (e) => {
        setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_HOST}${API_ENDPOINT}`, adminInfo);
            console.log('Response:', res.data);
            alert(res.data.message);
            if (res.data.success) {
                localStorage.setItem("AdminToken", JSON.stringify(res.data.adminToken));
                setAdminToken(res.data.adminToken);
                setIsLoggedIn(true); // Update the login state
                navigate('/admin/dashboard'); // Orangeirect to admin dashboard
            }
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            alert(err.response ? err.response.data.message : err.message);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            // padding:'100px',
            justifyContent: 'center',
            // marginTop:'30px',
            // marginBottom:'30px',
            height: '100vh',
            // width:'210vh',
            alignItems: 'center',
            backgroundImage: `url(${adminBackground})`, // Use url() function to reference the image
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Paper sx={{
                width: '400px',
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make the background semi-transparent
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <img src={logo} alt="E-Recipe Book Logo" style={{ width: '100px', marginBottom: '1rem' }} /> {/* Add your logo here */}
                    <Typography 
                        sx={{ 
                            color: 'Orangered', 
                            mb: 1, 
                            fontWeight: 'bold'    // Make it bold
                        }} 
                        variant="h4" 
                        component="h1"
                    >
                        Admin Login
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                        Welcome back! Please login to your account.
                    </Typography>
                </Box>
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
                        sx={{ backgroundColor: 'white' }}
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
                        sx={{ backgroundColor: 'white' }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, background: 'linear-gradient(to right ,orange,white)', color: 'orangered',fontWeight: 'bold' }}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default AdminLogin;
