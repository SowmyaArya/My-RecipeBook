
import React, { useState } from 'react';
import { Paper, Typography, Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import login from '../Images/login.jpg';
// import register from '../Images/register.jpg'
// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
// import { styled } from '@mui/system';
export default function Addrecipe() {
  const API_HOST = "http://localhost:5000";
  const API_ENDPOINT = "/api/recipe/Recipeadd";

  const [data, setData] = useState({
    recipe_name: '',
    recipe_description: '',
    recipe_Ingredients: '',
    recipe_method: '',
  });
//
  const [image, setimage] = useState('')//
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleFileChange = (e) => {             //
    console.log(e.target.files)
    setimage( {[e.target.name]:e.target.files[0]});                     //
  };
console.log(image.recipe_image)
  //
  const handleSubmit = () => {
    console.log(data)
    console.log(image)
    const info= new FormData()
    info.append("recipe_name",data.recipe_name)
    info.append("recipe_description",data.recipe_description)
    info.append("recipe_Ingredients",data.recipe_Ingredients)
    info.append("recipe_method",data.recipe_method)
    info.append("recipe_image",image.recipe_image)
 
    //77
    axios.post(`${API_HOST}${API_ENDPOINT}`, info) 
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("There was an error submitting the form!", err);
      });
  };

//   const blue = {
//     100: '#DAECFF',
//     200: '#b6daff',
//     400: '#3399FF',
//     500: '#007FFF',
//     600: '#0072E5',
//     900: '#003A75',
//   };

//   const grey = {
//     50: '#F3F6F9',
//     100: '#E5EAF2',
//     200: '#DAE2ED',
//     300: '#C7D0DD',
//     400: '#B0B8C4',
//     500: '#9DA8B7',
//     600: '#6B7A90',
//     700: '#434D5B',
//     800: '#303740',
//     900: '#1C2025',
//   };
//   const Textarea = styled(BaseTextareaAutosize)(
//     ({ theme }) => `
//     box-sizing: border-box;
//     width: 1000px;
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//     &:hover {
//       border-color: ${blue[400]};
//     }

//     &:focus {
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `,
//   );


  return (
    <Box sx={{ border: '1px solid', display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <img src={login} alt="Login" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid>
          <Paper>
            <Box sx={{ width: '500px', p: 3 }}>
              <Typography sx={{ color: 'blue', m: 4 }} variant="h3" component="h1" align='center'>
                Recipe Form
              </Typography>
              <TextField
                id="recipename"
                onChange={handleChange}
                label="Enter Your Recipe Name"
                name="recipe_name"
                variant="outlined"
                size="large"
                fullWidth
                margin="normal"
              />
              <TextField
                id="description"
                onChange={handleChange}
                label="Enter Your Recipe Description"
                name="recipe_description"
                type="email"
                variant="outlined"
                size="large"
                fullWidth
                margin="normal"
              />
              <TextField
                id="ingredients"
                onChange={handleChange}
                label="Enter Your Recipe Ingredients"
                name="recipe_Ingredients"
                type="tel"
                variant="outlined"
                size="large"
                fullWidth
                margin="normal"
              />
              <TextField
                id="recipemethod"
                onChange={handleChange}
                label="Enter Your Recipe Method"
                name="recipe_method"
                variant="outlined"
                size="large"
                fullWidth
                margin="normal"
              />
               <TextField
                id="recipemethod"
                onChange={handleFileChange}
                // label="Enter Your Recipe Method"
                name="recipe_image"
                variant="outlined"
                size="large"
                fullWidth
                margin="normal"
                type="file"
              />
              <Button
                variant="outlined"
                onClick={handleSubmit}
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
              {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
