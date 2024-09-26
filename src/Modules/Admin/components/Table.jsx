import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Typography} from '@mui/material'

export default function Tables() {
    const host = "http://localhost:5000";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${host}/api/user/Getuser`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const thStyle = {
        background: 'orangered',
        color: 'white',
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left'
    };

    const tdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
        background: 'white'
    };

    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'orangered',
        textAlign: 'center',
        marginBottom: '20px'
    };

    return (
        <div style={containerStyle}>
            {/* <h1 style={{ color: 'orangered' }}>View User</h1> Heading added here */}
            <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                style={{ marginBottom: '20px', fontWeight: 'bold' , marginTop:'50px', color:'orangered' }}
            >
                View User
            </Typography>
            {/* <h2 style={headingStyle}>View User</h2> */}
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Address</th>
                        <th style={thStyle}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={tdStyle}>{item.name}</td>
                            <td style={tdStyle}>{item.email}</td>
                            <td style={tdStyle}>{item.address}</td>
                            <td style={tdStyle}>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
