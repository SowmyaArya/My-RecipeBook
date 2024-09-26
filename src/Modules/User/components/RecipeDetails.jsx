// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Typography, Container, Card, CardContent, CardMedia, Grid, Box,
//   Stepper, Step, StepLabel, StepContent, IconButton
// } from '@mui/material';
// import { Instagram, WhatsApp, Telegram, FileCopy } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const RecipeDetails = () => {
//   const { recipeId } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/recipe/recipe/${recipeId}`);
//         if (!response.ok) {
//           if (response.status === 404) {
//             throw new Error('Recipe not found.');
//           } else {
//             throw new Error('Network response was not ok');
//           }
//         }
//         const data = await response.json();
//         console.log('Fetched recipe data:', data); // Log fetched data for debugging
//         setRecipe(data);
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//         setError(error.message);
//       }
//     };

//     fetchRecipe();
//   }, [recipeId]);

//   if (error) {
//     return <Typography variant="h6" color="error">{error}</Typography>;
//   }

//   if (!recipe) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   const copyRecipeLink = () => {
//     const recipeLink = window.location.href;
//     navigator.clipboard.writeText(recipeLink).then(() => {
//       console.log('Recipe link copied to clipboard:', recipeLink);
//       alert('Recipe link copied to clipboard!');
//     }).catch(err => {
//       console.error('Failed to copy recipe link:', err);
//       alert('Failed to copy recipe link.');
//     });
//   };

//   return (
//     <Container>
//       <Card sx={{ margin: 'auto', marginTop: 10, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
       
//         <CardMedia
//           component="img"
//           height="400"
//           image={`http://localhost:5000/api/image/${recipe.recipe_image}`}
//           alt={recipe.recipe_name}
//           sx={{ borderRadius: 8 }}
//         />

// <Box sx={{ position: 'relative' }}>
//           <IconButton
//             component={Link}
//             to={`https://www.instagram.com/share?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Instagram"
//             sx={{ position: 'absolute', top: 10, left: 10, color: 'black' }}
//           >
//             <Instagram />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`whatsapp://send?text=Check out this recipe: ${window.location.href}`}
//             target="_blank"
//             aria-label="Share on WhatsApp"
//             sx={{ position: 'absolute', top: 10, left: 50, color: 'black' }}
//           >
//             <WhatsApp />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`https://telegram.me/share/url?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Telegram"
//             sx={{ position: 'absolute', top: 10, left: 90, color: 'black' }}
//           >
//             <Telegram />
//           </IconButton>
//           <IconButton
//             onClick={copyRecipeLink}
//             aria-label="Copy Recipe Link"
//             sx={{ position: 'absolute', top: 10, left: 130, color: 'black' }}
//           >
//             <FileCopy />
//           </IconButton>
//         </Box>
//         <CardContent spacing={4} sx={{ marginTop: 10 }}>
//           <Typography variant="h4" gutterBottom>
//             {recipe.recipe_name}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             {recipe.recipe_description}
//           </Typography>
//           <Typography variant="h5" gutterBottom spacing={4} sx={{ marginTop: 10 }}>
//             Cooking Time
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">
//                 Preparation Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.preparation_time} Min</span>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">Cook Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.cook_time} Min</span></Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">Total Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}> {recipe.total_time} Min</span></Typography>
//             </Grid>
//           </Grid>

//           <Grid container spacing={4} sx={{ marginTop: 10 }}>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Directions
//               </Typography>
//               <Box sx={{ maxWidth: 400 }}>
//                 <Stepper orientation="vertical">
//                   {recipe.recipe_method?.map((step, index) => (
//                     <Step key={index} active>
//                       <StepLabel>
//                         Step {index + 1}
//                       </StepLabel>
//                       <StepContent>
//                         <Typography>{step}</Typography>
//                       </StepContent>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Box>
// //             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Ingredients
//               </Typography>
//               <Box component="ul" sx={{ paddingLeft: '20px', listStyle: 'none' }}>
//                 {recipe.recipe_Ingredients?.map((ingredient, index) => (
//                   <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//                     <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
//                     <Typography variant="body1">{ingredient.quantity} {ingredient.name}</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default RecipeDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Typography, Container, Card, CardContent, CardMedia, Grid, Box,
//   Stepper, Step, StepLabel, StepContent, IconButton, TextField, Button, Rating, Alert
// } from '@mui/material';
// import { Instagram, WhatsApp, Telegram, FileCopy, Favorite } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const RecipeDetails = () => {
//   const { recipeId } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [error, setError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');
//   const [newComment, setNewComment] = useState('');
//   const [rating, setRating] = useState(0);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/recipe/recipe/${recipeId}`);
//         if (!response.ok) {
//           if (response.status === 404) {
//             throw new Error('Recipe not found.');
//           } else {
//             throw new Error('Network response was not ok');
//           }
//         }
//         const data = await response.json();
//         console.log('Fetched recipe data:', data);
//         setRecipe(data);
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//         setError(error.message);
//       }
//     };

