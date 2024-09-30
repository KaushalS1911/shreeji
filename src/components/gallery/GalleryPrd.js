import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
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


const gallery = [
    { image: mangoes, label: "Mangoes" },
    { image: bananas, label: "Bananas" },
    { image: pomegranate, label: "Pomegranate" },
    { image: onions, label: "Onions" },
    { image: drumsticks, label: "Drumsticks" },
    { image: lemon, label: "Lemon" },
    { image: ocra, label: "Ocra" },
    { image: greenchilli, label: "Greenchilli" },
    { image: rice, label: "Rice" },
    { image: millet, label: "Millet" },
    { image: chickpeas, label: "Chickpeas" },
    { image: mung, label: "Mung beans" },
    { image: soya, label: "Soya bens" },
    { image: kidney, label: "kidney beans" },
    { image: cuminSeeds, label: "Cumin seeds" },
    { image: cuminPowder, label: "Cumin powder" },
    { image: mustardSeeds, label: "Mustard Seeds" },
    { image: redChilli, label: "Red Chilli Powder" },
    { image: caromSeeds, label: "Carom seeds" },
    { image: turmericPowder, label: "Turmeric  powder" },
    { image: onionPowder, label: "Onion powder" },
    { image: garlicPowder, label: "Garlic powder" },
    { image: gingerPowder, label: "Ginger powder" },
];

const GalleryPrd = () => {
    return (
        <Box sx={{ mt: { md: 15, sm: 10, xs: 5 } }}>
            <Container>
                <Box sx={{ position: 'relative' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                        <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <Typography component={'img'} src={line} sx={{ mr: 1 }}></Typography>
                            Gallery
                        </Typography>
                    </Box>
                    <Grid container spacing={5}>
                        {gallery.map((gallery, index) => (
                            <Grid item md={4} sm={6} xs={12} key={index}>
                                <Box sx={{ position: 'relative' }}>
                                    <Typography component={'img'} src={gallery.image} sx={{ width: '100%' }}></Typography>
                                    <Typography sx={{
                                        position: 'absolute',
                                        top: '10%',
                                        width: '85%',
                                        backgroundColor: '#fff',
                                        boxShadow: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: '#555555',
                                        fontWeight: 600,
                                        py: 2,
                                        fontSize: '22px',
                                        left: { sm: '-6%', xs: '-3%' }
                                    }}>
                                        {gallery.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ position: 'absolute', top: {md:'-2%', sm: '-1%'}, left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
                        <Typography component={'img'} src={box} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default GalleryPrd
