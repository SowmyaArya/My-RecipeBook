import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton, Grid } from '@mui/material';

export default function Viewrecipe() {
    const host = config.host;

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const res = await axios.get(`${host}/api/recipe/Getrecipe`);
            setData(res.data);
        } catch (err) {
            console.error("Error fetching recipes:", err);
        }
    };

    const handleEditClick = (recipe) => {
        setCurrentRecipe(recipe);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentRecipe(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    };

    const handleIngredientChange = (index, field, value) => {
        const updatedIngredients = [...currentRecipe.recipe_Ingredients];
        updatedIngredients[index][field] = value;
        setCurrentRecipe({ ...currentRecipe, recipe_Ingredients: updatedIngredients });
    };

    const handleAddIngredient = () => {
        const updatedIngredients = [...currentRecipe.recipe_Ingredients, { name: '', quantity: '' }];
        setCurrentRecipe({ ...currentRecipe, recipe_Ingredients: updatedIngredients });
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = currentRecipe.recipe_Ingredients.filter((_, i) => i !== index);
        setCurrentRecipe({ ...currentRecipe, recipe_Ingredients: updatedIngredients });
    };

    const handleMethodChange = (index, value) => {
        const updatedMethods = [...currentRecipe.recipe_method];
        updatedMethods[index] = value;
        setCurrentRecipe({ ...currentRecipe, recipe_method: updatedMethods });
    };

    const handleAddMethod = () => {
        const updatedMethods = [...currentRecipe.recipe_method, ''];
        setCurrentRecipe({ ...currentRecipe, recipe_method: updatedMethods });
    };

    const handleRemoveMethod = (index) => {
        const updatedMethods = currentRecipe.recipe_method.filter((_, i) => i !== index);
        setCurrentRecipe({ ...currentRecipe, recipe_method: updatedMethods });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${host}/api/recipe/UpdateRecipe/${currentRecipe._id}`, {
                ...currentRecipe,
                recipe_Ingredients: currentRecipe.recipe_Ingredients,
                recipe_method: currentRecipe.recipe_method
            });
            fetchRecipes();
            handleClose();
        } catch (err) {
            console.error("Error updating recipe:", err);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`${host}/api/recipe/DeleteRecipe/${id}`);
            fetchRecipes(); // Refresh the recipe list after deletion
        } catch (err) {
            console.error("Error deleting recipe:", err);
        }
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <h1 style={{ color: 'orangered' }}>View Recipe</h1> {/* Heading added here */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ background: 'orangered', color: 'white' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Recipe Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Recipe Description</th>
                        <th colSpan={2} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Ingredients</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Method</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Image</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'justify' }}>{item.recipe_name}</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'justify' }}>{item.recipe_description}</td>
                            <td colSpan={2} style={{ padding: '30px', border: '1px solid #ddd', textAlign: 'left', width: '500px' }}>
                                <ul style={{ margin: '10px 0', padding: '0', lineHeight: '1.6' }}>
                                    {item.recipe_Ingredients.map((ingredient, index) => (
                                        <li key={index} style={{ listStyleType: 'disc', marginBottom: '10px', paddingLeft: '20px' }}>
                                            {ingredient.name.trim()}: {ingredient.quantity.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>
                                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                    {item.recipe_method.map((step, index) => (
                                        <li key={index}>{typeof step === 'string' ? step : ''}</li>
                                    ))}
                                </ol>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                                <img src={`http://localhost:5000/api/image/${item.recipe_image}`} style={{ width: '150px', height: '200px' }} alt={item.recipe_name} />
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                                <IconButton onClick={() => handleEditClick(item)}><EditIcon /></IconButton>
                                <IconButton onClick={() => handleDeleteClick(item._id)}><DeleteOutlineIcon /></IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Recipe</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="recipe_name"
                        label="Recipe Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.recipe_name : ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="recipe_description"
                        label="Recipe Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.recipe_description : ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="url"
                        label="Recipe url"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.url : ''}
                        onChange={handleChange}
                        
                    />
                    <TextField
                        margin="dense"
                        name="preparation_time"
                        label="Preparation Time"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.preparation_time : ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="cook_time"
                        label="Cook Time"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.cook_time : ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="total_time"
                        label="Total Time"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={currentRecipe ? currentRecipe.total_time : ''}
                        onChange={handleChange}
                    />

                    <div>
                        <h4>Ingredients</h4>
                        {currentRecipe && currentRecipe.recipe_Ingredients.map((ingredient, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={5}>
                                    <TextField
                                        margin="dense"
                                        label="Ingredient Name"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={ingredient.name}
                                        onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        margin="dense"
                                        label="Quantity"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={ingredient.quantity}
                                        onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={() => handleRemoveIngredient(index)}><DeleteOutlineIcon /></IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button onClick={handleAddIngredient}>Add Ingredient</Button>
                    </div>

                    <div>
                        <h4>Methods</h4>
                        {currentRecipe && currentRecipe.recipe_method.map((step, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={10}>
                                    <TextField
                                        margin="dense"
                                        label={`Step ${index + 1}`}
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={step}
                                        onChange={(e) => handleMethodChange(index, e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={() => handleRemoveMethod(index)}><DeleteOutlineIcon /></IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button onClick={handleAddMethod}>Add Method</Button>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
