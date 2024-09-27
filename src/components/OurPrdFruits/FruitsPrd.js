import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import box from "../../assets/images/ourPrdFruits/box.png";
import line from "../../assets/images/ourPrdFruits/line.png";
import mangoes from "../../assets/images/ourPrdFruits/mangoes.png";
import bananas from "../../assets/images/ourPrdFruits/bananas.png";
import pomegranate from "../../assets/images/ourPrdFruits/pomegranate.png";
import onions from "../../assets/images/ourPrdFruits/onions.png";
import drumsticks from "../../assets/images/ourPrdFruits/drumsticks.png";
import lemon from "../../assets/images/ourPrdFruits/lemon.png";
import ocra from "../../assets/images/ourPrdFruits/ocra.png";
import greenchilli from "../../assets/images/ourPrdFruits/greenchilli.png";

const spices = [
  { image: mangoes, label: "Mangoes" },
  { image: bananas, label: "Bananas" },
  { image: pomegranate, label: "Pomegranate" },
  { image: onions, label: "Onions" },
  { image: drumsticks, label: "Drumsticks" },
  { image: lemon, label: "Lemon" },
  { image: ocra, label: "Ocra" },
  { image: greenchilli, label: "Greenchilli" },
];

const FruitsPrd = () => {
  return (
    <Box sx={{ mt: { md: 15, sm: 10, xs: 5 } }}>
      <Container>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
            <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Typography component={'img'} src={line} sx={{ mr: 1 }}></Typography>
              Fresh Fruits & Vegetables
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {spices.map((spices, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <Box sx={{ position: 'relative' }}>
                  <Typography component={'img'} src={spices.image} sx={{ width: '100%' }}></Typography>
                  <Typography sx={{
                    position: 'absolute',
                    top: '10%',
                    width: '85%',
                    backgroundColor: '#fff',
                    boxShadow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#555555',
                    fontWeight: 600,
                    py: 2,
                    fontSize: '22px',
                    left: { sm: '-6%', xs: '-3%' }
                  }}>
                    {spices.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ position: 'absolute', top: '-5%', left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
            <Typography component={'img'} src={box} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default FruitsPrd;