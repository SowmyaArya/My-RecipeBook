import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import homeimage from '../../../Images/spices1.webp'; // Updated import path

import Appbar from '../../User/components/Appbar';
import TablePage from './RecipeList';
import Cards from './Cards';
import CategoryList from './CategoryList';
import Footer from './Footer';
import CategoryRecipes from './CategoryRecipes';
import Homecat from './Homecat';
import Viewrecipe from './Viewrecipe';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

const BackgroundBox = styled(Box)({
  backgroundImage: `url(${homeimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  animation: `${fadeIn} 2s ease-in-out`,
});

const StyledTypography = styled(Typography)({
  animation: `${slideIn} 1s ease-in-out`,
  fontFamily: "'Lobster', cursive",
  whiteSpace: 'nowrap', // Ensure text is on one line
});

export default function Home() {
  const recipeDetails = {
    title: 'MY E-RECIPE BOOK',
  };

  return (
    <>
      <BackgroundBox>
        <Container maxWidth="sm">
          <StyledTypography variant="h1" component="h1" gutterBottom style={{marginLeft:'-100px'}}>
            {recipeDetails.title}
          </StyledTypography>
        </Container>
      </BackgroundBox>
      {/* <Homecat /> */}
      <Viewrecipe/>
      <Footer />
    </>
  );
}
