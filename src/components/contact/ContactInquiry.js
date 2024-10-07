import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Box, Container, Grid, Typography, IconButton, Button } from "@mui/material";
import Input from '@mui/joy/Input';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import contantTwoLines from '../../assets/images/contact/contantTwoLines.png';
import { Textarea } from "@mui/joy";
import BlueBox from '../../assets/images/contact/BlueBox.png';
import axios from 'axios';

const ContactInquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            });
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('https://shreeji-be.onrender.com/api/inquiry', formData);

            setSuccess("Your inquiry has been sent successfully.");
            setFormData({ name: '', email: '', message: '' });

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your inquiry has been sent successfully.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#19AED7',
            });

        } catch (error) {
            setError("Failed to send inquiry. Please try again later.");

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send inquiry. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <Box sx={{ mt: { sm: 20, xs: 10 } }}>
            <Container>
                <Box sx={{ position: 'relative' }}>
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
                            <Typography component={'img'} src={contantTwoLines} sx={{ width: '70%', height: 'auto' }} alt="Line" />
                        </Box>
                        Let’s Grow Together
                    </Typography>

                    <Box sx={{ mt: { xs: 5, sm: 14 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Box sx={{ mb: { sm: 0, xs: 5 } }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                                        <IconButton sx={{ backgroundColor: "#19AED7", mr: 2 }} size="medium">
                                            <PhoneIcon style={{ color: "white" }} />
                                        </IconButton>
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#294462', fontSize: { xs: '20px', sm: '18px', md: '20px' } }}>
                                                Call to Us
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#686868', fontWeight: 600, fontSize: { xs: '12px', sm: '10px', md: '14px' } }}>
                                                Phone: +91 76989 88190 / +91 75672 19810
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <IconButton sx={{ backgroundColor: "#19AED7", mr: 2 }} size="medium">
                                            <EmailIcon style={{ color: "white" }} />
                                        </IconButton>
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#294462', fontSize: { xs: '20px', sm: '18px', md: '20px' } }}>
                                                Write to Us
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#686868', fontWeight: 600, fontSize: { xs: '12px', sm: '10px', md: '14px' } }}>
                                                Emails: export@lunexinternational.com
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Box sx={{ boxShadow: '0px 1px 10px rgba(153, 153, 153, 0.5)', p: 4, backgroundColor: '#FFF' }}>
                                    <Typography sx={{ fontSize: { xs: '20px', sm: '18px', md: '22px' }, fontWeight: 600, mb: 6, display: 'flex', justifyContent: 'center' }}>
                                        Send Inquiry
                                    </Typography>

                                    {/* Error or success message */}
                                    {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
                                    {success && <Typography color="success" sx={{ mb: 2 }}>{success}</Typography>}

                                    <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <Input
                                                    fullWidth
                                                    placeholder="Enter Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    sx={{ borderRadius: '0px', border: 'none', backgroundColor: '#F9F9F9', py: { xs: 1, md: 2 } }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <Input
                                                    fullWidth
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    sx={{ borderRadius: '0px', border: 'none', backgroundColor: '#F9F9F9', py: { xs: 1, md: 2 } }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <Textarea
                                                    minRows={6}
                                                    placeholder="Write Message....."
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    sx={{ border: 'none', backgroundColor: '#F9F9F9', borderRadius: '0px', py: { xs: 1, md: 2 } }}
                                                />
                                            </Box>
                                        </Grid>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4}}>
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                sx={{ backgroundColor: '#19AED7', color: '#FFF', borderRadius: 0, p: 1, textTransform: 'unset', }}
                                            >
                                                {loading ? "Sending..." : "Submit Interest"}
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ position: 'absolute', top: '-70px', left: '-15px', display: { xs: 'none', sm: 'block' }, zIndex: -1, width: '51%' }}>
                        <Typography component={'img'} src={BlueBox} sx={{ display: 'flex', width: '100%' }}></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactInquiry;
