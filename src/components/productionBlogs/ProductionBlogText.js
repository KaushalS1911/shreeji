import {Box, CircularProgress, Container, List, ListItem, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";
import Lines from "../../assets/images/blog/line.png";
import prdBlogImg from "../../assets/images/blog/productionBlogsImg.png";
import box from "../../assets/images/blog/box.png";


const exportedGoods = [
    "Mineral fuels including oil: US$44.1 billion (13.7% of total exports)",
    "Gems, precious metals: $36.7 billion (11.4%)",
    "Machinery including computers: $21.2 billion (6.6%)",
    "Organic chemicals: $18.3 billion (5.7%)",
    "Vehicles: $17.2 billion (5.3%)",
    "Pharmaceuticals: $16.1 billion (5%)",
    "Electrical machinery, equipment: $14.7 billion (4.5%)",
    "Iron, steel: $9.7 billion (3%)",
    "Clothing, accessories (not knit or crochet): $8.6 billion (2.7%)",
    "Knit or crochet clothing, accessories: $7.9 billion (2.5%)"
];

const contentSections = [
    {
        title: 'Find the Right Product:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'Finding the right product is really the key to successful export. But selecting the right product is not as simple as it might look. There are many things to consider before you go ahead and finalize the product for export.'},
            {
                text: 'To select any product for export, it is important to verify that the product is available in the local market both easily and abundantly.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'The product you choose must be unique in a way that it creates hype in the minds of buyers all around the world. In short, the product must be trendy and fresh in the market, not old-fashioned or something in which very few people are interested.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Once you find a product that is easily available and trendy in the market, your first step is completed!',
                sx: {fontWeight: 600, marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Market Selection:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'Since you have already selected and finalized a product for export. Now it’s time to do some research about all the international markets where you could export your product.'},
            {
                text: 'Here it is important that you select a product that is in demand in more than one international market places.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'The product you choose must be unique in a way that it creates hype in the minds of buyers all around the world. In short, the product must be trendy and fresh in the market, not old-fashioned or something in which very few people are interested.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Adaptability:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'A product with huge demand in one market may not be needed at all in another. The reason for it may be anything like, physical condition, functional requirements, culture, tastes, skills and the level of development of that region. '},
            {
                text: 'For a product to be successful in more than one international market places, is that the product must be able to suitably change according to the demand of the market. Such a change in design, colour, packaging etc is called Product Adaptability.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Growth Aspects:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'Analyse the growth aspects of your business. You may be exporting a product to a particular region and earning a good sum. But exporting the same product to a different, or more receptive market may yield you more returns in the future.'},
            {
                text: 'Opposite to this situation may also take place where the importing country might not need the product or they may start producing the product and hence no longer require you to export that product.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Under such circumstances, it becomes important that you understand the requirement of the situation and increase or decrease the flow of your exporting product.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Will your product be able to withstand these changes? Will your product help support your exporting business? ',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Answer to such questions becomes necessary when expanding your business to global levels.',
                sx: {fontWeight: 600, marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Product Profitability:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'As a businessman, the choice of product should be such that its potential must be financially rewarding. Identify the economic source of the product, arrange to stock the same at the lowest price possible and ensure that your target audience is willing to pay the export price.'},
            {
                text: 'A good way would be to check the graph of the product in various international market places over a time period. Figure out if it is susceptible to seasons of periodic trends. ',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Predict all the expanses related to the product such as cost, logistics, taxes, duties. Also, calculate the profit against the sale price.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Trade Regulations:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'Every market place is governed by its own unique regulations. It is important to be well aware of the rules and regulations of the country where your export product is going to end up. '},
            {
                text: 'While finding out the target market also try to look for rules your product will fall under. Make sure that your export product is not on the wrong side of the rules of that country. Find out the taxes and the heavy-duty the importing country is going to pay for your export product.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Knowing the target market’s trade relations with India, the exporting country can prove to be helpful.',
                sx: {fontWeight: 600, marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Competition:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'It is very difficult to deliver such a product in international market places where the export product faces no competition. Unless your product is unique there is a high chance that your product will face tough competition.'},
            {
                text: 'Under such circumstances, the USP of your product must be its quality and durability or must be available at a cheaper price than the competitor, or some combination of the above- mentioned reasons. ',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'Usually, a proper marketing strategy will take care of the situation but customizing your product is always a beneficial way.',
                sx: {fontWeight: 600, marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'All these factors will help you make a proper decision about the export product you want to select. It is very important that you select a product that will determine your long-lasting stability in international markets.',
                sx: {fontWeight: 600, marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Bonus:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {
                text: 'Make sure to promote your product as a unique product, even if the uniqueness is a small part of it.  ',
                sx: {fontWeight: 600,}
            },
            {
                text: 'Try to choose universal products. Products that are needed all around the world have a better chance at establishing a stable Export Business.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
        ]
    },
    {
        title: 'Warnings:',
        sx: {
            my: {lg: 5, md: 3, sm: 1},
            color: '#000000CC',
            fontSize: {md: '24px', sm: '20px', xs: '16px'},
            fontWeight: 600,
            lineHeight: {sm: '32px', xs: '28px'}
        },
        content: [
            {text: 'Avoid exaggeration about the quality of the product and try to be as honest as possible about the product.'},
            {
                text: 'Keep in mind the standard of quality. The standard for quality in exporting country may not be the same in importing country.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
            {
                text: 'This brings us to the end of this conversation. Have you enjoyed reading out Blog? Share your views in the comments.',
                sx: {marginTop: {md: 5, xs: 3}}
            },
        ]
    },
];

const ProductionBlogText = () => {
    const {blogId} = useParams()
    const [loading, setLoading] = useState(true);
    const [singleBlog, setSingleBlog] = useState(null);
    const [error, setError] = useState(null);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`https://shreeji-be.onrender.com/api/blog/${blogId}`);

            console.log('API Response:', response.data);


            setSingleBlog({...response.data.data,description: JSON.parse(response.data.data.description)});

        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchBlog();
    }, [blogId]);

    console.log("sasas : ", singleBlog);
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
        <>
            <Box sx={{mt: {md: 12, xs: 5}}}>
                <Container>
                    <Box sx={{ position: 'relative' }}>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                                    <Typography component={'img'} src={Lines} width={'8%'} sx={{ mr: 1 }}></Typography>
                                    Our Products
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                                <Typography component={'img'} src={singleBlog.thumbnail_image} width={{ sm: '80%', xs: '100%' }}></Typography>
                                <Typography sx={{
                                    position: 'absolute',
                                    bottom: '5%',
                                    width: '80%',
                                    backgroundColor: '#fff',
                                    boxShadow: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#555555',
                                    fontSize: { lg: '25px', md: '26px', sm: '18px', xs: '14px' },
                                    fontWeight: 600,
                                    p: 2,
                                    left: { sm: '5%', xs: '-3%' }
                                }}>
                                    {singleBlog.heading}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ position: 'absolute', top: '-10%', left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
                            <Typography component={'img'} src={box} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
                        </Box>
                    </Box>
                    <Box sx={{color: '#000000B2'}}>
                        <Box sx={{mt:3}}>
                            <Typography sx={{fontSize: {md: '18px', sm: '18px', xs: '14px'}, lineHeight: '32px'}}>
                                {singleBlog.description.introText}
                            </Typography>
                            {/*<Typography*/}
                            {/*    sx={{mt: 5, fontSize: {md: '22px', sm: '18px', xs: '14px'}, lineHeight: '32px'}}>*/}
                            {/*    {singleBlog.description.exportInfo}*/}
                            {/*</Typography>*/}
                        </Box>
                        <Box sx={{mt: 5}}>
                            <Typography variant='h3' sx={{
                                fontSize: {md: '22px', sm: '18px', xs: '14px'},
                                fontWeight: 600,
                                lineHeight: '32px'
                            }}>
                                {singleBlog.description.exportInfo}
                            </Typography>

                            <List sx={{
                                listStyleType: 'decimal',
                                color: '#00000099',
                                my: {lg: 5, md: 3, sm: 1},
                                mx: {sm: 10},
                                ml: {sm: 10, xs: 3},
                                '& li': {fontSize: {md: '24px', sm: '20px', xs: '16px'}}
                            }} component="ol">
                                {singleBlog.description.exportedGoods.map((good, index) => (
                                    <ListItem key={index} sx={{display: 'list-item'}}>
                                        <Typography variant="body1" sx={{
                                            fontSize: {md: '19px', sm: '18px', xs: '14px'},
                                            lineHeight: '32px'
                                        }}>
                                            {good}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box>
                            {/*<Typography variant='h3' sx={{*/}
                            {/*    fontSize: {md: '22px', sm: '18px', xs: '14px'},*/}
                            {/*    fontWeight: 600,*/}
                            {/*    lineHeight: {sm: '32px', xs: '28px'}*/}
                            {/*}}>*/}
                            {/*    Lets now get straight to the steps you need to follow to find a Perfect Export Product:*/}
                            {/*</Typography>*/}

                            <Box>
                                {singleBlog.description.sections.map((item, sectionIndex) => (
                                    <Box key={sectionIndex} sx={{my:3}}>
                                        <List sx={{listStyleType: 'disc', pl: 4}}>
                                            <ListItem sx={{display: 'list-item', pl: '0'}}>
                                                <Typography variant={"h6"} sx={{fontWeight:"bold"}} >
                                                    {item.heading}
                                                </Typography>
                                            </ListItem>
                                        </List>

                                        {/*{singleBlog.description.sections.map((item, contentIndex) => (*/}
                                            <Typography
                                                sx={{
                                                    mt: item.sx?.marginTop || 0,
                                                    fontSize: {md: '16px', sm: '18px', xs: '14px'},
                                                    lineHeight: {sm: '32px', xs: '28px'},
                                                    // fontWeight: item.sx?.fontWeight || 500,
                                                    whiteSpace: item.sx?.whiteSpace || 'normal'
                                                }}
                                            >
                                                {item.content}
                                            </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box>
                                <Typography component={'a'} sx={{
                                    // fontSize: {md: '22px', sm: '18px', xs: '14px'},
                                    lineHeight: {sm: '32px', xs: '28px'},
                                    fontWeight: 600,
                                    marginTop: {md: 5, xs: 3},
                                    display: 'block',
                                    color: '#1966BA'
                                }}>
                                    https://Lunex.com/blog/
                                </Typography>
                                <Typography sx={{
                                    fontSize: {md: '22px', sm: '18px', xs: '14px'},
                                    lineHeight: {sm: '32px', xs: '28px'},
                                    fontWeight: 600,
                                    marginTop: {md: 3, xs: 3},
                                    display: 'block'
                                }}>
                                    Visit our page and let us know how do like us!
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default ProductionBlogText
