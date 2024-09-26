import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import RecommendIcon from '@mui/icons-material/Recommend';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../User/Images/logo.png';

const drawerWidth = 140;

export default function ClippedDrawer() {
  const [openItems, setOpenItems] = useState({});
  const navigate = useNavigate();

  const handleClick = (title) => {
    setOpenItems(prevOpenItems => ({
      ...prevOpenItems,
      [title]: !prevOpenItems[title]
    }));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('AdminToken');
      window.location.replace('/admin/AdminLogin'); // This will force a full page reload
    }
  };
  

  const sideBarList = [
    { title: 'Dashboard', path: 'dashboard', icon: <DashboardCustomizeIcon /> },
    {
      title: 'Manage Category', path: 'addcategory', icon: <CategoryIcon />,
      children: [
        { title: 'Add Category', path: 'addcategory' },
        { title: 'View Category', path: 'viewcategory' },
      ]
    },
    {
      title: 'Manage Recipe', path: 'addrecipe', icon: <MenuBookIcon />,
      children: [
        { title: 'Add Recipe', path: 'addrecipe' },
        { title: 'View Recipe', path: 'viewrecipe' },
      ]
    },
    { title: 'Manage User', path: 'manageuser', icon: <PeopleIcon /> },
    { title: 'Manage Suggestion', path: 'managesuggestion', icon: <RecommendIcon /> },
  ];

  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(to right, red, orange)' }}>
          <Toolbar>
            <img src={Logo} alt="Logo" style={{ width: '5%', marginRight: '1rem' }} />
            
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              HELLO ADMIN
            </Typography>
            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
           
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', backgroundColor: 'white' }}>
            <List style={{marginTop:'30px'}}>
              {sideBarList.map((item) => (
                <React.Fragment key={item.title}>
                  <ListItem disablePadding >
                    <ListItemButton
                      component={Link}
                      to={`/admin/${item.path}`}
                      onClick={item.children ? () => handleClick(item.title) : null}
                    >
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography noWrap>{item.title}</Typography>}
                      />
                      {item.children ? (openItems[item.title] ? <ExpandLess /> : <ExpandMore />) : null}
                    </ListItemButton>
                  </ListItem>
                  {item.children && (
                    <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((subItem) => (
                          <ListItem key={subItem.title} disablePadding>
                            <ListItemButton
                              component={Link}
                              to={`/admin/${subItem.path}`}
                              sx={{ pl: 4 }}
                            >
                              <ListItemText primary={<Typography noWrap>{subItem.title}</Typography>} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