//     fetchRecipe();
//   }, [recipeId]);

//   useEffect(() => {
//     // Load the like status from localStorage
//     const savedLikeStatus = localStorage.getItem(`recipe-${recipeId}-liked`);
//     setLiked(savedLikeStatus === 'true');
//   }, [recipeId]);

//   const handleCommentLikeSubmit = async () => {
//     let token = JSON.parse(localStorage.getItem('UserToken'));
//     if (newComment.trim() === '') return;

//     const requestBody = {
//       rating,
//       comment: newComment,
//       like: liked,
//       recipeid: recipeId,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/Commentlike/like', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': token
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (response.ok) {
//         setNewComment('');
//         setRating(0);
//         setAlertMessage('Comment shared successfully!');
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to post comment');
//       }
//     } catch (error) {
//       console.error('Error posting comment:', error);
//       setError(error.message);
//     }
//   };

//   const handleLike = () => {
//     const newLikedStatus = !liked;
//     setLiked(newLikedStatus);
//     // Save the like status to localStorage
//     localStorage.setItem(`recipe-${recipeId}-liked`, newLikedStatus);
//   };

//   const handleRatingChange = (event, newValue) => {
//     setRating(newValue);
//   };

//   if (error) {
//     return <Typography variant="h6" color="error">{error}</Typography>;
//   }

//   if (!recipe) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   const copyRecipeLink = () => {
//     const recipeLink = window.location.href;
//     navigator.clipboard.writeText(recipeLink).then(() => {
//       console.log('Recipe link copied to clipboard:', recipeLink);
//       alert('Recipe link copied to clipboard!');
//     }).catch(err => {
//       console.error('Failed to copy recipe link:', err);
//       alert('Failed to copy recipe link.');
//     });
//   };

//   return (
//     <Container>
//       <Card sx={{ margin: 'auto', marginTop: 10, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         <CardMedia
//           component="img"
//           height="400"
//           image={`http://localhost:5000/api/image/${recipe.recipe_image}`}
//           alt={recipe.recipe_name}
//           sx={{ borderRadius: 8 }}
//         />
//         <Box sx={{ position: 'relative' }}>
//           <IconButton
//             component={Link}
//             to={`https://www.instagram.com/share?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Instagram"
//             sx={{ position: 'absolute', top: 10, left: 10, color: 'black' }}
//           >
//             <Instagram />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`whatsapp://send?text=Check out this recipe: ${window.location.href}`}
//             target="_blank"
//             aria-label="Share on WhatsApp"
//             sx={{ position: 'absolute', top: 10, left: 50, color: 'black' }}
//           >
//             <WhatsApp />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`https://telegram.me/share/url?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Telegram"
//             sx={{ position: 'absolute', top: 10, left: 90, color: 'black' }}
//           >
//             <Telegram />
//           </IconButton>
//           <IconButton
//             onClick={copyRecipeLink}
//             aria-label="Copy Recipe Link"
//             sx={{ position: 'absolute', top: 10, left: 130, color: 'black' }}
//           >
//             <FileCopy />
//           </IconButton>
//         </Box>
//         <CardContent spacing={4} sx={{ marginTop: 10 }}>
//           <Typography variant="h4" gutterBottom>
//             {recipe.recipe_name}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             {recipe.recipe_description}
//           </Typography>
//           <Typography variant="h5" gutterBottom spacing={4} sx={{ marginTop: 10 }}>
//             Cooking Time
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">
//                 Preparation Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.preparation_time} Min</span>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">Cook Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.cook_time} Min</span></Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">Total Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}> {recipe.total_time} Min</span></Typography>
//             </Grid>
//           </Grid>

//           <Grid container spacing={4} sx={{ marginTop: 10 }}>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Directions
//               </Typography>
//               <Box sx={{ maxWidth: 400 }}>
//                 <Stepper orientation="vertical">
//                   {recipe.recipe_method?.map((step, index) => (
//                     <Step key={index} active>
//                       <StepLabel>
//                         Step {index + 1}
//                       </StepLabel>
//                       <StepContent>
//                         <Typography>{step}</Typography>
//                       </StepContent>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Ingredients
//               </Typography>
//               <Box component="ul" sx={{ paddingLeft: '20px', listStyle: 'none' }}>
//                 {recipe.recipe_Ingredients?.map((ingredient, index) => (
//                   <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//                     <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
//                     <Typography variant="body1">{ingredient.quantity} {ingredient.name}</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Grid>
//           </Grid>

//           <Box mt={4}>
//             <Typography variant="h6">Leave a Comment</Typography>
//             <TextField
//               label="Comment"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               fullWidth
//               margin="normal"
//             />
//             <Box mt={2}>
//               <Typography component="legend">Rating</Typography>
//               <Rating
//                 name="rating"
//                 value={rating}
//                 onChange={handleRatingChange}
//               />
//             </Box>
//             <Box mt={2}>
//               <Button
//                 variant="contained"
//                 color={liked ? 'error' : 'primary'}
//                 startIcon={<Favorite />}
//                 onClick={handleLike}
//               >
//                 {liked ? 'Liked' : 'Like'}
//               </Button>
//             </Box>
//             <Box mt={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleCommentLikeSubmit}
//               >
//                 Submit Comment
//               </Button>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Display alert message at the bottom */}
//       {alertMessage && (
//         <Box sx={{ marginTop: 4 }}>
//           <Alert severity="success">{alertMessage}</Alert>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default RecipeDetails;

// -------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import {
//   Typography, Container, Card, CardContent, CardMedia, Grid, Box,
//   IconButton, TextField, Button, Rating, Alert, List, ListItem, ListItemText, Divider,
//   Stepper, Step, StepLabel, StepContent
// } from '@mui/material';
// import { Instagram, WhatsApp, Telegram, FileCopy } from '@mui/icons-material';
// import LikeButton from './LikeButton';  // Adjust the path according to your project structure


// const RecipeDetails = () => {
//   const { recipeId } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [rating, setRating] = useState(0);
//   const [error, setError] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/recipe/recipe/${recipeId}`);
//         if (!response.ok) {
//           throw new Error('Recipe not found.');
//         }
//         const data = await response.json();
//         setRecipe(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchRecipe();
//   }, [recipeId]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/commentlike/recipe/${recipeId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch comments');
//         }
//         const data = await response.json();
//         setComments(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchComments();
//   }, [recipeId]);

//   const handleCommentSubmit = async () => {
//     if (newComment.trim() === '') return;

//     const requestBody = {
//       rating,
//       comment: newComment,
//       recipeid: recipeId,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/commentlike/like', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (response.ok) {
//         setNewComment('');
//         setRating(0);
//         setAlertMessage('Comment submitted successfully!');
//         const commentsResponse = await fetch(`http://localhost:5000/api/commentlike/recipe/${recipeId}`);
//         const commentsData = await commentsResponse.json();
//         setComments(commentsData);
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to submit comment');
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (error) {
//     return <Typography variant="h6" color="error">{error}</Typography>;
//   }

//   if (!recipe) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   const copyRecipeLink = () => {
//     const recipeLink = window.location.href;
//     navigator.clipboard.writeText(recipeLink).then(() => {
//       alert('Recipe link copied to clipboard!');
//     }).catch(err => {
//       alert('Failed to copy recipe link.');
//     });
//   };

//   return (
//     <Container>
//       <Card sx={{ margin: 'auto', marginTop: 10, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         <CardMedia
//           component="img"
//           height="400"
//           image={`http://localhost:5000/api/image/${recipe.recipe_image}`}
//           alt={recipe.recipe_name}
//           sx={{ borderRadius: 8 }}
//         />
//         <Box sx={{ position: 'relative' }}>
//           <IconButton
//             component={Link}
//             to={`https://www.instagram.com/share?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Instagram"
//             sx={{ position: 'absolute', top: 10, left: 10, color: 'black' }}
//           >
//             <Instagram />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`whatsapp://send?text=Check out this recipe: ${window.location.href}`}
//             target="_blank"
//             aria-label="Share on WhatsApp"
//             sx={{ position: 'absolute', top: 10, left: 50, color: 'black' }}
//           >
//             <WhatsApp />
//           </IconButton>
//           <IconButton
//             component={Link}
//             to={`https://telegram.me/share/url?url=${window.location.href}`}
//             target="_blank"
//             aria-label="Share on Telegram"
//             sx={{ position: 'absolute', top: 10, left: 90, color: 'black' }}
//           >
//             <Telegram />
//           </IconButton>
//           <IconButton
//             onClick={copyRecipeLink}
//             aria-label="Copy Recipe Link"
//             sx={{ position: 'absolute', top: 10, left: 130, color: 'black' }}
//           >
//             <FileCopy />
//           </IconButton>
//         </Box>
//         <CardContent spacing={4} sx={{ marginTop: 10 }}>
//           <Typography variant="h4" gutterBottom>
//             {recipe.recipe_name}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             {recipe.recipe_description}
//           </Typography>
//           <Typography variant="h5" gutterBottom>
//             Cooking Time
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">
//                 Preparation Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.preparation_time} Min</span>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">
//                 Cook Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.cook_time} Min</span>
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="body1">
//                 Total Time: <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.total_time} Min</span>
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid container spacing={4} sx={{ marginTop: 10 }}>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Directions
//               </Typography>
//               <Box sx={{ maxWidth: 400 }}>
//                 <Stepper orientation="vertical">
//                   {recipe.recipe_method?.map((step, index) => (
//                     <Step key={index} active>
//                       <StepLabel>
//                         Step {index + 1}
//                       </StepLabel>
//                       <StepContent>
//                         <Typography>{step}</Typography>
//                       </StepContent>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography variant="h5" gutterBottom>
//                 Ingredients
//               </Typography>
//               <List>
//                 {recipe.recipe_ingredients?.map((ingredient, index) => (
//                   <ListItem key={index}>
//                     <ListItemText primary={ingredient} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//           </Grid>
//           <Box sx={{ marginTop: 4 }}>
//             <Typography variant="h6" gutterBottom>
//               Comments
//             </Typography>
//             {alertMessage && <Alert severity="success">{alertMessage}</Alert>}
//             {error && <Alert severity="error">{error}</Alert>}
//             <TextField
//               label="Leave a comment"
//               multiline
//               rows={4}
//               fullWidth
//               variant="outlined"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//             />
//             <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
//               <Rating
//                 name="rating"
//                 value={rating}
//                 onChange={(e, newValue) => setRating(newValue)}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleCommentSubmit}
//                 sx={{ marginLeft: 2 }}
//               >
//                 Submit
//               </Button>
//             </Box>
//             <Box sx={{ marginTop: 4 }}>
//               {comments.length > 0 ? (
//                 <List>
//                   {comments.map((comment) => (
//                     <ListItem key={comment._id}>
//                       <ListItemText
//                         primary={
//                           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <Typography variant="body1" component="span" sx={{ marginRight: 1 }}>
//                               {comment.user}
//                             </Typography>
//                             <Rating
//                               name="read-only"
//                               value={comment.rating}
//                               readOnly
//                             />
//                             <LikeButton
//                               commentId={comment._id}
//                               likeCount={comment.likeCount}
//                               userId={userId}  // Ensure userId is available here
//                             />
//                           </Box>
//                         }
//                         secondary={
//                           <>
//                             <Typography variant="body2" color="textSecondary">
//                               {comment.comment}
//                             </Typography>
//                             <Typography variant="caption" color="textSecondary">
//                               {new Date(comment.timestamp).toLocaleString()}
//                             </Typography>
//                           </>
//                         }
//                       />
//                       <Divider />
//                     </ListItem>
//                   ))}
//                 </List>
//               ) : (
//                 <Typography>No comments yet.</Typography>
//               )}
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default RecipeDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography, Container, Card, CardContent, CardMedia, Box, List, ListItem, ListItemText, Divider, Rating,
  TextField, Button, Alert, Stepper, Step, StepLabel, Grid, styled, IconButton,Dialog
} from '@mui/material';
import { Favorite, ContentCopy } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { Close as CloseIcon } from '@mui/icons-material';
import YouTubeVideo from './YouTubeVideo';
import { width } from '@mui/system';

// Styled components
const HighlightedText = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const CustomStepIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: orange[900],
  color: '#fff',
  fontWeight: 'bold',
}));

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [copyLink, setCopyLink] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch recipe details
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipe/recipe/${recipeId}`);
        if (!response.ok) {
          throw new Error('Recipe not found.');
        }
        const data = await response.json();
        setRecipe(data);
        setCopyLink(window.location.href); // Set the current page URL for sharing
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  useEffect(() => {
    // Fetch comments and ratings
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/commentlike/recipe/${recipeId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchComments();
  }, [recipeId]);

  const handleCommentSubmit = async () => {
    if (newComment.trim() === '') return;

    const requestBody = {
      rating,
      comment: newComment,
      recipeid: recipeId,
    };

    try {
      const response = await fetch('http://localhost:5000/api/commentlike/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setNewComment('');
        setRating(0);
        setAlertMessage('Comment submitted successfully!');
        // Refresh comments
        const commentsResponse = await fetch(`http://localhost:5000/api/commentlike/recipe/${recipeId}`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit comment');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setAlertMessage('Link copied to clipboard!');
    });
  };

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  if (!recipe) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Card sx={{ margin: 'auto', marginTop: 10, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            fontFamily: 'Georgia, serif', 
            fontSize: '2.5rem', 
            background: 'linear-gradient(to left, red, orange)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            marginBottom: '1rem',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          {recipe.recipe_name}
        </Typography>

        <Typography variant="body1" gutterBottom align="center" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
          {recipe.recipe_description}
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image={`http://localhost:5000/api/image/${recipe.recipe_image}`}
          alt={recipe.recipe_name}
          sx={{ borderRadius: 8, marginBottom: 2 }}
        />
        <CardContent>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                Preparation Time: <span style={{ background: 'linear-gradient(to left, red, orange)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.preparation_time} Min</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                Cook Time: <span style={{ background: 'linear-gradient(to left, red, orange)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.cook_time} Min</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                Total Time: <span style={{ background: 'linear-gradient(to left, red, orange)', color: 'white', borderRadius: '5px', padding: '2px 4px' }}>{recipe.total_time} Min</span>
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid container spacing={2}>
  <Grid item xs={12} sm={12}>
    <Typography variant="body1">
      URL: 
      <a 
        href={recipe.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          color: 'orangered', 
          textDecoration: 'underline', 
          marginLeft: '8px' 
        }}
      >
        {recipe.url}
      </a>
    </Typography>
  </Grid> 

 {recipe.url && (
    <Grid item xs={12} sm={12}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Video</Typography>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${recipe.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    </Grid>
  )}
</Grid> */}


      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <Grid container spacing={2}>
  <Grid item xs={12} sm={12}>
    <Typography variant="body1">
      URL: 
      <a 
        href={recipe.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          color: 'orangered', 
          textDecoration: 'underline', 
          marginLeft: '8px' 
        }}
      >
        {recipe.url}
      </a>
    </Typography>
  </Grid> 

 {/* {recipe.url && (
    <Grid item xs={12} sm={12}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Video</Typography>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${recipe.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    </Grid>
  )} */}
</Grid>
      </Dialog>
{/* 
      <div key={recipe._id} className="recipe-container">
          <h2>{recipe.recipe_name}</h2>
          <p>{recipe.recipe_description}</p>
          <YouTubeVideo videoUrl={recipe.url} />
        </div> */}
      
 
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box mt={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Ingredients</Typography>
                <List>
                  {recipe.recipe_Ingredients.map((ingredient, index) => (
                    <ListItem key={index} sx={{ padding: '8px 16px', background: 'linear-gradient(to left, white, orange)', marginBottom: '4px', borderRadius: '4px' }}>
                      <ListItemText primary={<Typography variant="body2" color="textPrimary">{`${ingredient.quantity} ${ingredient.name}`}</Typography>} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Directions</Typography>
                <Stepper
                  activeStep={0}
                  orientation="vertical"
                  sx={{
                    '& .MuiStepConnector-line': {
                      borderColor: orange[900],
                    },
                    '& .MuiStepIcon-root': {
                      color: orange[900],
                    },
                    '& .MuiStepIcon-text': {
                      fill: orange[900],
                    },
                    '& .MuiStepIcon-active': {
                      color: orange[900],
                    },
                    '& .MuiStepIcon-completed': {
                      color: orange[900],
                    },
                    '& .MuiStepLabel-label': {
                      color: 'black',
                    },
                  }}
                >
                  {recipe.recipe_method.map((step, index) => (
                    <Step key={index}>
                      <StepLabel
                        StepIconComponent={() => (
                          <CustomStepIcon>{index + 1}</CustomStepIcon>
                        )}
                      >
                        <Typography variant="body1">
                          {step}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
    <Typography variant="body1">
      URL: 
      <a 
        href={recipe.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          color: 'orangered', 
          textDecoration: 'underline', 
          marginLeft: '8px' 
        }}
      >
        {recipe.url}
      </a>
    </Typography>
  </Grid>
  <div key={recipe._id} className="recipe-container"  >
          {/* <h2>{recipe.recipe_name}</h2>
          <p>{recipe.recipe_description}</p> */}
          <YouTubeVideo videoUrl={recipe.url} />
        </div>
          <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <IconButton style={{color:'orangered'}} onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${copyLink}`, '_blank')}>
              <FaFacebook size={24} />
            </IconButton>
            <IconButton style={{color:'orangered'}} onClick={() => window.open(`https://www.instagram.com/?url=${copyLink}`, '_blank')}>
              <FaInstagram size={24} />
            </IconButton>
            <IconButton style={{color:'orangered'}} onClick={() => window.open(`https://t.me/share/url?url=${copyLink}`, '_blank')}>
              <FaTelegram size={24} />
            </IconButton>
            <IconButton style={{color:'orangered'}} onClick={() => copyToClipboard(copyLink)}>
              <ContentCopy size={24} />
            </IconButton>
          </Box>
          
          <Box mt={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Leave a Comment</Typography>
            <TextField
  label="Comment"
  value={newComment}
  onChange={(e) => setNewComment(e.target.value)}
  fullWidth
  required
  margin="normal"
  multiline
  rows={5} // Set the number of rows
  sx={{
    marginBottom: 2,
    '& .MuiOutlinedInput-root': {
      borderRadius: 4,
      '& fieldset': {
        borderColor: 'orangered', // Border color of the TextField
      },
      '&:hover fieldset': {
        borderColor: 'orangered', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orangered', // Border color when focused
      },
    },
    '& .MuiInputBase-input': {
      color: 'black', // Text color
    },
    '& .MuiFormLabel-root': {
      color: 'orange', // Label color
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'orange', // Label color when focused
    },
  }}
/>


            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              sx={{ marginBottom: 2 }}
            />
          
           
          </Box>
          <Button variant="contained" style={{backgroundColor:'orangered'}} onClick={handleCommentSubmit}>
              Submit
            </Button>
            {alertMessage && <Alert severity="success" sx={{ marginTop: 2 }}>{alertMessage}</Alert>}

          <Box mt={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Comments</Typography>
            {comments.length> 0 ? (
              comments.map((comment, index) => (
                <Box key={index} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{comment.username}</Typography>
                  <Typography variant="body2" sx={{ marginBottom: 1 }}>{comment.comment}</Typography>
                  <Rating name="read-only" value={comment.rating} readOnly />
                </Box>
              ))
            ) : (
              <Typography variant="body2">No comments yet.</Typography>
            )}
          </Box>

         
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetails;
