import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {Tab,Link} from "@mui/material";
import CustomButton from "../components/common/CustomButton.jsx";
import CustomTab from "../components/common/CustomTab.jsx";
import {useHeaderData} from "../api/header.js";
import theme from "../theme.js";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const {data, isLoading, error} = useHeaderData(2);
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
        <AppBar
            className="sticky top-0"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                overflowX: "hidden",
                backdropFilter: "blur(10px)",
            }}
            dir="rtl"
        >
            <Toolbar
                sx={{
                    width: '100%',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    paddingX: { xs: 2, md: 4 },
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{flexShrink: 0}}>
                    <img src={data?.icon_image.url} alt="Logo" style={{height: 40}}/>
                </Box>

                {isDesktop && (
                    <Box className="flex items-center" dir="rtl">
                        <CustomTab>
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
                )}

                {isDesktop && (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                        }}
                    >
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

                {/* Mobile Menu Icon */}
                {!isDesktop && (
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
                )}
            </Toolbar>

            {/* Mobile Menu */}
            <Box
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} justify-center items-center bg-white border-t border-gray-200 py-2`}
                sx={{
                    paddingX: 2,
                    maxWidth: '1280px',
                    justifyContent: 'center',
                }}
                dir="rtl"
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.link || '#'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: theme.palette.primary.main,
                            '&:hover': {
                                color: theme.palette.primary.main,
                            },
                            textDecoration: 'none',
                            mt:2,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <div className={"border-t-gray-200 border-t-1 mt-5"}></div>
                <Box className="mt-5 flex flex-row gap-2 ">
                    {ctaButtons.map((btn) => (
                        <CustomButton
                            key={btn.id}
                            onClick={() => window.open(btn.link, '_blank')}
                            textColor="white"

                            borderRadius={4}
                        >
                            {btn.label}
                        </CustomButton>
                    ))}
                </Box>
            </Box>
        </AppBar>
    );
};

export default Header;
