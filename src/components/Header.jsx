import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {Tabs, Tab} from "@mui/material";
import CustomButton from "./CustomButton.jsx";
import CustomTab from "./CustomTab.jsx";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const theme1 = useTheme();
    const isDesktop = useMediaQuery(theme1.breakpoints.up('md'));

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        {name: 'خانه', href: '#'},
        {name: 'ویژگی‌ها', href: '#'},
        {name: 'نحوه کار', href: '#'},
        {name: 'بلاگ', href: '#'},
        {name: 'ارتباط با ما', href: '#'},
    ];

    const ctaButtons = [
        {label: 'شروع کنید', onClick: () => console.log('شروع!')},
        {label: 'ورود', onClick: () => console.log('ورود')},
        {label: 'ثبت‌نام', onClick: () => console.log('ثبت‌نام')},
    ];


    return (
        <AppBar position="static" sx={{backgroundColor: 'white', boxShadow: 3}}>
            <Toolbar sx={{justifyContent: 'space-between', width: '100%', maxWidth: 'lg', mx: 'auto'}} dir="rtl">
                {/* Logo */}
                <Box sx={{flexShrink: 0}}>
                    <img src="https://via.placeholder.com/100x40/5A67D8/FFFFFF?text=SYNTA" alt="SYNTA Logo"
                         style={{height: 40}}/>
                </Box>

                {/* Desktop Header */}
                {isDesktop ? (
                    <Box sx={{direction: 'rtl', display: 'flex', alignItems: 'center'}}>
                        <CustomTab
                        >
                            {navLinks.map((link) =>
                                <Tab
                                    key={link.name}
                                    label={link.name}
                                    value={link.href}
                                    component="a"
                                    href={link.href}
                                />
                            )}
                        </CustomTab>
                    </Box>
                ) : null}

                {/* Call to Action Button - Desktop */}
                {isDesktop && (
                    <Box className={"flex gap-5 "}>
                        {ctaButtons.map((btn, index) => (
                            <CustomButton
                                key={index}
                                onClick={btn.onClick}
                                bgColor={'primary.main'}
                            >
                                {btn.label}
                            </CustomButton>
                        ))}
                    </Box>
                )}

                {/* Mobile menu button (Hamburger Icon) */}
                {!isDesktop ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMobileMenu} // Use the new toggle function
                        sx={{color: 'text.secondary'}}
                    >
                        <MenuIcon/>
                    </IconButton>
                ) : null}
            </Toolbar>

            {/* Mobile Menu */}
            <div
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 mt-0 py-2`}
                dir="rtl">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {link.name}
                    </a>
                ))
                }
                <div className="px-4 py-2 mt-2">
                    <Box className="grid gap-2">
                        {ctaButtons.map((btn, index) => (
                            <Button
                                key={index}
                                variant="contained"
                                onClick={btn.onClick}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                    color: 'white',
                                    fontWeight: 'bold',
                                    py: 1,
                                    px: 3,
                                    borderRadius: '8px',
                                    boxShadow: 3,
                                    textTransform: 'none',
                                }}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </Box>
                </div>
            </div>
        </AppBar>
    );
};

export default Header;