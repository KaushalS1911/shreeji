import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import homeTwoLinesBig from '../../assets/images/home/homeTwoLinesBig.png'
import containers from '../../assets/images/home/containers.png'
import containersPeople from '../../assets/images/home/containersPeople.png'

const HomeExplore = () => {
    return (
        <>
            <Box sx={{ mt: { lg: 30, sm: 20, xs: 10 } }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <img src={containers} width={'80%'} />
                                </Box>
                                <Box sx={{ position: 'absolute', bottom: '2%', left: '5%' }}>
                                    <Typography component={'img'} src={containersPeople} sx={{ width: { lg: '80%', md: '70%', sm: '50%', xs: '60%' } }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: { sm: 'center'} }}>
                            <Box sx={{ width: { sm: '70%', xs: '100%' }, mt: { sm: 0, xs: 2 } }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Box sx={{ display: 'flex', pr: 1 }}>
                                            <Typography component={'img'} src={homeTwoLinesBig} sx={{ display: 'flex', alignItems: 'center', mr: 4, width: '100%' }}></Typography>
                                        </Box>
                                        <Typography sx={{
                                            fontSize: { lg: '36px', md: '30px', sm: '22px', xs: '26px' },
                                            fontWeight: 600,
                                            lineHeight: '1.2',
                                            color: '#333',
                                        }}>
                                            <Box component="span" sx={{ color: '#19AED7', mr: 1 }}>
                                                “Partner
                                            </Box>
                                            with Us Today for Reliable Agricultural Exports
                                            <Box component="span" sx={{ color: '#19AED7', mr: 1 }}>
                                                !!
                                            </Box>
                                            ”
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography sx={{ color: '#7D7D7D', display: 'flex', justifyContent: 'center', fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' }, py: 3, ml: 6 }}>
                                    “LUNEX INTERNATIONAL has been a trusted name in the agricultural export sector for [X] years. Based in [Location],
                                    we specialize in providing a wide range of agricultural products to international markets, ensuring freshness,
                                    quality, and compliance with global food standards.”
                                </Typography>

                                <Box sx={{ ml: 6 }}>
                                    <Button sx={{ backgroundColor: '#19AED7', color: '#fff', borderRadius: '0', textTransform: 'capitalize', px: 2 }}>Explore more</Button>
                                </Box>  
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default HomeExplore
