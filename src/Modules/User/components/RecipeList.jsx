import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Chip, Tooltip } from '@mui/material';
import { Business, Description, Fastfood } from '@mui/icons-material'; // Import Fastfood icon for recipe
import MenuBookIcon from '@mui/icons-material/MenuBook';

const data = [
  {
    id: 1,
    RecipeName: 'Homemade Pasta',
    Description: 'Everything I know about making homemade pasta. Four ingredients! If you have flour, two eggs, a splash of olive oil, and a bit of salt, you can do it right now.',
    Ingredients: ['Flour', 'Eggs', 'Olive oil', 'Salt'], // Example ingredients
    // Phone: ['8675434565', '9872343423'],
    image: 'https://images.101cookbooks.com/HOMEMADE-PASTA-RECIPE-1.jpg?w=620&auto=format', // Replace with actual image URL
  },
  {
    id: 2,
    RecipeName: 'Mushroom Lasagna',
    Description: 'This freezer-friendly mushroom lasagna is all about homemade mushroom ragù, big dollops of ricotta cheese, and silky tender sheets of pasta finished with a bit of basil and some grated Parmesan cheese.',
    Ingredients: ['Mushroom ', 'Pasta', 'Cheese'], // Example ingredients
    // Phone: ['8675434585', '9872340423'],
    image: 'https://images.101cookbooks.com/mushroom-ragu-recipe-v.jpg?w=420&auto=compress&auto=format', // Replace with actual image URL
  },
  {
    id: 3,
    RecipeName: 'Thousand Layer Lasagna',
    Description: 'A number of you were curious about the picture of this mushroom sandwich when I included it in my newsletter last week. Here are the details along with the recipe down below! It was the centerpiece of a quick, 10-minute lunch. The next time you have mushrooms on hand, I encourage you take this idea for a spin. You end up with a super tasty, satisfying sandwich.',
    Ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'], // Example ingredients
    // Phone: ['8675434585', '9872340423'],
    image: 'https://images.101cookbooks.com/mushroom-lasagna-recipe-11.jpg?w=620&auto=format', // Replace with actual image URL
  },
  {
    id: 4,
    RecipeName: 'Roasted Mushroom Sandwich',
    Description: 'This is the mushroom lasagna I make when no-one is looking. The one where I cut a couple of traditional corners, add a few personal touches and, quite honestly, never look back. Sometimes I go long-form and use homemade pasta for the layers, other times it’s all about keeping the process quick -- store-bought lasagna sheets and ragù from the freezer it is. Both versions are pictured here.',
    Ingredients: ['chives', 'fresh herbs', 'ricotta cheese'], // Example ingredients
    // Phone: ['8675434585', '9872340423'],
    image: 'https://images.101cookbooks.com/mushroom-sandwich-recipe-h.jpg?w=1200&auto=compress&auto=format', // Replace with actual image URL
  }
];

const ProfileCard = ({ employee }) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600, m: 2 }}>
      <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={employee.image} alt={employee.RecipeName} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
      </Box>
      <CardContent sx={{ width: '50%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {employee.RecipeName}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          
          <Typography variant="body2" color="text.secondary">
            {employee.Description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <MenuBookIcon sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Ingredients:
          </Typography>
          {employee.Ingredients.map((ingredient, index) => (
            <Chip key={index} label={ingredient} sx={{ ml: 1 }} />
          ))}
        </Box>
        <Box mt={2}>
          <Tooltip title="Recipe Details" arrow>
            <Chip
              icon={<Fastfood />}
              label="View Recipe"
              sx={{ mr: 1, mt: 1 }}
            />
          </Tooltip>
          
        </Box>
      </CardContent>
    </Card>
  );
};

const TablePage = () => (
  <div>
    {/* <h2>Card</h2> */}
    <Box display="flex" flexWrap="wrap">
      {data.map((employee) => (
        <ProfileCard key={employee.id} employee={employee} />
      ))}
    </Box>
  </div>
);

export default TablePage;
