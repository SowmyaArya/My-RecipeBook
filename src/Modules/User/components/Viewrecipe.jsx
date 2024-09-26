import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const host = "http://localhost:5000";

const RecipeCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 8,
  boxShadow: theme.shadows[2],
  height: '300px',
  maxWidth: '250px',
  margin: 'auto',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const TimeLabel = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 8,
  left: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.9rem',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '8px',
}));

export default function Viewrecipe() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    axios.get(`${host}/api/recipe/Getrecipe`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleCardClick = () => {
    navigate('/categorylist'); // Navigate to CategoryList page
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        RECIPES OF MY BOOK
      </Typography>
      <Typography variant="body1" paragraph>
        Check out our featured recipe for today! This recipe is the most popular and trendy recipe that you’d definitely want to give a try!
      </Typography>
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((recipe) => (
            <RecipeCard key={recipe._id} onClick={handleCardClick}>
              <TimeLabel style={{marginTop:'-5px'}}>
                {recipe.total_time}
              </TimeLabel>
              <StyledCardMedia
                component="img"
                height="200"
                image={`http://localhost:5000/api/image/${recipe.recipe_image}`}
                alt={recipe.recipe_name}
              />
              <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                {recipe.recipe_name}
              </Typography>
            </RecipeCard>
          ))}
        </Slider>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Loading...
        </Typography>
      )}
    </div>
  );
}
