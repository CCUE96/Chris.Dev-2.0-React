import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

const CustomAppBar = styled(AppBar)({
  top: 0,
  zIndex: (theme) => theme.zIndex.drawer + 1,
});


const Navigation = () => {
  return (
    <CustomAppBar position="fixed" sx={{ backgroundColor: '#00ffff' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <span style={{ color: '#8b74fe', fontWeight: 'bold' }}>C</span>
          <span style={{ color: '#b39ddb', fontWeight: 'bold' }}>hris</span>.
          <span style={{ color: '#8b74fe', fontWeight: 'bold' }}>D</span>
          <span style={{ color: '#b39ddb', fontWeight: 'bold' }}>ev</span>
        </Typography>
        <div>
          <Link component={RouterLink} to="/" sx={{ margin: 2, color: '#8b74fe', textDecoration: 'none' }}>
            About Me
          </Link>
          <Link component={RouterLink} to="/portfolio" sx={{ margin: 2, color: '#8b74fe', textDecoration: 'none' }}>
            Projects
          </Link>
          <Link component={RouterLink} to="/resume" sx={{ margin: 2, color: '#8b74fe', textDecoration: 'none' }}>
            Resume
          </Link>
          <Link component={RouterLink} to="/contact" sx={{ margin: 2, color: '#8b74fe', textDecoration: 'none' }}>
            Contact
          </Link>
         
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navigation;

