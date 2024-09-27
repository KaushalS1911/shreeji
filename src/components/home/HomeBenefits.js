import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import homeTwoLines from '../../assets/images/home/homeTwoLines.png'
import bgLightBlue from '../../assets/images/home/bgLightBlue.png'
import delivery from '../../assets/images/home/delivery.png'
import light from '../../assets/images/home/light.png'
import pricing from '../../assets/images/home/pricing.png'

const products = [
    { image: delivery, label: ['Reliable supply', <br />, 'chain'], labelPadding: 2 },
    { image: light, label: ['Tailored solutions for', <br />, 'your business needs'], labelPadding: 2 },
    { image: pricing, label: ['Competitive pricing', <br />, 'and flexible contracts'], labelPadding: 3.5 }
];

const HomeBenefits = () => {
    return (
        <>
            <Box sx={{ py: { md: 15, xs: 10 }, overflow: 'hidden' }}>
                <Container>
                    <Box sx={{ position: 'relative' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                            <Typography component={'img'} src={homeTwoLines} sx={{ mr: 1 }}></Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='span' sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                                    Benefits of Partnering
                                </Typography>
                            </Box>
                        </Box>
                        <Grid container spacing={{ md: 10, sm: 5, xs: 10 }}>
                            {products.map((product, index) => (
                                <Grid item sm={4} xs={12} key={index}>
                                    <Box sx={{ position: 'relative', backgroundColor: '#fff', boxShadow: 1, height: { md: '300px', sm: '200px', xs: '300px' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <Typography component={'img'} src={product.image} sx={{ position: 'absolute', top: '10%', left: { sm: '-10%', xs: '-3%' }, maxWidth: { md: '100%', sm: '80%', xs: '100%' } }} />
                                        <Typography sx={{ color: '#555555', fontWeight: 500, pl: { lg: 8, md: 5, sm: 3, xs: 8 }, py: { md: 3, sm: 1, xs: 3 }, fontSize: { md: '16px', sm: '14px', xs: '16px' } }}>
                                            {product.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ position: 'absolute', top: '-10%', right: { lg: '-15%', md: '-26.5%', sm: '-51.5%' }, zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
                            <Typography component={'img'} src={bgLightBlue} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default HomeBenefits
