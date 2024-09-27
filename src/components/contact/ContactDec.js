import { Box, Container, Typography } from "@mui/material";
import React from "react";
import contactLine from '../../assets/images/contact/contactLine.png';
import contactBg from "../../assets/images/contact/contactBg.png";
import { useNavigate } from "react-router-dom";

const ContactDec = () => {

    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: "100%",
                    backgroundImage: `url(${contactBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    padding: "120px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                    '::before': {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#294462E5",
                    },
                }}
            >
                <Container sx={{ zIndex: 2 }}>
                    <Box >
                        <Typography sx={{ fontWeight: 600, fontSize: '38px', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography component={'img'} src={contactLine} width={'20px'} alt="line" style={{ marginRight: '10px' }} />Contact Us
                        </Typography>
                        <Typography sx={{ mb: 1, ml: { sm: -4 }, fontSize: '14px', fontWeight: 500 }}>
                            <Typography variant="span" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} >Home</Typography> / <Typography variant='span' sx={{ color: '#19AED7', fontWeight: 500 }}>Contact Us</Typography>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ContactDec
