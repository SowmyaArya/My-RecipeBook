import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, TextField, InputAdornment, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 250,
  height: 250,
  margin: theme.spacing(2),
  position: 'relative',
  borderRadius: 20,
  display: 'inline-block',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'rotate(2deg)',
  },
}));

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const OverlayText = styled(Typography)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '8px',
  textAlign: 'center',
});

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("UserToken") == null) {
      navigate("/LoginForm");
    }
  }, [navigate]);

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredCategories = categories.filter(category =>
    category.category_name && category.category_name.toLowerCase().includes(filter)
  );

  return (
    <div style={{padding:'5px'}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} style={{padding:'10px'}}>
        <Box>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: 'orangered', 
              fontWeight: 'bold', 
              fontStyle: 'italic',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              padding:'30px'
            }}
          >
            Browse Recipe Categories
          </Typography>
          <Typography 
            variant="body1" 
            gutterBottom 
            sx={{ 
              color: 'orangered', 
              marginTop: '1px',
              fontStyle: 'italic',
              marginLeft:'20px'
            }}
          >
            Discover a variety of delicious recipes curated just for you. 
            Use the search bar to find recipes by category name.
          </Typography>
        </Box>
        <TextField
          label="Search by Category Name"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {filteredCategories.length > 0 ? (
        <Grid container spacing={3}>
          {filteredCategories.map(category => (
            <Grid item key={category._id}>
              <Link to={`/CategoryRecipe/${category._id}`} style={{ textDecoration: 'none' }}>
                <StyledCard>
                  <ImageWrapper>
                    <img
                      src={`http://localhost:5000/api/image/${category.category_image}`}
                      alt={category.category_name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <OverlayText variant="body1">
                      {category.category_name}
                    </OverlayText>
                  </ImageWrapper>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      Discover delicious recipes in the {category.category_name} category!
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="textSecondary" align="center">
          No categories found.
        </Typography>
      )}
      <Footer/>
    </div>
  );
};

export default CategoryList;
