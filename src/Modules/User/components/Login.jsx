// import React, { useState } from 'react';
// import { Paper, Typography, Box, TextField, Button } from '@mui/material';
// import axios from 'axios';
// import loginImage from '../Images/login.jpg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/login', { email, password })
//       .then(response => {
//         console.log('Login successful:', response.data);
//         // Handle success, such as redirecting to another page
//       })
//       .catch(error => {
//         console.error('Login error:', error);
//         // Handle error, such as displaying an error message
//       });
//   }

//   return (
//     <Box sx={{ border: '1px solid', display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
//       <Paper sx={{ width: '500px', p: 3 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
//           <img src={loginImage} alt="Login" style={{ width: '100%', height: 'auto' }} />
//         </Box>
//         <Typography sx={{ color: 'blue', m: 4 }} variant="h3" component="h1" align='center'>
//           Login Form
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             id="email"
//             onChange={e => setEmail(e.target.value)}
//             label="Enter Your Email"
//             type="email"
//             variant="outlined"
//             size="large"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             id="password"
//             onChange={e => setPassword(e.target.value)}
//             label="Enter Your Password"
//             type="password"
//             variant="outlined"
//             size="large"
//             fullWidth
//             margin="normal"
//           />
//           <Button
//             type="submit"
//             variant="outlined"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Submit
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// }

// export default Login;



















// import React, { useState, useEffect } from 'react';
// import { Paper, Typography, Box, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, IconButton } from '@mui/material';
// import axios from 'axios';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// export default function AddRecipe() {
//   const API_HOST = "http://localhost:5000";
//   const API_ENDPOINT = "/api/recipe/Recipeadd";
//   const API_CATEGORIES_ENDPOINT = "/api/category/Getcategory";

//   const [data, setData] = useState({
//     recipe_name: '',
//     recipe_description: '',
//     recipe_Ingredients: [{ name: '', quantity: '' }],
//     recipe_method: [{ Method:''}], 
//     category_id: '',
//     preparation_time: '',
//     cook_time: '',
//     total_time: '',
//   });

//   const [image, setImage] = useState('');
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get(`${API_HOST}${API_CATEGORIES_ENDPOINT}`)
//       .then((res) => {
//         setCategories(res.data);
//       })
//       .catch((err) => {
//         console.error("There was an error fetching the categories!", err);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
    
//   //   setData(prevData => ({
//   //     ...prevData,
//   //     [name]: name === 'preparation_time' || name === 'cook_time' || name === 'total_time' ? parseInt(value, 10) : value
//   //   }));
//   // };
  

//   const handleIngredientChange = (index, e) => {
//     const ingredients = [...data.recipe_Ingredients];
//     ingredients[index][e.target.name] = e.target.value;
//     setData({ ...data, recipe_Ingredients: ingredients });
//   };

//   console.log(data,8888)

//   const addIngredient = () => {
//     setData({
//       ...data,
//       recipe_Ingredients: [...data.recipe_Ingredients, { name: '', quantity: '' }]
//     });
//   };

//   const removeIngredient = (index) => {
//     const ingredients = [...data.recipe_Ingredients];
//     ingredients.splice(index, 1);
//     setData({ ...data, recipe_Ingredients: ingredients });
//   };

//   const handleMethodChange = (index, e) => {
//     const methods = [...data.recipe_method];
//     methods[index] = e.target.value;
//     setData({ ...data, recipe_method: methods });
//   };

//   const addMethod = () => {
//     setData({
//       ...data,
//       recipe_method: [...data.recipe_method, '']
//     });
//   };

//   const removeMethod = (index) => {
//     const methods = [...data.recipe_method];
//     methods.splice(index, 1);
//     setData({ ...data, recipe_method: methods });
//   };

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

  

//   const handleSubmit = () => {
//     const info = new FormData();
//     info.append("recipe_name", data.recipe_name);
//     info.append("recipe_description", data.recipe_description);
//     info.append("recipe_Ingredients", JSON.stringify(data.recipe_Ingredients));
//     info.append("recipe_method", JSON.stringify(data.recipe_method));
//     info.append("recipe_image", image);
//     info.append("category_id", data.category_id);
//     info.append("preparation_time", data.preparation_time);
//     info.append("cook_time", data.cook_time);
//     info.append("total_time", data.total_time);
  
