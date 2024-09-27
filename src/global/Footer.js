import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logo from '../assets/images/global/Logo.png'
import { Input } from '@mui/joy'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ position: 'relative', mt: { xs: 10, sm: 30, md: 40 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            my: '30px',
                            position: 'absolute',
                            top: { xs: '-50%', sm: '-32%' },
                            zIndex: 1,
                            width: '90%',
                            display: { xs: 'none', sm: 'flex' }
                        }}
                    >
                        <Container>
                            <Box
                                sx={{
                                    py: { xs: '20px', sm: '30px' },
                                    transform: 'skewX(-10deg)',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 1px 20px #888888',
                                }}
                            >
                                <Box sx={{ transform: 'skewX(10deg)' }}>
                                    <Box>
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: { xs: '20px', md: '30px' },
                                                fontWeight: 700,
                                                color: '#000',
                                            }}
                                        >
                                            Newsletter
                                        </Typography>
                                        <Typography
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: '#959595',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Subscribe us & get updates in your inbox
                                        </Typography>
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: { xs: '90%', sm: '80%', md: '400px' },
                                            margin: '0 auto',
                                            mt: { xs: '20px', md: '30px' },
                                            flexDirection: { xs: 'column', sm: 'row' },
                                        }}
                                    >
                                        <Input fullWidth placeholder="   Your Email ID" sx={{ borderRadius: '0px', border: 'none', backgroundColor: '#F9F9F9', py: { xs: 1, md: 2 } }} />
                                        <Button sx={{ backgroundColor: '#19AED7', color: '#FFF', borderRadius: 0, py: { xs: 1, md: 2 }, px: 4, textTransform: 'unset' }}>
                                            Subscribe
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Box>


                <Box sx={{ backgroundColor: '#294462', position: 'relative' }}>
                    <Container>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', sm: 'space-evenly' },
                                alignItems: 'center',
                                flexDirection: { xs: 'column', sm: 'row' },
                                pb: { xs: '40px', sm: '80px' },
                                pt: { xs: '50px', sm: '150px' },
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                onClick={() => navigate('/')}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: { xs: '16px', sm: '18px' },
                                    fontWeight: '400',
                                    color: '#FFF',
                                    mb: { xs: 2, sm: 0 },
                                }}
                            >
                                Home
                            </Typography>

                            <Typography
                                onClick={() => navigate('/about')}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: { xs: '16px', sm: '18px' },
                                    fontWeight: '400',
                                    color: '#FFF',
                                    mb: { xs: 2, sm: 0 },
                                }}
                            >
                                About Us
                            </Typography>

                            <Box sx={{ mb: { xs: 2, sm: 0 }, width: { xs: '20%', sm: '10%', md: 'auto' } }}>
                                <img src={Logo} style={{ width: '100%', height: 'auto' }} alt="Logo" />
                            </Box>

                            <Typography
                                onClick={() => navigate('/ourProducts')}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: { xs: '16px', sm: '18px' },
                                    fontWeight: '400',
                                    color: '#FFF',
                                    mb: { xs: 2, sm: 0 },
                                }}
                            >
                                Our Products
                            </Typography>

                            <Typography
                                onClick={() => navigate('/contact')}
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: { xs: '16px', sm: '18px' },
                                    fontWeight: '400',
                                    color: '#FFF',
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Box>
                    </Container>
                </Box>


                <Box sx={{ backgroundColor: '#294462', borderTop: '1px solid #C6E7ED', py: { xs: '10px', md: '18px' } }}>
                    <Container>
                        <Grid container spacing={2} alignItems="center">

                            <Grid item xs={12} sm={4}>
                                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                    <Typography sx={{ color: '#FFF', fontSize: { xs: '12px', md: '14px' } }}>
                                        © 2024 lunex. All rights reserved
                                    </Typography>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center' }, alignItems: 'center' }}>
                                    <Box sx={{ color: '#C6E7ED', mx: '10px', cursor: 'pointer' }}><TwitterIcon /></Box>
                                    <Box sx={{ color: '#C6E7ED', mx: '10px', cursor: 'pointer' }}><InstagramIcon /></Box>
                                    <Box sx={{ color: '#C6E7ED', mx: '10px', cursor: 'pointer' }}><LinkedInIcon /></Box>
                                    <Box sx={{ color: '#C6E7ED', mx: '10px', cursor: 'pointer' }}><FacebookIcon /></Box>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, flexWrap: 'wrap', gap: 2 }}>
                                    <Typography sx={{ color: '#FFF', fontSize: { xs: '12px', md: '14px' }, cursor: 'pointer' }}>
                                        Privacy Policy
                                    </Typography>
                                    <Typography sx={{ color: '#FFF', fontSize: { xs: '12px', md: '14px' }, cursor: 'pointer' }}>
                                        Terms & Conditions
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </Box>
        </>
    )
}

export default Footer
