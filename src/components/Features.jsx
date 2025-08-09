import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import theme from "../theme.js";

const features = [
    {
        icon: "/src/assets/react.svg", // ✅ مسیر صحیح برای public folder
        title: "توسعه سریع",
        description:
            "سینتا با ایجاد محیط گرافیکی، امکان طراحی و تولید خودکار سیستم نهایی را با استفاده از تکنولوژی‌های کم‌کد فراهم نموده است.",
    },
    {
        icon: "/src/assets/react.svg",
        title: "به‌روز رسانی فرآیندها",
        description:
            "شما در سینتا می‌توانید پروژه‌های پیشین خود را باز طراحی نموده و حتی از فرآیندهای آماده شده دیگران استفاده نمایید.",
    },
    {
        icon: "/src/assets/react.svg",
        title: "استقرار خودکار",
        description:
            "سینتا با دکلایز کردن پروژه، از استقرار و انتشار خودکار سیستم خروجی بر بستر ابری پشتیبانی می‌کند.",
    },
    {
        icon: "/src/assets/react.svg",
        title: "امنیت اطلاعات",
        description:
            "سینتا انواع اطلاعات مورد نیاز سازمان را در محیطی امن و به صورت کدگذاری شده ذخیره‌سازی می‌کند.",
    },
];

const FeaturesSection = () => {
    return (
        <Box className={"w-screen"}
             dir="rtl"
             sx={{
                 background: 'linear-gradient(to bottom, #ffffff, #f3e8ff)',
                 py: 8,
                 px: {xs: 2, md: 3},
                 overflowX: 'hidden',
                 display: 'flex',
                 justifyContent: 'center',
             }}
        >
            <Box
                sx={{
                    maxWidth: '1280px',
                }}
            >

                <Box sx={{mb: 10, display: 'flex', justifyContent: 'center'}}>
                    <Box
                        sx={{
                            width: {xs: '100%', md: '60%'},
                            borderRadius: 2,
                            boxShadow: 3,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src="/src/assets/react.svg"
                            alt="پیش‌نمایش سیستم"
                            sx={{width: '100%', height: 'auto', display: 'block'}}
                        />
                    </Box>
                </Box>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                    color={theme.palette.text.primary}
                >
                    <Box component="span" color={theme.palette.primary.main}>
                        ویژگی‌ها
                    </Box>{" "}
                    ما را متفاوت می‌کند.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        mt: 4,
                    }}>
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            elevation={3}
                            sx={{
                                borderRadius: 4,
                                width: 280,
                                textAlign: {
                                    md: 'right',
                                    xs: 'center'
                                },
                                justifyContent: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: {
                                    xs: 'center',
                                    md: 'flex-start'
                                },
                                p: 2,
                                boxSizing: 'border-box',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={feature.icon}
                                alt={feature.title}
                                sx={{width: 48, height: 48, mt: 2, mb: 2,}}
                            />
                            <CardContent sx={{p: 0}}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color={theme.palette.text.primary}
                                    gutterBottom
                                >
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FeaturesSection;
