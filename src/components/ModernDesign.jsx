import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";
import theme from "../theme.js";

const ModernDesign = () => {
    const features = [
        {
            title: "رابط گرافیکی کاربر پسند",
            desc: "ساد‌ه‌سازی تست، مدیریت سیستم و رفع مشکلات برای تیم توسعه.",
        },
        {
            title: "مناسب برای انواع کسب‌وکارها",
            desc: "قابل سفارشی‌سازی برای انواع کسب‌وکارهای سنتی یا مدرن.",
        },
        {
            title: "انتشار خودکار",
            desc: "استقرار خودکار نرم‌افزار با فرآیند DevOps سریع و امن.",
        },
    ];

    return (
        <Box
            dir="rtl"
            className="overflow-x-hidden w-screen"
            sx={{
                background:'linear-gradient(to bottom, #ffffff, #FFEDD5)',
                py: 10,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    px: { xs: 2, md: 4 },
                    gap: 5,
                    width: '100%',
                    maxWidth: '1280px',
                }}
            >
                {/* Right Section */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: 'center', md: 'right' },
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={theme.palette.text.primary}
                        sx={{ mb: 2 }}
                    >
                        طراحی زیبا همراه{" "}
                        <Box component="span" color={theme.palette.primary.main}>
                            طراحی رابط کاربری مدرن
                        </Box>
                    </Typography>

                    <Typography
                        color={theme.palette.text.primary}
                        lineHeight={2}
                        sx={{ maxWidth: '100%', mx: { xs: 'auto', md: 0 } }}
                    >
                        هدف این طرح کمک به صاحبان کسب‌وکار و متخصصان فناوری اطلاعات است تا بدون نیاز به کدنویسی، برنامه‌های تجاری خود را به‌سرعت پیاده‌سازی کنند.
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        {features.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    flexDirection:{
                                        xs: 'column',
                                        md: 'row',},
                                    alignItems: {
                                        md: 'flex-start',
                                        xs:'center',
                                    },
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <CheckCircleIcon
                                    sx={{ color: theme.palette.primary.main, mt: '4px' }}
                                />
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                        color={theme.palette.primary.main}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Left Section  */}
                <Box
                    sx={{
                        flex: 1,
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="/vite.svg"
                        alt="main"
                        sx={{
                            width: { xs: '100%', sm: 300, md: 400 },
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />

                    <Box
                        component="img"
                        src="/src/assets/react.svg"
                        alt="overlay1"
                        sx={{
                            position: 'absolute',
                            top: { xs: 60, md: 15 },
                            left: { xs: 100, md: 0 },
                            width: { xs: 100, md: 120 },
                            borderRadius: 50,
                            boxShadow: 4,
                            border: '1px solid #e0e0e0',
                        }}
                    />

                    <Box
                        component="img"
                        src="/src/assets/react.svg"
                        alt="overlay2"
                        sx={{
                            position: 'absolute',
                            top: { xs: 150, md: 125 },
                            left: { xs: 100, md: 30 },
                            width: { xs: 140, md: 200 },
                            borderRadius: 2,
                            boxShadow: 4,
                            border: '1px solid #e0e0e0',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ModernDesign;
