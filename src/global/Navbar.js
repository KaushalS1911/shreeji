import {Box, Container, Grid, MenuItem, Select, Typography, Drawer, IconButton, Collapse} from '@mui/material';
import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../assets/images/global/Logo.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import line from '../assets/images/global/navLines.png';
import BookIcon from '@mui/icons-material/Book';
import CollectionsIcon from '@mui/icons-material/Collections';
import navLogo from '../assets/images/global/navLogo.png'
import {countries} from "../countries";



const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState('IN');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const isActiveRoute = (routes) => {
        if (!Array.isArray(routes)) {
            routes = [routes];
        }
        const currentPath = window.location.pathname;
        return routes.some(route => route === '/' ? currentPath === route : currentPath.startsWith(route));
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleSubmenuToggle = (submenu) => {
        setOpenSubmenu(openSubmenu === submenu ? null : submenu);
    };

    const closeSubmenuAndNavigate = (path) => {
        setOpenSubmenu(null);
        console.log("PATH : ",path)
        navigate(path);
    };

    const closeSidebarAndNavigate = (path) => {
        setSidebarOpen(false);
        navigate(path);
    };

    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={{backgroundColor: '#294462'}}>
                <Container>
                    <Box sx={{p: 1.5, color: '#fff'}}>
                        <Grid container alignItems="center"
                              sx={{display: "flex", justifyContent: {sm: 'space-between', xs: 'center'}}}>
                            <Grid item sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{display: 'flex', gap: 1}}>
                                    <EmailIcon/>
                                    <Typography>export@lunexinternational.com</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{
                                display: {sm: 'flex', xs: 'none'},
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: 3
                            }}>
                                <Grid item>
                                    <Box sx={{display: 'flex'}}>
                                        <Typography component={'a'}
                                                    href='https://www.facebook.com/people/Lunex-Internatinal/100044373251632/'>
                                            <TwitterIcon sx={{
                                                mr: 1,
                                                backgroundColor: '#fff',
                                                color: '#294462',
                                                borderRadius: '5px',
                                                fontSize: '20px',
                                                p: 0.5
                                            }}/>
                                        </Typography>
                                        <Typography component={'a'}
                                                    href='https://www.instagram.com/lunex_international?igsh=aDRybjJpenNnc2hu'>
                                            <InstagramIcon sx={{
                                                mr: 1,
                                                backgroundColor: '#fff',
                                                color: '#294462',
                                                borderRadius: '5px',
                                                fontSize: '20px',
                                                p: 0.5
                                            }}/>
                                        </Typography>
                                        <Typography component={'a'}
                                                    href='https://www.facebook.com/people/Lunex-Internatinal/100044373251632/'>
                                            <LinkedInIcon sx={{
                                                mr: 1,
                                                backgroundColor: '#fff',
                                                color: '#294462',
                                                borderRadius: '5px',
                                                fontSize: '20px',
                                                p: 0.5
                                            }}/>
                                        </Typography>
                                        <Typography component={'a'}
                                                    href='https://www.facebook.com/people/Lunex-Internatinal/100044373251632/'>
                                            <FacebookIcon sx={{
                                                mr: 1,
                                                backgroundColor: '#fff',
                                                color: '#294462',
                                                borderRadius: '5px',
                                                fontSize: '20px',
                                                p: 0.5
                                            }}/>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Box>
                                    <Select
                                        labelId="country-label"
                                        id="country-select"
                                        value={selectedValue}
                                        onChange={handleChange}
                                        sx={{
                                            color: '#fff',
                                            '.MuiOutlinedInput-notchedOutline': {
                                                border: '2px solid #fff',
                                                borderRadius: '10px'
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '2px solid #fff',
                                                borderRadius: '10px'
                                            },
                                            '.MuiSvgIcon-root': {
                                                color: '#fff',
                                            },
                                            '.MuiSelect-select': {
                                                p: 1,
                                            }
                                        }}
                                    >
                                        {countries.map((country) => (
                                            <MenuItem key={country.code} value={country.code}>
                                                <Typography
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '150px',
                                                    }}
                                                >
                                                    <Typography component={'img'}
                                                                src={country.flag}
                                                                alt={country.name}
                                                                sx={{width: 25, height: 25, mr: 1}}
                                                    />
                                                    {country.name}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{backgroundColor: '#fff', py: {sm: 0, xs: 1}}}>
                <Container>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box>
                                <Box sx={{display: "flex", height: "100%"}}
                                     width={{xl: "116px", lg: "100px", sm: "90px"}}>
                                    <Typography component={'img'} onClick={() => navigate('/')} src={navLogo} alt="logo"
                                                sx={{cursor: 'pointer', width: {sm: '100%', xs: '50%'}}}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display: {sm: 'flex', xs: 'none'}, justifyContent: 'center', alignItems: "center"}}>
                            <MenuItem
                                onClick={() => navigate('/')}
                                sx={getItemStyles(isActiveRoute('/'))}
                            >
                                <Typography className='lines' component={'img'} src={line}
                                            sx={{display: 'none', mr: 1}}></Typography>
                                <Typography className='navItem'>Home</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/about')}
                                sx={getItemStyles(isActiveRoute('/about'))}
                            >
                                <Typography className='lines' component={'img'} src={line}
                                            sx={{display: 'none', mr: 1}}></Typography>
                                <Typography className='navItem'>About Us</Typography>
                            </MenuItem>
                            <MenuItem
                                onMouseEnter={() => handleSubmenuToggle('products')}
                                onMouseLeave={() => handleSubmenuToggle('products')}
                                sx={getItemStyles(isActiveRoute(['/ourProducts', '/ourPrdFruits', '/ourPrdGrains', '/ourPrdSpices']))}
                            >
                                <Typography className='lines' component={'img'} src={line} sx={{display: 'none', mr: 1}} />
                                <Typography className='navItem' onClick={() => closeSubmenuAndNavigate('/ourProducts')}>Our Products</Typography>
                                {openSubmenu === 'products' && (
                                    <Box sx={{
                                        position: 'absolute',
                                        p: 2,
                                        top: '100%',
                                        left: '0.5%',
                                        zIndex: 111,
                                        backgroundColor: '#fff',
                                        boxShadow: 2
                                    }}>
                                        <MenuItem style={{fontSize: '14px'}}
                                                  onClick={() => closeSubmenuAndNavigate('/ourPrdFruits')}
                                                  sx={getSubmenuItemStyles(isActiveRoute('/ourPrdFruits'))}>
                                            <Typography component={'img'} src={line}
                                                        sx={{mr: 1, width: '10px'}}></Typography>
                                            Fruits
                                        </MenuItem>
                                        <MenuItem style={{fontSize: '14px'}}
                                                  onClick={() => closeSubmenuAndNavigate('/ourPrdGrains')}
                                                  sx={getSubmenuItemStyles(isActiveRoute('/ourPrdGrains'))}>
                                            <Typography component={'img'} src={line}
                                                        sx={{mr: 1, width: '10px'}}></Typography>
                                            Grains
                                        </MenuItem>
                                        <MenuItem style={{fontSize: '14px'}}
                                                  onClick={() => closeSubmenuAndNavigate('/ourPrdSpices')}
                                                  sx={getSubmenuItemStyles(isActiveRoute('/ourPrdSpices'))}>
                                            <Typography component={'img'} src={line}
                                                        sx={{mr: 1, width: '10px'}}></Typography>
                                            Spices
                                        </MenuItem>
                                    </Box>
                                )}
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/blog')}
                                sx={getItemStyles(isActiveRoute('/blog'))}
                            >
                                <Typography className='lines' component={'img'} src={line}
                                            sx={{display: 'none', mr: 1}}></Typography>
                                <Typography className='navItem'>Blog</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/gallery')}
                                sx={getItemStyles(isActiveRoute('/gallery'))}
                            >
                                <Typography className='lines' component={'img'} src={line}
                                            sx={{display: 'none', mr: 1}}></Typography>
                                <Typography className='navItem'>Gallery</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/contact')}
                                sx={getItemStyles(isActiveRoute('/contact'))}
                            >
                                <Typography className='lines' component={'img'} src={line}
                                            sx={{display: 'none', mr: 1}}></Typography>
                                <Typography className='navItem'>Contact Us</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display: {sm: 'none', xs: 'flex'}, justifyContent: 'end'}}>
                            <IconButton onClick={toggleSidebar} sx={{color: '#294462'}}>
                                <MenuIcon/>
                            </IconButton>
                        </Box>

                        <Drawer anchor='left' open={sidebarOpen} onClose={toggleSidebar}>
                            <Box sx={{width: 250, backgroundColor: '#294462', height: '100vh', color: '#fff'}}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', p: 2}}>
                                    <Typography component={'img'} src={Logo} sx={{width: '30%'}}></Typography>
                                    <IconButton onClick={toggleSidebar}>
                                        <CloseIcon sx={{color: '#fff'}}/>
                                    </IconButton>
                                </Box>
                                <Box sx={{px: 2}}>
                                    <MenuItem onClick={() => closeSidebarAndNavigate('/')}
                                              sx={getSidebarItemStyles(isActiveRoute('/'))}>
                                        <HomeIcon/>
                                        <Typography>Home</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => closeSidebarAndNavigate('/about')}
                                              sx={getSidebarItemStyles(isActiveRoute('/about'))}>
                                        <InfoIcon/>
                                        <Typography>About Us</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleSubmenuToggle('products')}
                                              sx={getSidebarItemStyles(isActiveRoute('/ourProducts'))}>
                                        <StorefrontIcon/>
                                        <Typography onClick={() => closeSidebarAndNavigate('/ourProducts')}>Our
                                            Products</Typography>
                                        <ExpandMoreIcon/>
                                    </MenuItem>
                                    <Collapse in={openSubmenu === 'products'}>
                                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdFruits')}
                                                  sx={getSidebarSubmenuItemStyles(isActiveRoute('/ourPrdFruits'))}>
                                            <ArrowRightIcon/>
                                            Fruits
                                        </MenuItem>
                                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdGrains')}
                                                  sx={getSidebarSubmenuItemStyles(isActiveRoute('/ourPrdGrains'))}>
                                            <ArrowRightIcon/>
                                            Grains
                                        </MenuItem>
                                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdSpices')}
                                                  sx={getSidebarSubmenuItemStyles(isActiveRoute('/ourPrdSpices'))}>
                                            <ArrowRightIcon/>
                                            Spices
                                        </MenuItem>
                                    </Collapse>
                                    <MenuItem onClick={() => closeSidebarAndNavigate('/blog')}
                                              sx={getSidebarItemStyles(isActiveRoute('/blog'))}>
                                        <BookIcon/>
                                        <Typography>Blog</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => closeSidebarAndNavigate('/gallery')}
                                              sx={getSidebarItemStyles(isActiveRoute('/gallery'))}>
                                        <CollectionsIcon/>
                                        <Typography>Gallery</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => closeSidebarAndNavigate('/contact')}
                                              sx={getSidebarItemStyles(isActiveRoute('/contact'))}>
                                        <ContactMailIcon/>
                                        <Typography>Contact Us</Typography>
                                    </MenuItem>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

