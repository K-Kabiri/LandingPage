import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography} from "@mui/material";
import theme from "../js/theme.js";

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
    //
    return (
        <Box
            dir="rtl"
            className="bg-gradient-to-b from-white to-orange-100 items-center"
            sx={{
                px: {md: 16, xs: 2},
                py: 8,
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                gap: 5,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    textAlign: {xs: 'center', md: 'right'},
                    width: '100%',
                    px:{md:8},
                    maxWidth: {xs: '100%', md: '50%'},
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color={theme.palette.text.primary}
                    sx={{
                        mb: 2, justifyContent: {xs: 'center', md: 'flex-start'},
                    }}
                >
                    طراحی زیبا همراه<span style={{color: theme.palette.text.secondary}}> طراحی رابط کاربری مدرن</span>
                </Typography>

                <Typography
                    color={theme.palette.text.primary}
                    lineHeight={2}
                    sx={{ px: 2  ,justifyContent:{ xs: 'center', md: 'flex-start', width: {xs:'100%' , md:'90%'}},}}
                >
                    هدف این طرح کمک به صاحبان کسب‌وکار و متخصصان فناوری اطلاعات است تا بدون نیاز به کدنویسی، برنامه‌های
                    تجاری خود را به‌سرعت پیاده‌سازی کنند.
                </Typography>

                <div className="space-y-6 mt-6">
                    {features.map((item, idx) => (
                        <div key={idx} className="flex items-center md:items-start gap-3">
                            <CheckCircleIcon className=" mt-1" sx={{color: theme.palette.text.secondary}} />
                            <div>
                                <Typography variant="subtitle1" className="font-semibold" sx={{color: theme.palette.text.secondary}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    {item.desc}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    maxWidth: {xs: '100%', md: '50%'},
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                <Box
                    component="img"
                    src="/public/vite.svg"
                    alt="main"
                    sx={{
                        width: {xs: '100%', sm: 300, md: 400},
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
                        top: {xs: 15, md: 15},
                        left: {xs: 2, md: 0},
                        width: {xs: 100, md: 120},
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
                        top: {xs: 100, md: 125},
                        left: {xs: 5, md: 30},
                        width: {xs: 140, md: 200},
                        borderRadius: 2,
                        boxShadow: 4,
                        border: '1px solid #e0e0e0',
                    }}
                />
            </Box>
        </Box>

    );
};

export default ModernDesign;
