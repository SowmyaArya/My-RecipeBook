// import React from 'react';
// import { Card, Box, Typography } from '@mui/material';
// import { keyframes } from '@emotion/react';

// const data = [
//   {
//     id: 1,
//     RecipeName: 'Homemade Pasta',
//     Description: 'Everything I know about making homemade pasta. Four ingredients! If you have flour, two eggs, a splash of olive oil, and a bit of salt, you can do it right now.',
//     Ingredients: ['Flour', 'Eggs', 'Olive oil', 'Salt'],
//     image: 'https://images.101cookbooks.com/HOMEMADE-PASTA-RECIPE-1.jpg?w=620&auto=format',
//   },
//   {
//     id: 2,
//     RecipeName: 'Mushroom Lasagna',
//     Description: 'This freezer-friendly mushroom lasagna is all about homemade mushroom ragù, big dollops of ricotta cheese, and silky tender sheets of pasta finished with a bit of basil and some grated Parmesan cheese.',
//     Ingredients: ['Mushroom ', 'Pasta', 'Cheese'],
//     image: 'https://images.101cookbooks.com/mushroom-ragu-recipe-v.jpg?w=420&auto=compress&auto=format',
//   },
//   {
//     id: 3,
//     RecipeName: 'Thousand Layer Lasagna',
//     Description: 'A number of you were curious about the picture of this mushroom sandwich when I included it in my newsletter last week. Here are the details along with the recipe down below! It was the centerpiece of a quick, 10-minute lunch. The next time you have mushrooms on hand, I encourage you take this idea for a spin. You end up with a super tasty, satisfying sandwich.',
//     Ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
//     image: 'https://images.101cookbooks.com/mushroom-lasagna-recipe-11.jpg?w=620&auto=format',
//   },
//   {
//     id: 4,
//     RecipeName: 'Roasted Mushroom Sandwich',
//     Description: 'This is the mushroom lasagna I make when no-one is looking. The one where I cut a couple of traditional corners, add a few personal touches and, quite honestly, never look back. Sometimes I go long-form and use homemade pasta for the layers, other times it’s all about keeping the process quick -- store-bought lasagna sheets and ragù from the freezer it is. Both versions are pictured here.',
//     Ingredients: ['chives', 'fresh herbs', 'ricotta cheese'],
//     image: 'https://images.101cookbooks.com/mushroom-sandwich-recipe-h.jpg?w=1200&auto=compress&auto=format',
//   }
// ];

// // Define the shake keyframes animation
// const shake = keyframes`
//   0%, 100% {
//     transform: translateX(0);
//   }
//   10%, 30%, 50%, 70%, 90% {
//     transform: translateX(-10px);
//   }
//   20%, 40%, 60%, 80% {
//     transform: translateX(10px);
//   }
// `;

// const ProfileCard = ({ recipe }) => {
//   return (
//     <Card
//       sx={{
//         width: 200,
//         height: 250,
//         m: 2,
//         position: 'relative',
//         display: 'inline-block',
//         transition: 'transform 0.2s ease-in-out',
//         '&:hover': {
//           animation: `${shake} 10s`, // Apply the shake animation on hover
//         },
//       }}
//     >
//       <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
//         <img src={recipe.image} alt={recipe.RecipeName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             bgcolor: 'rgba(0, 0, 0, 0.6)',
//             color: 'white',
//             p: 1,
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="body2">{recipe.RecipeName}</Typography>
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// const Cards = () => (
//   <div>
//     <h2>Recipes</h2>
//     <Box display="flex" flexWrap="nowrap" overflow="auto">
//       {data.map((recipe) => (
//         <ProfileCard key={recipe.id} recipe={recipe} />
//       ))}
//     </Box>
//   </div>
// );

// export default Cards;

import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Tooltip } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Cards = ({ recipe }) => {
  if (!recipe) {
    return null; // or render a placeholder/loading state
  }

  return (
    <Card sx={{ display: 'flex', maxWidth: 600, m: 2 }}>
      <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={`http://localhost:5000/api/image/${recipe.recipe_image}`}
          alt={recipe.recipe_name}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      </Box>
      <CardContent sx={{ width: '50%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.recipe_name}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <Typography variant="body2" color="text.secondary">
            {recipe.recipe_description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <MenuBookIcon sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Ingredients:
          </Typography>
          {recipe.recipe_Ingredients && recipe.recipe_Ingredients.map((ingredient, index) => (
            <Chip key={index} label={ingredient} sx={{ ml: 1 }} />
          ))}
        </Box>
        <Box mt={2}>
          <Tooltip title="Recipe Details" arrow>
            <Chip
              icon={<FastfoodIcon />}
              label="View Recipe"
              sx={{ mr: 1, mt: 1 }}
              onClick={() => {
                // Handle view recipe action, e.g., navigate to recipe details page
              }}
            />
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
