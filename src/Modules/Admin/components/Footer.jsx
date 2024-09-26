

import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#150f1f',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Your Recipe Book. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="/about" color="inherit" sx={{ mx: 2 }}>
            About Us
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 2 }}>
            Contact
          </Link>
          <Link href="/privacy" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://facebook.com" color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" color="inherit" sx={{ mx: 1 }}>
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
