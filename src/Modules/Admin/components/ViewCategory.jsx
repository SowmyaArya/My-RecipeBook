import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, TextField, Snackbar, Alert, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { padding, width } from '@mui/system';

export default function ViewCategory() {
    const host = config.host;

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        axios.get(`${host}/api/category/GetCategory`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleOpen = (category) => {
        setSelectedCategory(category);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCategory(null);
    };

    const handleUpdate = () => {
        const { _id, category_name, category_description } = selectedCategory;
        axios.put(`${host}/api/category/UpdateCategory/${_id}`, { category_name, category_description })
            .then((res) => {
                setData((prevData) => prevData.map(cat => cat._id === _id ? selectedCategory : cat));
                handleClose();
                setSnackbarMessage('Category updated successfully');
                setSnackbarOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            axios.delete(`${host}/api/category/DeleteCategory/${id}`)
                .then((res) => {
                    setData((prevData) => prevData.filter(cat => cat._id !== id));
                    setSnackbarMessage('Category deleted successfully');
                    setSnackbarOpen(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div style={{ overflowX: 'auto' ,padding: '20px' }}>
           
            <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                style={{ marginBottom: '20px', fontWeight: 'bold' , marginTop:'50px', color:'red' }}
            >
                View Categories
            </Typography>
            <Typography 
                variant="body1" 
                component="p" 
                style={{ marginBottom: '30px', color: '#555' , marginTop:'50px' }}
            >
                Here you can view and manage all the categories. You can edit or delete categories as needed. Use the actions provided to make changes.
            </Typography>
            <TableContainer 
                component={Paper} 
                // style={{ 
                //     marginTop: '20px', 
                //     padding: '16px', 
                // }}
            >
                <Table style={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={headerCellStyle1}><b>Category Name</b></TableCell>
                            <TableCell style={headerCellStyle}><b>Category Description</b></TableCell>
                            <TableCell style={headerCellStyle}><b>Category Image</b></TableCell>
                            <TableCell style={headerCellStyle}><b>Action</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell style={{  textAlign: 'justify' }}>{item.category_name}</TableCell>
                                <TableCell style={{  textAlign: 'justify' }}>{item.category_description}</TableCell>
                                <TableCell>
                                    <td style={{ border: '1px solid #ddd' }}>
                                        <img src={`http://localhost:5000/api/image/${item.category_image}`} style={{ width: '150px', height: '200px' }} alt={item.category_name} />
                                    </td>
                                </TableCell>
                                <TableCell style={{textAlign: 'justify' }}>
                                    <Button onClick={() => handleOpen(item)}><EditIcon /></Button>
                                    <Button onClick={() => handleDelete(item._id)}><DeleteOutlineIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...modalStyle, backgroundColor: 'white', width: 500 }}>
                    <Typography variant="h6" id="modal-modal-title" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                        Update Category
                    </Typography>
                    <TextField
                        label="Category Name"
                        name="category_name"
                        value={selectedCategory?.category_name || ''}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Category Description"
                        name="category_description"
                        value={selectedCategory?.category_description || ''}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleUpdate} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Update
                    </Button>
                </Box>
            </Modal>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '20px',
};

const headerCellStyle = {
    fontWeight: 'bold',         // Bold text
    textAlign: 'justify',       // Align text to justify
    whiteSpace: 'nowrap',       // Prevent wrapping
    padding: '20px', 
    backgroundColor:'orangered',
    color:'white',       // Adjust padding as needed
};

const headerCellStyle1 = {
    fontWeight: 'bold',         // Bold text
    textAlign: 'justify',       // Align text to justify
    whiteSpace: 'nowrap',       // Prevent wrapping
    padding: '20px',            // Adjust padding as needed
    backgroundColor:'orangered' ,
    color:'white'
};

