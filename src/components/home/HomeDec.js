import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import homeBg from '../../assets/images/home/homeBg.png'
import twoLines from '../../assets/images/global/twolines.png'
import homeBgShip from '../../assets/images/home/homeBgShip.png'

const HomeDec = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${homeBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                pb: { md: 25, sm: 10, xs: 20 },
                display: 'flex',
                height: { sm: '100vh', xs: '75vh'},
                alignItems: 'center',
                position: 'relative',
                mb: { sm: 20, xs: 15 },
            }}>
                <Container>
                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item sm={6} xs={12} sx={{ display: 'flex' }}>
                            <Box>
                                <Typography component={'img'} src={twoLines} sx={{ mr: 2, width: { lg: '100%', md: '80%', sm: '60%', xs: '70%' } }} />
                            </Box>
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: 600, ml: { md: 2 }, color: '#fff', fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' } }}>
                                    “Trade Without Borders, Shine
                                    <Box component="span" sx={{ color: '#19AED7' }}> Without Limits”</Box>
                                </Typography>
                                <Typography sx={{ lineHeight: 1.6, color: '#fff', fontSize: { lg: '22px', md: '18px', sm: '14px', xs: '12px' }, mt: 4 }}>
                                    “Providing fresh, organic, and sustainably sourced products to international markets.”
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: { sm: '-10%', xs: '-8%' }, width: '70%' }}>
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', backgroundColor: '#fff', px: { lg: 13, md: 10, sm: 5, xs: 3 }, py: { lg: 5, xs: 3 }, transform: 'skewX(-10deg)', boxShadow: '0px 1px 20px #888888' }}>
                            <Box sx={{ transform: 'skewX(10deg)' }}>
                                <Typography sx={{ fontSize: { lg: '22px', md: '18px', sm: '16px', xs: '8px' }, fontWeight: 500, color: '#555555', textAlign: 'center' }}>“We are LUNEX INTERNATIONAL, a leading exporter of premium agricultural products, dedicated to delivering the finest produce from farm to table. With years of experience in the industry, we ensure top-quality products that meet global standards.”</Typography>
                                <Typography component={'img'} src={homeBgShip} sx={{ position: 'absolute', bottom: { lg: '100%', md: '93%', sm: '100%', xs: '118%' }, right: { lg: '-23%', md: '-25%', sm: '-18%', xs: '-20%'}, width: { lg: '65%', md: '80%', sm: '70%', xs: '65%' } }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default HomeDec
