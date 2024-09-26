import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ViewSuggestion() {
    const host = config.host;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${host}/api/suggestion/Getsug`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const containerStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '40px auto',
    };

    const headingStyle = {
        textAlign: 'left',
        marginBottom: '20px',
        color: 'orangered',
    };

    const tableWrapperStyle = {
        overflowX: 'auto', // Handle overflow for smaller screens
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: 'orangered',
        color: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
    };

    const tdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap', // Allows multiline text
        maxWidth: '400px', // Set a maximum width for the suggestion cell
        textAlign: 'justify',
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marginRight: '5px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Suggestions</h1>
            <div style={tableWrapperStyle}>
                <table style={tableStyle} border="1">
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Suggestion</th>
                            {/* <th style={thStyle}>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td style={tdStyle}>{item.name}</td>
                                <td style={tdStyle}>{item.email}</td>
                                <td style={tdStyle}>{item.suggestion}</td>
                                {/* <td style={tdStyle}>
                                    <button style={buttonStyle}>
                                        <EditIcon color="primary" />
                                    </button>
                                    <button style={buttonStyle}>
                                        <DeleteOutlineIcon color="error" />
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
