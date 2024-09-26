import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import cookingImage from '../Images/recipe-home.jpg'; // Replace with your image path
import Footer from './Footer';
import { Link } from 'react-router-dom';
const CategoryCircle = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 100,
  height: 100,
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  margin: theme.spacing(1),
}));

const CategoryImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const AboutSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

const MissionVisionText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto", sans-serif',
  color: '#333',
}));

export default function About() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/category/Getcategory')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
    
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontFamily: '"Roboto", sans-serif', color: 'orangered' }}>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} >
          <AboutSection>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Roboto", sans-serif', color: 'orangered',alignContent:'justify' }}>
              Welcome to My E-Recipe Book
            </Typography>
            <MissionVisionText variant="body1" paragraph>
              101 Cookbooks is a California food blog by Heidi Swanson focused on healthful, homemade recipes for everyday life. The site features over 700 vegetarian recipes, whole food and vegan recipes plus the occasional sweet treat. You’ll also find a special love for great soup here, as well as deep appreciation for great pasta recipes. Enjoy!
            </MissionVisionText>
          </AboutSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutSection>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Roboto", sans-serif', color: 'orangered' }}>
              Our Mission
            </Typography>
            <MissionVisionText variant="body1" paragraph>
              At Recipe E-Book, our mission is to inspire and simplify cooking through our collection of curated recipes and culinary expertise. We aim to make cooking enjoyable and accessible for everyone.
            </MissionVisionText>
            
          </AboutSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutSection>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Roboto", sans-serif', color: 'orangered'}}>
              Our Vision
            </Typography>
            <MissionVisionText variant="body1">
              We envision a world where everyone can create delicious, nutritious meals with ease. Our vision is to be a trusted resource for culinary inspiration and education, empowering people to embrace a healthier and more enjoyable cooking experience.
            </MissionVisionText>
            
          </AboutSection>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontFamily: '"Roboto", sans-serif', color: 'orangered',padding:'30px' }}>
              Our Recipe category
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
  {/* Display categories as circles */}
  {categories.map(category => (
    <Link 
      to={`/CategoryList`} 
      key={category._id} 
      style={{ textDecoration: 'none' }}
    >
      <CategoryCircle>
        <CategoryImage
          src={`http://localhost:5000/api/image/${category.category_image}`}
          alt={category.category_name}
        />
      </CategoryCircle>
    </Link>
  ))}
</Box>
    </Box>
    <Footer/>
    </>
  );
}
