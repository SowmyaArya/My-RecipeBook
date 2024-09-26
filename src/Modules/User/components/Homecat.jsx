import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

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

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  width: 250, // Set the width of the search container
  zIndex: 1,
}));

const Homecat = () => {
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
    <div style={{ position: 'relative', paddingTop: '10px' }}> {/* Ensure padding at the top */}
      <SearchContainer>
        <TextField
          label="Search by Category Name"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => { /* Add any specific search logic here if needed */ }}
                >
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%' }} // Ensure TextField takes the full width of its container
        />
      </SearchContainer>

      <Grid container spacing={3} style={{ marginTop: '80px' }}> {/* Add margin-top to create space between the search bar and the cards */}
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
                  {/* Additional content can be placed here */}
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Homecat;