//     axios.post(`${API_HOST}${API_ENDPOINT}`, info)
//       .then((res) => {
//         console.log(res.data);
//         alert("Recipe added successfully!"); // Display alert message
//         setData({  // Clear all form fields after successful submission
//           recipe_name: '',
//           recipe_description: '',
//           recipe_Ingredients: [{ name: '', quantity: '' }],
//           recipe_method: [''],
//           category_id: '',
//           preparation_time: '',
//           cook_time: '',
//           total_time: '',
//         });
//         setImage(''); // Clear the image state
//       })
//       .catch((err) => {
//         console.error("There was an error submitting the form!", err);
//       });
//   };
  

 
  
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f5f5f5', padding: 2, marginTop:'50px'}}>
//       <Grid container justifyContent="center">
//         <Grid item xs={12} md={12} lg={12}>
//           <Paper elevation={3}>
//             <Box sx={{ p: 3 }}>
//             <Typography sx={{ color: 'orangered', mb: 4, transform: 'scale(1.2)',fontWeight:'bold'}} variant="h4" component="h1" align='center'>
//               Add Recipe 
//             </Typography>
//             {/* <Grid container justifyContent="center" sx={{ mt: 2 }}>
//               <Typography variant="h6" component="h2" sx={{ transform: 'scale(1.2)' }}>
//                 Focus on your target audience
//               </Typography>
//             </Grid> */}
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={12} md={4}>
//                   <FormControl fullWidth margin="normal">
//                     <InputLabel id="category-label">Select Category</InputLabel>
//                     <Select
//                       labelId="category-label"
//                       id="category"
//                       name="category_id"
//                       value={data.category_id}
//                       onChange={handleChange}
//                       label="Select Category"
//                     >
//                       {categories.map((category) => (
//                         <MenuItem key={category._id} value={category._id}>
//                           {category.category_name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <TextField
//                     id="recipeimage"
//                     onChange={handleFileChange}
//                     name="recipe_image"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     type="file"
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <TextField
//                     id="recipename"
//                     onChange={handleChange}
//                     label="Enter Your Recipe Name"
//                     name="recipe_name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 </Grid>
//               </Grid>
//               <TextField
//                 id="description"
//                 onChange={handleChange}
//                 label="Enter Your Recipe Description"
//                 name="recipe_description"
//                 type="text"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 multiline
//                 rows={4}
//                 sx={{ mt: 2 }}
//               />
//               <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
//                 Ingredients
//               </Typography>
//               {data.recipe_Ingredients.map((ingredient, index) => (
//                 <Grid container spacing={2} key={index} alignItems="center">
//                   <Grid item xs={12} md={4}>
//                     <TextField
//                       id={`ingredient-name-${index}`}
//                       onChange={(e) => handleIngredientChange(index, e)}
//                       label="Ingredient Name"
//                       name="name"
//                       variant="outlined"
//                       fullWidth
//                       margin="normal"
//                       value={ingredient.name}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//                     <TextField
//                       id={`ingredient-quantity-${index}`}
//                       onChange={(e) => handleIngredientChange(index, e)}
//                       label="Quantity"
//                       name="quantity"
//                       variant="outlined"
//                       fullWidth
//                       margin="normal"
//                       value={ingredient.quantity}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//   <IconButton 
//     onClick={() => removeIngredient(index)} 
//     sx={{ color: 'red' }}  // This sets the icon color to red
//   >
//     <RemoveCircleIcon />
//   </IconButton>
// </Grid>

//                 </Grid>
//               ))}
//               <Button
//   variant="outlined"
//   onClick={addIngredient}
//   fullWidth
//   // sx={{ mt: 2, borderColor: 'red', color: 'red', '&:hover': { borderColor: 'darkred', color: 'darkred' } }}
//   startIcon={<AddCircleIcon />}
// >
//   Add Ingredient
// </Button>

//               <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
//                 Recipe Method
//               </Typography>
//               {data.recipe_method.map((method, index) => (
//                 <Grid container spacing={2} key={index} alignItems="center">
//                   <Grid item xs={12} md={8}>
//                     <TextField
//                       id={`recipe-method-${index}`}
//                       onChange={(e) => handleMethodChange(index, e)}
//                       label={`Step ${index + 1}`}
//                       name={`recipe_method_${index}`}
//                       variant="outlined"
//                       fullWidth
//                       margin="normal"
//                       value={method.Method}
                      
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={4}>
//   <IconButton
//     onClick={() => removeMethod(index)}
//     sx={{ color: 'red', '&:hover': { color: 'darkred' } }}
//   >
//     <RemoveCircleIcon />
//   </IconButton>
// </Grid>

