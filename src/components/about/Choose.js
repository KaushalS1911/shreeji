
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import Blue from '../../assets/images/about/Blue.png'
import BlueSmall from '../../assets/images/about/Bluesmall.png'
import textLine from '../../assets/images/about/txtLine.png'
import C1 from '../../assets/images/about/Choose1.png'
import C2 from '../../assets/images/about/Choose2.png'
import C3 from '../../assets/images/about/Choose3.png'
import C4 from '../../assets/images/about/Choose4.png'

const spices = [
    { img: C1, label: 'Quality Assurance', con: ['Strict quality control at', <br />, 'every stage.'] },
    { img: C2, label: 'Global Reach', con: 'Exporting to over [X] countries.' },
    { img: C3, label: 'Sustainability Focus', con: ['Eco-friendly and sustainable farming', <br />, ' practices.'] },
    { img: C4, label: 'Customer Satisfaction', con: ['Personalized service and', <br />, ' timely deliveries.'] },
];

const Choose = () => {
    return (
        <Box sx={{ mt: { xs: 5, sm: 12 } }}>
            <Container sx={{ position: 'relative' }}>
                <Box>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' },
                            fontWeight: '600',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mr: '10px' }}>
                            <Typography component={'img'} src={textLine} style={{ width: '70%', height: 'auto' }} alt="Line" />
                        </Box>
                        Why Choose Us?
                    </Typography>
                </Box>

                <Box sx={{ my: 8 }}>
                    <Grid container spacing={5}>
                        {spices.map((spice, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box>
                                        <Typography component={'img'}
                                            src={spice.img}
                                            sx={{ width: '100%', objectFit: 'cover', height: { sm: 'auto', xs: '350px' } }}
                                            alt={spice.label}
                                        />
                                    </Box>
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '5%',
                                        left: '-3%', background: '#FFF',
                                        p: { lg: 5, xs: 3 },
                                        boxShadow: '0px 1px 20px #888888',
                                        width: { xs: '60%', md: '80%', sm: '90%' },
                                        display: 'flex',
                                    }}>
                                        <Box>
                                            <Box>
                                                <Typography
                                                    sx={{

                                                        textAlign: 'start',

                                                        color: '#000',
                                                        fontSize: { xs: '12px', sm: '22px', md: '24px' },
                                                        fontWeight: '700',

                                                    }}
                                                >
                                                    {spice.label}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: '#4B4B4B', fontWeight: 500, fontSize: { lg: '16px', md: '14px', sm: '12px', xs: '10px' }, pt: { md: 2, xs: 1 } }}>
                                                    {spice.con}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ position: 'absolute', top: '-70px', left: '-15px', display: { xs: 'none', sm: 'block' }, zIndex: -1, width: '51%' }}>
                    <Typography component={'img'} src={Blue} sx={{ display: 'flex', width: '100%' }}></Typography>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '-65px', display: { xs: 'none', sm: 'block' }, right: { lg: '-50px', sm: '8px' }, zIndex: -1, width: '49%' }}>
                    <Typography component={'img'} src={BlueSmall} sx={{ display: 'flex', width: '100%' }}></Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Choose

