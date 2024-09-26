import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import axios from 'axios';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import RecommendIcon from '@mui/icons-material/Recommend';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRecipes: 0,
    newRecipesToday: 0,
    totalSuggestions: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = 'http://localhost:5000/api/dashboard';
        const [usersRes, recipesRes, suggestionsRes, newRecipesTodayRes] = await Promise.all([
          axios.get(`${baseURL}/user/count`),
          axios.get(`${baseURL}/recipe/count`),
          axios.get(`${baseURL}/suggestion/count`),
          axios.get(`${baseURL}/recipe/newToday`),
        ]);

        console.log('Users Response:', usersRes.data);
        console.log('Recipes Response:', recipesRes.data);
        console.log('Suggestions Response:', suggestionsRes.data);
        console.log('New Recipes Today Response:', newRecipesTodayRes.data);

        setStats({
          totalUsers: usersRes.data.count || 0,
          totalRecipes: recipesRes.data.count || 0,
          newRecipesToday: newRecipesTodayRes.data.count || 0,
          totalSuggestions: suggestionsRes.data.count || 0,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3} mt={5} justifyContent="center">
      <Grid item xs={12} sm={6} md={3}>
        <Link to="/admin/manageuser" style={{ textDecoration: 'none' }}>
          <StyledCard>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12m_puS8a95Cf1l91o1LjrSM-vygNaS0wPw&s"
                alt="Users"
              />
              <CardContent>
                <GroupAddIcon color="primary" fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Total Users
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontWeight:'bold',fontSize:'20px',color:'blue'}}>
                  {stats.totalUsers}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage user accounts and roles
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Link to="/admin/viewrecipe" style={{ textDecoration: 'none' }}>
          <StyledCard>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="data:image/jpeg;base64,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"
                alt="Recipes"
              />
              <CardContent>
                <RestaurantMenuIcon color="secondary" fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Total Recipes
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontWeight:'bold',fontSize:'20px',color:'purple'}}>
                  {stats.totalRecipes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage all recipes
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <StyledCard>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,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"
              alt="New Recipes"
            />
            <CardContent>
              <RestaurantMenuIcon color="action" fontSize="large" />
              <Typography gutterBottom variant="h5" component="div">
                New Recipes Today
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{fontWeight:'bold',fontSize:'20px',color:'grey'}}>
                {stats.newRecipesToday}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                See today's new recipes
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Link to="/admin/managesuggestion" style={{ textDecoration: 'none' }}>
          <StyledCard>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://associationsnow.com/wp-content/uploads/2016/02/0201_suggestion.jpg"
                alt="Suggestions"
              />
              <CardContent>
                <RecommendIcon color="error" fontSize="large" />
                <Typography gutterBottom variant="h5" component="div">
                  Total Suggestions
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontWeight:'bold',fontSize:'20px',color:'red'}}>
                  {stats.totalSuggestions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage user suggestions
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
