import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        color: 'white',
        padding: '40px 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>E-Recipe-Book</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>Swathi</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>9876543210</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>Erecipebook@recipebook.io</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'right' }}>
            <Box>
              <Link href="/" color="inherit" sx={{ mx: 1, '&:hover': { textDecoration: 'underline' } }}>
                Home
              </Link>
              <Link href="/CategoryList" color="inherit" sx={{ mx: 1, '&:hover': { textDecoration: 'underline' } }}>
                Recipe
              </Link>
              <Link color="inherit" sx={{ mx: 1, '&:hover': { textDecoration: 'underline' } }}>
                Privacy Policy
              </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 2 }}>
              <IconButton href="https://twitter.com" color="inherit" sx={{ mx: 1, '&:hover': { color: '#1DA1F2' } }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://youtube.com" color="inherit" sx={{ mx: 1, '&:hover': { color: '#FF0000' } }}>
                <YouTube />
              </IconButton>
              <IconButton href="https://facebook.com" color="inherit" sx={{ mx: 1, '&:hover': { color: '#1877F2' } }}>
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Copyright © recipebook.io, All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
