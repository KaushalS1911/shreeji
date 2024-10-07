import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Sourcing from '../../assets/images/ourProducts/Sourcing.webp';
import Quality from '../../assets/images/ourProducts/Quality.webp';
import Logistics from '../../assets/images/ourProducts/Logistics.webp';
import Certifications from '../../assets/images/ourProducts/Certifications.webp';
import ourPrdTwoLines from '../../assets/images/ourProducts/ourPrdTwoLines.png'

const productData = [
    {
        image: Sourcing,
        label: 'Sourcing',
        description: '“We partner with local farmers who use sustainable practices to grow high-quality, organic crops.”'
    },
    {
        image: Quality,
        label: 'Quality Control',
        description: '“From harvest to packaging, every product undergoes rigorous quality checks to ensure freshness and compliance with international standards.”'
    },
    {
        image: Logistics,
        label: 'Logistics',
        description: '“With a robust global logistics network, we ensure timely delivery to your location, no matter where you are.”'
    },
    {
        image: Certifications,
        label: 'Certifications',
        description: '“We are certified by ISO, HACCP, USDA Organic, ensuring that every product meets the highest global standards.”'
    },
];

const OurPrdRange = () => {
    return (
        <Box sx={{ mt: { lg: 30, sm: 20, xs: 10 } }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 10 }}>
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                            <Typography component={'img'} src={ourPrdTwoLines} sx={{ mr: 1 }}></Typography>
                            Explore Our Full Product Range
                        </Typography>
                        <Typography sx={{ color: '#6F6F6F', fontWeight: 500, display: 'flex', justifyContent: 'center', fontSize: { md: '26px', sm: '20px', xs: '12px' }, mt: 2 }}>“How We Ensure Quality from Farm to Market”</Typography>
                    </Box>
                </Box>
                <Grid container sx={{ px: { md: 13, sm: 10, xs: 2 } }} spacing={{ md:10, xs: 5}}>
                    {productData.map((product, index) => (
                        <React.Fragment key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <Grid container item>
                                        <Grid item sm={4} xs={12}>
                                            <Box sx={{ position: 'relative' }}>
                                                <Typography component={'img'} src={product.image} width={'100%'} />
                                                <Typography
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '10%',
                                                        backgroundColor: '#fff',
                                                        width: '80%',
                                                        boxShadow: 1,
                                                        fontSize: { md: '20px', sm: '14px', xs: '16px' },
                                                        justifyContent: 'center',
                                                        color: '#555555',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        justifyItems: 'center',
                                                        py: { md: 2, xs: 1.5 },
                                                        left: { sm: '-5%', xs: '-3%' }
                                                    }}
                                                >
                                                    {product.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={8} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ backgroundColor: '#F3F6FA', py: { md: 6, xs: 4 }, px: { sm: 8, xs: 1 } }}>
                                                <Typography
                                                    sx={{ fontWeight: 500, color: '#555555', fontSize: { lg: '22px', md: '16px', sm: '10px', xs: '14px' } }}
                                                >
                                                    {product.description}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid container item>
                                        <Grid item sm={8} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ backgroundColor: '#F3F6FA', py: { md: 6, xs: 4 }, px: { sm: 8, xs: 1 } }}>
                                                <Typography
                                                    sx={{ fontWeight: 500, color: '#555555', fontSize: { lg: '22px', md: '16px', sm: '10px', xs: '14px' } }}
                                                >
                                                    {product.description}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            <Box sx={{ position: 'relative' }}>
                                                <Typography component={'img'} src={product.image} width={'100%'} />
                                                <Typography
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '10%',
                                                        backgroundColor: '#fff',
                                                        width: '80%',
                                                        boxShadow: 1,
                                                        fontSize: { md: '20px', sm: '14px', xs: '16px' },
                                                        justifyContent: 'center',
                                                        color: '#555555',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        justifyItems: 'center',
                                                        py: { md: 2, xs: 1.5 },
                                                        right: { sm: '-5%', xs: '-3%' }
                                                    }}
                                                >
                                                    {product.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default OurPrdRange;
