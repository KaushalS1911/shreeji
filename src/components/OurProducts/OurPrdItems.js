import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ourPrdTwoLines from '../../assets/images/ourProducts/ourPrdTwoLines.png'
import bgLightBlue from '../../assets/images/ourProducts/bgLightBlue.png'
import fruites from '../../assets/images/ourProducts/ourPrdFruites.png'
import grains from '../../assets/images/ourProducts/ourPrdGrains.png'
import spices from '../../assets/images/ourProducts/ourPrdSpices.png'

const products = [
    { image: fruites, label: ['Fresh Fruits &', <br />, 'Vegetables'], labelPadding: 2 },
    { image: grains, label: ['Organic Grains', <br />, '& Pulses'], labelPadding: 2 },
    { image: spices, label: ['Spices'], labelPadding: 3.5 }
];

const OurPrdItems = () => {
    return (
        <>
            <Box sx={{ mt: { md: 15, xs: 10 } }}>
                <Container>
                    <Box sx={{ position: 'relative' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                            <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                                <Typography component={'img'} src={ourPrdTwoLines} width={'8%'} sx={{ mr: 1 }}></Typography>
                                Our Products
                            </Typography>
                        </Box>
                        <Grid container spacing={5}>
                            {products.map((product, index) => (
                                <Grid item sm={4} xs={12} key={index}>
                                    <Box sx={{ position: 'relative' }}>
                                        <Typography component={'img'} src={product.image} sx={{ width: '100%' }}></Typography>
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
                                            py: product.labelPadding,
                                            left: { sm: '-6%', xs: '-3%' }
                                        }}>
                                            {product.label}
                                        </Typography>

                                        <Button
                                            sx={{
                                                position: 'absolute',
                                                borderRadius: '0',
                                                bottom: '8%',
                                                color: '#fff',
                                                boxShadow: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                backgroundColor: '#19AED7',
                                                textTransform: 'unset',
                                                py: 1,
                                                px: 5.5,
                                                fontWeight: 600,
                                                right: '-3%'
                                            }}
                                        >
                                            View All
                                        </Button>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ position: 'absolute', top: '-10%', left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
                            <Typography component={'img'} src={bgLightBlue} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default OurPrdItems
