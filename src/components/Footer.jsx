import React from 'react';
import { Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const CustomFooter = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
});

const Footer = () => {
  return (
    <CustomFooter>
      <div>
        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          <LinkedInIcon style={{ fontSize: 32, color: '#0077B5' }} />
        </Link>
        <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 32, color: '#4078c0' }} />
        </Link>
      </div>
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} Chris.Dev All rights reserved.
      </Typography>
    </CustomFooter>
  );
};

export default Footer;
