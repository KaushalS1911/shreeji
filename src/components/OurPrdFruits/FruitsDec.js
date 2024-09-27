import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FruitsLine from '../../assets/images/ourPrdFruits/FruitsLine.png';
import backgroundimg from "../../assets/images/ourPrdFruits/fruitsBg.png";
import { useNavigate } from "react-router-dom";

const FruitsDec = () => {

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: "100%",
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          padding: "120px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          '::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#294462E5",
          },
        }}
      >
        <Container sx={{ zIndex: 2 }}>
          <Box >
            <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography component={'img'} src={FruitsLine} width={'20px'} alt="line" style={{ marginRight: '10px' }} />Our Products
            </Typography>
            <Typography sx={{ mb: 1, ml: { lg: 15, md: 20, sm: 28 }, fontSize: '14px', fontWeight: 500 }}>
              <Typography variant="span" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} >Home</Typography> / <Typography variant="span" onClick={() => navigate('/ourProducts')} sx={{ cursor: 'pointer' }}>Our Products</Typography> / <Typography variant='span' sx={{ color: '#19AED7', fontWeight: 500 }}>Fresh Fruits & Vegetables</Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FruitsDec;
