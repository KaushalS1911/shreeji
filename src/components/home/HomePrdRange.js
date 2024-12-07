import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import homeTwoLines from '../../assets/images/home/homeTwoLines.png';
import Sourcing from '../../assets/images/home/Sourcing.webp';
import Quality from '../../assets/images/home/Quality.webp';
import Logistics from '../../assets/images/home/Logistics.webp';
import Certifications from '../../assets/images/home/Certifications.webp';
import Sustainability from '../../assets/images/home/Sustainability.webp';

const productRange = [
    { image: Sourcing, label: 'Sourcing' },
    { image: Quality, label: 'Quality Control' },
    { image: Logistics, label: 'Logistics' },
    { image: Certifications, label: 'Certifications' },
    { image: Sustainability, label: 'Sustainability' }
];

const HomePrdRange = () => {
    return (
        <Box sx={{ mt: { md: 15, xs: 5 } }}>
            <Container>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                        <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                            <Typography component={'img'} src={homeTwoLines} sx={{ mr: 1 }}></Typography>
                            What We Offer
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {productRange.map((product, index) => (
                            <Grid item md={2.4} sm={4} xs={12} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden', // Ensures the image doesn't scale outside the box
                                        transition: 'box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            boxShadow: 6, // Add shadow on hover
                                            '& img': {
                                                transform: 'scale(1.1)', // Scale the image on hover
                                            },
                                        },
                                    }}
                                >
                                    <Typography
                                        component={'img'}
                                        src={product.image}
                                        width={'100%'}
                                        sx={{
                                            transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            top: '8%',
                                            width: '85%',
                                            backgroundColor: '#fff',
                                            boxShadow: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            color: '#555555',
                                            py: 2,
                                            fontWeight: 600,
                                            left: { sm: '-6%', xs: '-3%' },
                                        }}
                                    >
                                        {product.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePrdRange;
