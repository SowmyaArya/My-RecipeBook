import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../User/Images/logo.png';

const pages = [
  { title: 'Home', path: '../' },
  { title: 'About Us', path: '../About' },
  { title: 'Recipes', path: '../CategoryList' },
  // { title: 'Recipe List', path: '../RecipeList' },
  { title: 'Suggestion Box', path: '../SuggestionBox' },
  // { title: 'Footer', path: '../Footer' },
  // { title: 'Signup', path: '../Signup' }
];

const settings = [
  // { title: 'Profile', path: '/profile' },
  { title: 'Register', path: '/Register' },
  // { title: 'Admin Login', path: '/admin/AdminLogin' },
  { title: 'Logout', path: '/logout' }
];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (path) => {
    setAnchorElUser(null);
    if (path === '/logout') {
      logout();
    } else {
      navigate(path);
    }
  };

  const logout = () => {
    localStorage.clear(); // Clear local storage (or specific keys as needed)
    navigate('/'); // Redirect to the root URL
  };

  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(to left, red, orange)',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem', // Increased font size
            }}
          >
            {/* LOGO */}
          </Typography>
          <img src={Logo} alt="Logo" style={{ width: '8%', marginRight: '10px' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontSize: '1.25rem' }}>
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>{page.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.25rem' }}
                onClick={handleCloseNavMenu}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={() => handleCloseUserMenu(setting.path)}>
                  <Typography textAlign="center" sx={{ fontSize: '1.25rem' }}>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
