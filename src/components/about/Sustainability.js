import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import Line from '../../assets/images/about/Line2.png'
import I1 from '../../assets/images/about/img1.webp'
import I2 from '../../assets/images/about/img2.webp'

const Sustainability = () => {
    return (
        <>
            <Box sx={{ mt: { lg: 20, md: 15, sm: 10, xs: 5 } }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <img src={I1} width={'80%'} />
                                </Box>
                                <Box sx={{ position: 'absolute', bottom: '2%', left: '5%' }}>
                                    <Typography component={'img'} src={I2} sx={{ width: { lg: '80%', md: '70%', sm: '50%', xs: '60%' } }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: { sm: 'center' } }}>
                            <Box sx={{ width: { sm: '70%', xs: '100%' }, mt: { sm: 0, xs: 2 } }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Box sx={{ display: 'flex', pr: 1 }}>
                                            <Typography component={'img'} src={Line} sx={{ display: 'flex', alignItems: 'center', mr: 4, width: '100%' }}></Typography>
                                        </Box>
                                        <Typography sx={{
                                            fontSize: { lg: '36px', md: '30px', sm: '22px', xs: '26px' },
                                            fontWeight: '600',
                                            lineHeight: '1.2',
                                            color: '#333',
                                        }}>
                                            “Committed to Quality, <Box component={'span'} sx={{ color: '#19AED7' }}>Sustainability,</Box> and Global Reach”
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography sx={{ color: '#7D7D7D', display: 'flex', justifyContent: 'center', fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' }, py: 3, ml: 6 }}>
                                    “LUNEX INTERNATIONAL has been a trusted name in the agricultural export sector for 4 years. Based in Surat,
                                    we specialize in providing a wide range of agricultural products to international markets, ensuring freshness,
                                    quality, and compliance with global food standards.”
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Sustainability
