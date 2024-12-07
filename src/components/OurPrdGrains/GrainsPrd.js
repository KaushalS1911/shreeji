import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import box from "../../assets/images/ourPrdGrains/box.png";
import line from "../../assets/images/ourPrdGrains/line.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const GrainsPrd = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://shreeji-be.onrender.com/api/product?type=Grains');

        console.log('API Response:', response.data); // Log the API response

        // Assuming response.data is an object, check if it has a products array

        setProducts(response.data.data); // Adjust according to actual data structure

      } catch (err) {
        console.error('Error fetching products:', err); // Log error for debugging
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

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
              {products.map((blogPrd, index) => (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <Box
                        sx={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
                        onClick={() => navigate(`/productinfo/${blogPrd._id}`)}
                    >
                      <Typography
                          component={'img'}
                          src={blogPrd.image}
                          sx={{
                            width: '100%',
                            objectFit: 'cover',
                            height: { sm: '300px', xs: '300px' },
                            transition: 'transform 0.3s ease-in-out', // Smooth transition
                            '&:hover': {
                              transform: 'scale(1.1)', // Scale effect on hover
                            },
                          }}
                      />
                      <Typography
                          sx={{
                            position: 'absolute',
                            bottom: '10%',
                            width: '80%',
                            backgroundColor: '#fff',
                            boxShadow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#555555',
                            fontWeight: 600,
                            py: 3,
                            px: 3,
                            fontSize: { sm: '16px', xs: '14px' },
                            left: { sm: '-6%', xs: '-3%' },
                          }}
                      >
                        {blogPrd.title}
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
