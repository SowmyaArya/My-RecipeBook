import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Tooltip, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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

const TimeOverlay = styled(Typography)({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '8px 12px',
  fontSize: '1rem',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
});

const CategoryRecipes = () => {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipe/category/${categoryId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('No Recipes Found:', error);
        setError('No Recipes Found.');
      }
    };

    fetchRecipes();
  }, [categoryId]);

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <>
    <Grid container spacing={3}>
      {recipes.map(recipe => (
        <Grid item key={recipe._id}>
          <Link to={`/recipe/${recipe._id}`} style={{ textDecoration: 'none' }}>
            <StyledCard>
              <ImageWrapper>
                <Tooltip title={`Preparation time: ${recipe.preparation_time}, Cook time: ${recipe.cook_time}`} arrow style={{ marginTop: -10 }}>
                  <TimeOverlay variant="body2">
                    <AccessTimeIcon fontSize="small" style={{ marginRight: 4 }} />
                    {recipe.total_time}
                  </TimeOverlay>
                </Tooltip>
                <img
                  src={`http://localhost:5000/api/image/${recipe.recipe_image}`}
                  alt={recipe.recipe_name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <OverlayText variant="body1">
                  {recipe.recipe_name}
                </OverlayText>
              </ImageWrapper>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Additional content can be placed here
                </Typography>
              </CardContent>
            </StyledCard>
          </Link>
        </Grid>
      ))}
      
    </Grid>

{/* <Footer/> */}
</>
  );
};

export default CategoryRecipes;
