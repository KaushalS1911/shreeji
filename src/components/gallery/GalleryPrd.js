import {Box, Button, CircularProgress, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import box from "../../assets/images/ourPrdFruits/box.png";
import line from "../../assets/images/ourPrdFruits/line.png";
import mangoes from "../../assets/images/ourPrdFruits/mangoes.png";
import bananas from "../../assets/images/ourPrdFruits/bananas.png";
import pomegranate from "../../assets/images/ourPrdFruits/pomegranate.png";
import onions from "../../assets/images/ourPrdFruits/onions.png";
import drumsticks from "../../assets/images/ourPrdFruits/drumsticks.png";
import lemon from "../../assets/images/ourPrdFruits/lemon.png";
import ocra from "../../assets/images/ourPrdFruits/ocra.png";
import greenchilli from "../../assets/images/ourPrdFruits/greenchilli.png";
import rice from "../../assets/images/ourPrdGrains/rice.png";
import millet from "../../assets/images/ourPrdGrains/millet.png";
import chickpeas from "../../assets/images/ourPrdGrains/chickpeas.png";
import mung from "../../assets/images/ourPrdGrains/mung.png";
import soya from "../../assets/images/ourPrdGrains/soya.png";
import kidney from "../../assets/images/ourPrdGrains/kidney.png";
import cuminSeeds from "../../assets/images/ourPrdSpices/cuminSeeds.png";
import cuminPowder from "../../assets/images/ourPrdSpices/cuminPowder.png";
import mustardSeeds from "../../assets/images/ourPrdSpices/mustardSeeds.png";
import caromSeeds from "../../assets/images/ourPrdSpices/caromSeeds.png";
import turmericPowder from "../../assets/images/ourPrdSpices/turmericPowder.png";
import redChilli from "../../assets/images/ourPrdSpices/redChilli.png";
import garlicPowder from "../../assets/images/ourPrdSpices/garlicPowder.png";
import gingerPowder from "../../assets/images/ourPrdSpices/gingerPowder.png";
import onionPowder from "../../assets/images/ourPrdSpices/onionPowder.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const GalleryPrd = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://shreeji-be.onrender.com/api/gallery');
                setProducts(response.data.data);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Container>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
                <CircularProgress/>
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

    return (
        <Box sx={{mt: {md: 15, sm: 10, xs: 5}}}>
            <Container>
                <Box sx={{position: 'relative'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: {md: 10, xs: 5}}}>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: {lg: '40px', md: '34px', sm: '24px', xs: '28px'},
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex'
                        }}>
                            <Typography component={'img'} src={line} sx={{mr: 1}}></Typography>
                            Gallery
                        </Typography>
                    </Box>
                    <Grid container spacing={5}>
                        {products.map((gallery, index) => (<Grid item md={4} sm={6} xs={12} key={index}>
                                <Box sx={{ position: 'relative' }}>
                                    <Typography component={'img'} src={gallery.image} sx={{ width: '100%', objectFit: 'cover', height: { sm: '300px', xs: '300px' } }}></Typography>

                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{
                        position: 'absolute',
                        top: {md: '-2%', sm: '-1%'},
                        left: '-2%',
                        zIndex: -1,
                        display: {sm: 'block', xs: 'none'}
                    }}>
                        <Typography component={'img'} src={box}
                                    sx={{width: {lg: '80%', md: '68%', xs: '53%'}}}></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default GalleryPrd
