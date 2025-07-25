import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {Tab} from "@mui/material";
import CustomButton from "./CustomButton.jsx";
import CustomTab from "./CustomTab.jsx";
import {useHeaderData} from "../api/header.js";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // header id ???
    const {data, isLoading, error} = useHeaderData(1);
    console.log(data);

    const theme1 = useTheme();
    const isDesktop = useMediaQuery(theme1.breakpoints.up('md'));

    if (isLoading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>خطا در دریافت داده‌ها</div>;

    const navLinks = data?.tabs || [];
    const ctaButtons = data?.buttons || [];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: 'white', padding: '1rem'}}>
            <Toolbar sx={{justifyContent: 'space-between', width: '100%', maxWidth: 'lg', mx: 'auto'}} dir="rtl">
                <Box sx={{flexShrink: 0}}>
                    <img src={data?.icon_image} alt="Logo" style={{height: 40}}/>
                </Box>

                {isDesktop ? (
                    <Box sx={{direction: 'rtl', display: 'flex', alignItems: 'center'}}>
                        <CustomTab >
                            {navLinks.map((link) =>
                                <Tab
                                    key={link.id}
                                    label={link.label}
                                    value={link.link}
                                    component="a"
                                    href={link.link || '#'}
                                />
                            )}
                        </CustomTab>
                    </Box>
                ) : null}

                {isDesktop && (
                    <Box className={"flex gap-5 "}>
                        {ctaButtons.map((btn) => (
                            <CustomButton
                                key={btn.id}
                                onClick={() => window.open(btn.link, '_blank')}
                                bgColor={'primary.main'}
                            >
                                {btn.label}
                            </CustomButton>
                        ))}
                    </Box>
                )}
                {/*Mobile Menu Icon*/}
                {!isDesktop ? (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMobileMenu}
                        sx={{color: 'text.primary'}}
                    >
                        <MenuIcon/>
                    </IconButton>
                ) : null}
            </Toolbar>

            {/* Mobile Menu*/}
            <div
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 mt-0 py-2`}
                dir="rtl">
                {navLinks.map((link) => (
                    <a key={link.id} href={link.link || '#'}
                       className="block px-4 py-2 text-gray-700 hover:bg-purple-800">
                        {link.label}
                    </a>
                ))}
                <div className="px-4 py-2 mt-2">
                    <Box className="grid gap-2">
                        {ctaButtons.map((btn) => (
                            <CustomButton
                                key={btn.id}
                                variant="contained"
                                onClick={() => window.open(btn.link, '_blank')}
                                bgColor={'primary.main'}
                                textColor="white"
                                py={1}
                                px={3}
                                borderRadius={4}
                            >
                                {btn.label}
                            </CustomButton>
                        ))}
                    </Box>
                </div>
            </div>
        </AppBar>
    );
};

export default Header;