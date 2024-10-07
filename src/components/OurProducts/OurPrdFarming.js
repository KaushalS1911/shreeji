import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ourPrdTwoLines from '../../assets/images/ourProducts/ourPrdTwoLines.png';
import ourPrdfarmers from '../../assets/images/ourProducts/ourPrdfarmers.webp';
import ourPrdWater from '../../assets/images/ourProducts/ourPrdWater.webp';
import ourPrdfarmers2 from '../../assets/images/ourProducts/ourPrdfarmers2.webp';
import ourPrdWater2 from '../../assets/images/ourProducts/ourPrdWater2.webp';

const content = [
    {
        smImg: ourPrdfarmers,
        bigImg: ourPrdWater,
        title: '"Committed to a Greener Future"',
        description: 'As stewards of the environment, we are dedicated to promoting sustainable farming practices. From reducing water usage to minimizing waste, we work with farmers who prioritize eco-friendly techniques.',
        buttonText: 'Key Practices:',
        list: [
            { title: '• Organic Farming:', description: 'No synthetic pesticides or fertilizers.' },
            { title: '• Water Conservation:', description: 'Efficient irrigation techniques.' },
            { title: '• Fair Trade:', description: 'Supporting local farmers with fair pricing.' },
        ]
    },
    {
        smImg: ourPrdfarmers2,
        bigImg: ourPrdWater2,
        title: '"Partner with Us for Reliable, High-Quality Agricultural Exports"',
        description: 'We work with importers, distributors, and retailers globally. Our commitment to quality and service has made us the preferred choice for businesses around the world.',
        buttonText: 'Benefits of Partnering:',
        list: [
            { description: '• Reliable supply chain' },
            { description: '• Tailored solutions for your business needs' },
            { description: '• Competitive pricing and flexible contracts' },
        ]
    }
];

const OurPrdFarming = () => {
    const highlightText = (text) => {
        // Regex to identify "Greener" and "Agricultural Exports"
        const regex = /(Greener|Agricultural Exports)/g;
        const parts = text.split(regex);

        return parts.map((part, i) =>
            part === "Greener" || part === "Agricultural Exports" ? (
                <Box key={i} component="span" sx={{ color: '#19AED7', mx: 1 }}>
                    {part}
                </Box>
            ) : (
                <Box key={i} component="span">
                    {part}{' '}
                </Box>
            )
        );
    };

    return (
        <>
            <Box sx={{ mt: { lg: 20, md: 15, xs: 10} }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 10 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                                <Typography component={'img'} src={ourPrdTwoLines} width={'8%'} sx={{ mr: 1 }}></Typography>
                                Sustainability
                            </Typography>
                        </Box>
                    </Box>
                    <Grid container spacing={{ md: 10, xs: 5 }}>
                        {content.map((section, index) => (
                            <React.Fragment key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <Grid container item>
                                            <Grid item xs={12} sm={5}>
                                                <Box sx={{ position: 'relative' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                                        <img src={section.smImg} width={'80%'} />
                                                    </Box>
                                                    <Box sx={{ position: 'absolute', bottom: '2%', left: '5%' }}>
                                                        <Typography component={'img'} src={section.bigImg} sx={{ width: { lg: '80%', md: '70%', sm: '50%', xs: '60%' } }} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: { sm: 'center' }, mt: { sm: 0, xs: 3 } }}>
                                                <Box sx={{ width: { sm: '87%', xs: '100%' } }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Box sx={{ pr: 1, display: { sm: 'flex' }, alignItems: { sm: 'center' } }}>
                                                                <Typography component={'img'} src={ourPrdTwoLines} width={{ md: '100%', sm: '80%' }}></Typography>
                                                            </Box>
                                                            <Typography sx={{
                                                                fontSize: { md: '30px', sm: '18px', xs: '26px' },
                                                                fontWeight: '600',
                                                                color: '#333',
                                                            }}>
                                                                {highlightText(section.title)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Typography sx={{ color: '#7D7D7D', display: 'flex', justifyContent: 'center', fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' }, py: 3, ml: 6 }}>
                                                        {section.description}
                                                    </Typography>

                                                    <Box sx={{ ml: 6 }}>
                                                        <Button sx={{ backgroundColor: '#19AED7', color: '#fff', borderRadius: '0', textTransform: 'capitalize', px: 2, transform: 'skewX(-10deg)' }}>
                                                            <Typography sx={{ transform: 'skewX(10deg)' }}>{section.buttonText}</Typography>
                                                        </Button>
                                                    </Box>

                                                    <Box sx={{ ml: 6, mt: 2 }}>
                                                        {section.list.map((item, idx) => (
                                                            <Typography key={idx} sx={{ fontWeight: 500, fontSize: { lg: '18px', md: '14px', sm: '10px', xs: '14px' }, color: '#939393', mb: 2 }}>
                                                                <Box component={'span'} sx={{ color: '#000', fontWeight: 600 }}>{item.title}</Box> {item.description || ''}
                                                            </Typography>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <Grid container item>
                                            <Grid item xs={12} sm={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: { sm: 'center' } }}>
                                                <Box sx={{ width: { sm: '87%', xs: '100%' } }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Box sx={{ pr: 1 }}>
                                                                <Typography component={'img'} src={ourPrdTwoLines} sx={{ display: 'flex', alignItems: 'center' }}></Typography>
                                                            </Box>
                                                            <Typography sx={{
                                                                fontSize: { md: '30px', sm: '18px', xs: '26px' },
                                                                fontWeight: '600',
                                                                color: '#333',
                                                            }}>
                                                                {highlightText(section.title)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Typography sx={{ color: '#7D7D7D', display: 'flex', justifyContent: 'center', fontSize: { lg: '16px', md: '12px', sm: '10px', xs: '12px' }, py: 3, ml: 6 }}>
                                                        {section.description}
                                                    </Typography>

                                                    <Box sx={{ ml: 6 }}>
                                                        <Button sx={{ backgroundColor: '#19AED7', color: '#fff', borderRadius: '0', textTransform: 'capitalize', px: 2, transform: 'skewX(-10deg)' }}>
                                                            <Typography sx={{ transform: 'skewX(10deg)' }}>{section.buttonText}</Typography>
                                                        </Button>
                                                    </Box>

                                                    <Box sx={{ ml: 6, mt: 2 }}>
                                                        {section.list.map((item, idx) => (
                                                            <Typography key={idx} sx={{ fontWeight: 500, fontSize: { lg: '18px', md: '14px', sm: '10px', xs: '14px' }, color: '#939393', mb: 2 }}>
                                                                <Box component={'span'} sx={{ color: '#000', fontWeight: 600 }}>{item.title}</Box> {item.description || ''}
                                                            </Typography>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={5}>
                                                <Box sx={{ position: 'relative' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                                        <img src={section.smImg} width={'80%'} />
                                                    </Box>
                                                    <Box sx={{ position: 'absolute', bottom: '2%', left: '5%' }}>
                                                        <Typography component={'img'} src={section.bigImg} sx={{ width: { lg: '80%', md: '70%', sm: '50%', xs: '60%' } }} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default OurPrdFarming;
