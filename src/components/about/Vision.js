import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import Blue from '../../assets/images/about/Blue.png'
import Line from '../../assets/images/about/Line.png'
import txtLine from '../../assets/images/about/txtLine.png'
import Eye from '../../assets/images/about/eye.png'
import Gole from '../../assets/images/about/gole.png'

const visionMissionData = [
    {
        title: "Our Vision",
        description: `“To be a global leader in sustainable agricultural exports, contributing to food security worldwide.”`,
        image: Eye,
        alignText: "left",
        imageFirst: false,
    },
    {
        title: "Our Mission",
        description: `“To deliver premium, responsibly sourced agricultural products while promoting sustainability and supporting local farmers.”`,
        image: Gole,
        alignText: "right",
        imageFirst: true,
    }
];

const Vision = () => {
    return (
        <Box sx={{ pt: { md: 25, sm: 15, xs: 5 }, overflow: 'hidden' }}>
            <Container sx={{ position: 'relative' }}>
                <Grid container spacing={2}>


                    {visionMissionData.map((item, index) => (
                        <React.Fragment key={index}>

                            {!item.imageFirst && (
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <Box sx={{ width: { sm: '70%', xs: '100%' }, mt: { sm: 0, xs: 2 } }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Box sx={{ display: '', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box sx={{ pr: 2 }}>
                                                        <Typography component={'img'} src={txtLine} sx={{ display: 'flex', alignItems: 'center' }}></Typography>
                                                    </Box>
                                                    <Typography sx={{
                                                        fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' },
                                                        fontWeight: '600',
                                                        lineHeight: '1.2',
                                                        color: '#333',
                                                    }}>
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                                <Typography sx={{
                                                    color: '#7D7D7D',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' },
                                                    pt: 3,
                                                }}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )}


                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography component={'img'} src={item.image} sx={{ display: 'flex', width: { sm: '70%', xs: '50%' }, height: 'auto' }}></Typography>
                                </Box>
                            </Grid>


                            {item.imageFirst && (
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'start', my: { xs: 2, sm: 20 } }}>
                                    <Box sx={{ width: { sm: '70%', xs: '100%' }, mt: { sm: 0, xs: 2 } }}>
                                        <Box sx={{ display: '', justifyContent: 'center' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'webkit-right' }}>
                                                    <Typography sx={{
                                                        fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' },
                                                        fontWeight: '600',
                                                        textAlign: 'end',
                                                        alignItems: 'center',
                                                        lineHeight: '1.2',
                                                        color: '#333',
                                                    }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Box sx={{ width: '60px', display: 'flex', justifyContent: 'end' }}>
                                                        <Typography component={'img'} src={txtLine} sx={{ display: 'flex', justifyContent: 'end' }}></Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    color: '#7D7D7D',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    textAlign: 'end',
                                                    fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' },
                                                    pt: 3,
                                                }}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}
                </Grid>


                <Box sx={{ position: 'absolute', top: { md: '-70px', sm: '-40px' }, left: { md: '130px', sm: '50px' }, zIndex: -1, display: { xs: 'none', sm: 'block' } }}>
                    <Typography component={'img'} src={Blue} sx={{ display: 'flex', width: { md: '70%', sm: '55%' } }}></Typography>
                </Box>
                <Box sx={{ position: 'absolute', bottom: { md: '70px', sm: '100px' }, right: { md: '-6px', sm: '-150px' }, zIndex: -1, display: { xs: 'none', sm: 'block' } }}>
                    <Typography component={'img'} src={Blue} sx={{ display: 'flex', width: { md: '70%', sm: '55%' } }}></Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Vision;
