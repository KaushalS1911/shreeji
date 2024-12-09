import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import homeTwoLinesBig from '../../assets/images/home/homeTwoLinesBig.png'

const ContactDetails = () => {
    return (
        <>
            <Box sx={{ mt: { lg: 30, sm: 20, xs: 10 } }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: { sm: 'center'} }}>
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
                                                “Reach
                                            </Box>
                                            out to us for more information on how we can help your business grow with quality agricultural exports.
                                            <Box component="span" sx={{ color: '#19AED7', mr: 1 }}>
                                                !!
                                            </Box>
                                            ”
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography sx={{ color: '#7D7D7D', display: 'flex', justifyContent: 'center', fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' }, py: 3, ml: 6 }}>
                                    “By incorporating this content into the website, you ensure that the business is presented as reliable, professional, and focused on quality and sustainability, which are crucial in the agriculture export industry.”
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ContactDetails