const getItemStyles = (isActive) => ({
    position: 'relative',
    py: 2.5,
    px: {md: 3, sm: 1.5},
    color: '#A0A0A0',
    '&:hover': {
        color: '#19AED7',
    },
    '&:hover .lines': {
        display: 'block',
        transition: '0.5s',
    },
    '&:hover .navItem': {
        fontWeight: 600,
        transition: '0.5s',
    },
    ...(isActive && {
        color: '#19AED7',
        fontWeight: 600,
        '.lines': {
            display: 'block',
        },
        '.navItem': {
            fontWeight: 600
        },
    }),
});


const getSubmenuItemStyles = (isActive) => ({
    py: .5,
    px: 5,
    color: '#A0A0A0',
    '&:hover': {
        color: '#19AED7',
        fontWeight: 600,
    },
    ...(isActive && {
        color: '#19AED7',
        fontWeight: 600,
    })
});

const getSidebarItemStyles = (isActive) => ({
    px: 1,
    py: 1,
    '&:hover': {
        backgroundColor: '#19AED7',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    ...(isActive && {
        backgroundColor: '#19AED7',
    })
});

const getSidebarSubmenuItemStyles = (isActive) => ({
    p: 1,
    '&:hover': {
        backgroundColor: '#19AED7',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    ...(isActive && {
        backgroundColor: '#19AED7',
    })
});

export default Navbar;