//                 </Grid>
//               ))}
//               <Button
//                 variant="outlined"
//                 onClick={addMethod}
//                 fullWidth
//                 // sx={{ 
//                 //   mt: 2, 
//                 //   borderColor: 'red', 
//                 //   color: 'red', 
//                 //   '&:hover': { 
//                 //     borderColor: 'darkred', 
//                 //     color: 'darkred' 
//                 //   } 
//                 // }}
//   startIcon={<AddCircleIcon />}
// >
//   Add Recipe Step
// </Button>

//               <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
//               Cooking Time
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={12} md={4}>
//                 <TextField
//                   id="preparation-time"
//                   onChange={handleChange}
//                   label="Preparation Time"
//                   name="preparation_time"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                    type="text"
//                   value={data.preparation_time}
//                   // type="time"
                 
//                 />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                 <TextField
//                   id="cook-time"
//                   onChange={handleChange}
//                   label="Cook Time"
//                   name="cook_time"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                    type="text"
//                   value={data.cook_time}
//                   // type="time"
                 
//                 />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                 <TextField
//                   id="total-time"
//                   onChange={handleChange}
//                   label="Total Time"
//                   name="total_time"
//                   variant="outlined"
//                   fullWidth
//                    type="text"
//                   margin="normal"
//                   value={data.total_time}
//                   // InputProps={{
//                   //   readOnly: true,  // Prevents user input
//                   // }}
               
//                 />
//                 </Grid>
                
//               </Grid>
//               <div style={{ display: 'flex', justifyContent: 'center' }}>
//   <Button
//     variant="contained"
//     onClick={handleSubmit}
//     style={{ background: 'orangered' }}
//   >
//     Submit
//   </Button>
// </div>


//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


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
    recipe_method: [{ Method:''}], 
    category_id: '',
    preparation_time: '',
    cook_time: '',
    total_time: '',
  });

  const [image, setImage] = useState('');
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
    methods[index] = e.target.value;
    setData({ ...data, recipe_method: methods });
  };

  const addMethod = () => {
    setData({
      ...data,
      recipe_method: [...data.recipe_method,'']
    });
  };

  const removeMethod = (index) => {
    const methods = [...data.recipe_method];
    methods.splice(index, 1);
    setData({ ...data, recipe_method: methods });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    const info = new FormData();
    info.append("recipe_name", data.recipe_name);
    info.append("recipe_description", data.recipe_description);
    info.append("recipe_Ingredients", JSON.stringify(data.recipe_Ingredients));
    info.append("recipe_method", JSON.stringify(data.recipe_method));
    info.append("recipe_image", image);
    info.append("category_id", data.category_id);
    info.append("preparation_time", data.preparation_time);
    info.append("cook_time", data.cook_time);
    info.append("total_time", data.total_time);
  
    axios.post(`${API_HOST}${API_ENDPOINT}`, info)
      .then((res) => {
        console.log(res.data);
        alert("Recipe added successfully!"); // Display alert message
        setData({  // Clear all form fields after successful submission
          recipe_name: '',
          recipe_description: '',
          recipe_Ingredients: [{ name: '', quantity: '' }],
          recipe_method: [{ Method:''}], 
          category_id: '',
          preparation_time: '',
          cook_time: '',
          total_time: '',
        });
        setImage(''); // Clear the image state
      })
      .catch((err) => {
        console.error("There was an error submitting the form!", err);
      });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f5f5f5', padding: 2, marginTop: '50px' }}>
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
                      sx={{ color: 'red' }}  // This sets the icon color to red
                    >
                      <RemoveCircleIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button
                variant="outlined"
                onClick={addIngredient}
                fullWidth
                startIcon={<AddCircleIcon />}
              >
                Add Ingredient
              </Button>
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
                      value={method.Method}
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
              <Button
                variant="outlined"
                onClick={addMethod}
                fullWidth
                startIcon={<AddCircleIcon />}
              >
                Add Recipe Step
              </Button>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="preparation_time"
                    onChange={handleChange}
                    label="Preparation Time (in minutes)"
                    name="preparation_time"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={data.preparation_time}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="cook_time"
                    onChange={handleChange}
                    label="Cook Time (in minutes)"
                    name="cook_time"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={data.cook_time}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="total_time"
                    onChange={handleChange}
                    label="Total Time (in minutes)"
                    name="total_time"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={data.total_time}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                sx={{ mt: 3, p: 2, bgcolor: 'orangered', '&:hover': { bgcolor: 'darkred' } }}
              >
                Submit Recipe
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
