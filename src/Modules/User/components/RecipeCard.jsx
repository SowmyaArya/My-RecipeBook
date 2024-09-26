import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const RecipeCard = ({ title, author, imageUrl, time }) => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', borderRadius: '16px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          borderRadius: '12px',
          padding: '0 8px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
         3.ov
        </Typography>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        okay
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar  sx={{ marginRight: 1 }} />
          <Typography variant="body2" color="textSecondary">
           okay
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
