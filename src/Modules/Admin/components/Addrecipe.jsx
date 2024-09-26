import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, IconButton } from '@mui/material';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function AddRecipe() {
  const API_HOST = "http://localhost:5000";
  const API_ENDPOINT = "/api/recipe/Recipeadd";
  const API_CATEGORIES_ENDPOINT = "/api/category/Getcategory";

  const [data, setData] = useState({
    recipe_name: '',
    recipe_description: '',
    recipe_Ingredients: [{ name: '', quantity: '' }],
    recipe_method: [''],
    category_id: '',
    preparation_time: '',
    cook_time: '',
    total_time: '',
    url: '',
  });

  const [image, setImage] = useState(null); // Updated initial state to null
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}${API_CATEGORIES_ENDPOINT}`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("There was an error fetching the categories!", err);
      });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, e) => {
    const ingredients = [...data.recipe_Ingredients];
    ingredients[index][e.target.name] = e.target.value;
    setData({ ...data, recipe_Ingredients: ingredients });
  };

  const addIngredient = () => {
    setData({
      ...data,
      recipe_Ingredients: [...data.recipe_Ingredients, { name: '', quantity: '' }]
    });
  };

  const removeIngredient = (index) => {
    const ingredients = [...data.recipe_Ingredients];
    ingredients.splice(index, 1);
    setData({ ...data, recipe_Ingredients: ingredients });
  };

  const handleMethodChange = (index, e) => {
    const methods = [...data.recipe_method];
    methods[index] = e.target.value; // Fixed update logic
    setData({ ...data, recipe_method: methods });
  };

  const addMethod = () => {
    setData({
      ...data,
      recipe_method: [...data.recipe_method, '']
    });
  };

  const removeMethod = (index) => {
    const methods = [...data.recipe_method];
    methods.splice(index, 1);
    setData({ ...data, recipe_method: methods });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const info = new FormData();
    info.append("recipe_name", data.recipe_name);
    info.append("recipe_description", data.recipe_description);
    info.append("recipe_Ingredients", JSON.stringify(data.recipe_Ingredients));
    info.append("recipe_method", JSON.stringify(data.recipe_method));
    if (image) {
      info.append("recipe_image", image);
    }
    info.append("category_id", data.category_id);
    info.append("preparation_time", data.preparation_time);
    info.append("cook_time", data.cook_time);
    info.append("total_time", data.total_time);
    info.append("url", data.url);
  
    axios.post(`${API_HOST}${API_ENDPOINT}`, info)
      .then((res) => {
        console.log(res.data);
        alert("Recipe added successfully!");
        setData({ 
          recipe_name: '',
          recipe_description: '',
          recipe_Ingredients: [{ name: '', quantity: '' }],
          recipe_method: [''],
          category_id: '',
          preparation_time: '',
          cook_time: '',
          total_time: '',
          url: '',
        });
        setImage(null); // Clear the image state
      })
      .catch((err) => {
        console.error("There was an error submitting the form!", err);
      });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f5f5f5', padding: 2, marginTop:'50px' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={3}>
            <Box sx={{ p: 3 }}>
              <Typography sx={{ color: 'orangered', mb: 4, transform: 'scale(1.2)', fontWeight: 'bold' }} variant="h4" component="h1" align='center'>
                Add Recipe 
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="category-label">Select Category</InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      name="category_id"
                      value={data.category_id}
                      onChange={handleChange}
                      label="Select Category"
                    >
                      {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.category_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="recipeimage"
                    onChange={handleFileChange}
                    name="recipe_image"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="file"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="recipename"
                    onChange={handleChange}
                    label="Enter Your Recipe Name"
                    name="recipe_name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="url"
                    onChange={handleChange}
                    label="Enter Your url  Name"
                    name="url"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <TextField
                id="description"
                onChange={handleChange}
                label="Enter Your Recipe Description"
                name="recipe_description"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                sx={{ mt: 2 }}
              />
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                Ingredients
              </Typography>
              {data.recipe_Ingredients.map((ingredient, index) => (
                <Grid container spacing={2} key={index} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <TextField
                      id={`ingredient-name-${index}`}
                      onChange={(e) => handleIngredientChange(index, e)}
                      label="Ingredient Name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={ingredient.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id={`ingredient-quantity-${index}`}
                      onChange={(e) => handleIngredientChange(index, e)}
                      label="Quantity"
                      name="quantity"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={ingredient.quantity}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <IconButton 
                      onClick={() => removeIngredient(index)} 
                      sx={{ color: 'red' }}
                      
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button
        variant="outlined"
        onClick={addIngredient}
        style={{ backgroundColor: 'orangered', color: 'white' }}
        startIcon={<AddCircleIcon />}
      >
        Add Ingredient
      </Button>
    </div>

              <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
                Recipe Method
              </Typography>
              {data.recipe_method.map((method, index) => (
                <Grid container spacing={2} key={index} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <TextField
                      id={`recipe-method-${index}`}
                      onChange={(e) => handleMethodChange(index, e)}
                      label={`Step ${index + 1}`}
                      name={`recipe_method_${index}`}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={method}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <IconButton
                      onClick={() => removeMethod(index)}
                      sx={{ color: 'red', '&:hover': { color: 'darkred' } }}
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button
        variant="outlined"
        onClick={addMethod}
        style={{ backgroundColor: 'orangered', color: 'white' }}
        startIcon={<AddCircleIcon />}
        sx={{ mt: 2 }}
      >
        Add Method Step
      </Button>
    </div>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                <TextField
                  id="preparation-time"
                  onChange={handleChange}
                  label="Preparation Time"
                  name="preparation_time"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                   type="text"
                  value={data.preparation_time}
                  // type="time"
                 
                />
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                  id="cook-time"
                  onChange={handleChange}
                  label="Cook Time"
                  name="cook_time"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                   type="text"
                  value={data.cook_time}
                  // type="time"
                 
                />
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                  id="total-time"
                  onChange={handleChange}
                  label="Total Time"
                  name="total_time"
                  variant="outlined"
                  fullWidth
                   type="text"
                  margin="normal"
                  value={data.total_time}
                  // InputProps={{
                  //   readOnly: true,  // Prevents user input
                  // }}
               
                />
                </Grid>
                
              </Grid>
              
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
        style={{ backgroundColor: 'orangered' }}
      >
        Submit Recipe
      </Button>
    </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
