import { Box, CircularProgress, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import line from '../../assets/images/prdInfo/line.png'
import kidney from '../../assets/images/prdInfo/kidney.png'
import { Grid } from '@mui/joy'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PrdInfoDetails = () => {
    const [singleProduct, setSingleProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const res = await axios.get(`https://shreeji-be.onrender.com/api/product/${id}`);
                setSingleProducts({...res.data.data,description: JSON.parse(res.data.data.description)});
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchSingleProduct();
        }
    }, []);
    console.log(singleProduct)
    if (loading) {
        return (
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }
    console.log(singleProduct)
    return (
        <>
            <Box sx={{ mt: { md: 15, sm: 10, xs: 5 } }}>
                <Container>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' },
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography component={'img'} src={line} sx={{ mr: 1 }} alt="Line decoration" />
                                Product Information
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                            <Typography sx={{ textAlign: 'center', px: { lg: 31, md: 20, sm: 14 }, color: '#00000099', fontSize: { md: '16px', xs: '12px' } }}>
                                Grains (like wheat and rice), fruits (such as bananas and apples), and Spices (like red chilli powder and Turmeric powder) are commonly imported and exported.
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container xs={12} gap={{ sm: 5, xs: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid item md={4} sm={5} xs={12}>
                                    <Typography component={'img'} src={singleProduct.image} sx={{ borderRadius: '10px', width: '100%', objectFit: 'cover', height: { lg: '350px', xs: '300px' } }}></Typography>
                                </Grid>
                                <Grid item md={4} sm={5} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, fontSize: { md: '18px', xs: '14px' } }}>
                                            Product Name: {singleProduct.title}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 500, fontSize: { md: '18px', xs: '14px' }, mt: { lg: 5, md: 3, sm: 4, xs: 3 } }}>
                                            Country of Origin: {singleProduct.description.country}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 500, fontSize: { md: '18px', xs: '14px' }, mt: { lg: 5, md: 3, sm: 4, xs: 3 } }}>
                                            Shelf Life: {singleProduct.description.shelfLife}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 500, fontSize: { md: '18px', xs: '14px' }, mt: { lg: 5, md: 3, sm: 4, xs: 3 } }}>
                                            Packaging Type: {singleProduct.description.packagingType}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 500, fontSize: { md: '18px', xs: '14px' }, mt: { lg: 5, md: 3, sm: 4, xs: 3 } }}>
                                            Preferred Buyer Location: {singleProduct.description.preferredBuyerLocation}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                            <Typography sx={{ textAlign: 'center', color: '#00000099', fontSize: { md: '22px', sm: '20px', xs: '18px' } }}>
                                Products like coal, iron ore, and rare earth elements are crucial for various industries and are often traded internationally. Crude oil, natural gas, and renewable energy products are significant commodities in global trade.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default PrdInfoDetails
