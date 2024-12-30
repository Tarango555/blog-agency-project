import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import ResponsiveDrawer from './ResponsiveDrawer';
import MenuItems from './MenuItems';
import { useAdminLoginModalStore } from './../../stores/adminLoginModalStore';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const menuItems = ["Home", "Blogs", "Services", "About", "Contact"];

const AppNavbar = () => {

  const openModal = useAdminLoginModalStore((state) => state.openModal);

  const handleDashboardClick = () => {
    openModal();
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (state) => {
    setDrawerOpen(state);
  };


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" noWrap>
              Brand
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
              flexGrow: 1,
              marginLeft: '10%',
            }}
          >
            <MenuItems navItems={menuItems} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search', name: 'search' }} />
              </Search>
            </Box>
            <Button color="inherit" variant="outlined" onClick={handleDashboardClick}>
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        navItems={menuItems} />
    </>
  );
};

export default AppNavbar;