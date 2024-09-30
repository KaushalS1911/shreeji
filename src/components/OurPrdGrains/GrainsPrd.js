import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import box from "../../assets/images/ourPrdGrains/box.png";
import line from "../../assets/images/ourPrdGrains/line.png";
import rice from "../../assets/images/ourPrdGrains/rice.png";
import millet from "../../assets/images/ourPrdGrains/millet.png";
import chickpeas from "../../assets/images/ourPrdGrains/chickpeas.png";
import mung from "../../assets/images/ourPrdGrains/mung.png";
import soya from "../../assets/images/ourPrdGrains/soya.png";
import kidney from "../../assets/images/ourPrdGrains/kidney.png";


const spices = [
  { image: rice, label: "Rice" },
  { image: millet, label: "Millet" },
  { image: chickpeas, label: "Chickpeas" },
  { image: mung, label: "Mung beans" },
  { image: soya, label: "Soya bens" },
  { image: kidney, label: "kidney beans" },
];
const GrainsPrd = () => {
  return (
    <>
      <Box sx={{ mt: { md: 15, sm: 10, xs: 5 } }}>
        <Container>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
              <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Typography component={'img'} src={line} sx={{ mr: 1 }}></Typography>
                Grains & Pulses
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
    </>
  );
};
export default GrainsPrd;
