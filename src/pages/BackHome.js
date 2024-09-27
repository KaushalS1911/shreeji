import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';

function BackHome() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box
      id="back-to-top"
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 999,
        border: '2px solid black',
        fontSize: '26px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '45px',
        cursor: 'pointer',
        display: showButton ? 'block' : 'none',
        bgcolor: 'transparent',
      }}
      onClick={scrollToTop}
    >
      <NavigationIcon sx={{ fontSize: 18, color: "#19AED7" }} />
    </Box>
  );
}
export default BackHome;