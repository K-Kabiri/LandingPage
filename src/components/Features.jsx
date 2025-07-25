import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";

const features = [
    {
        icon: "/vite.svg",
        title: "توسعه سریع",
        description:
            "سینتا با ایجاد محیط گرافیکی، امکان طراحی و تولید خودکار سیستم نهایی را با استفاده از تکنولوژی‌های کم‌کد فراهم نموده است.",
    },
    {
        icon: "/vite.svg",
        title: "به‌روز رسانی فرآیندها",
        description:
            "شما در سینتا می‌توانید پروژه‌های پیشین خود را باز طراحی نموده و حتی از فرآیندهای آماده شده دیگران استفاده نمایید.",
    },
    {
        icon: "/vite.svg",
        title: "استقرار خودکار",
        description:
            "سینتا با دکلایز کردن پروژه، از استقرار و انتشار خودکار سیستم خروجی بر بستر ابری پشتیبانی می‌کند.",
    },
    {
        icon: "/vite.svg",
        title: "امنیت اطلاعات",
        description:
            "سینتا انواع اطلاعات مورد نیاز سازمان را در محیطی امن و به صورت کدگذاری شده ذخیره‌سازی می‌کند.",
    },
];

const FeaturesSection = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, white, #f3e8ff)",
                py: 10,
                px: 2,
                textAlign: "center",
            }}
        >

            <Box sx={{mb: 6, display: "flex", justifyContent: "center"}}>
                <Box
                    component="img"
                    src="/src/assets/react.svg"
                    alt="پیش‌نمایش سیستم"
                    sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        maxWidth: "100%",
                        width: "60%",
                        maxHeight: 500,
                        objectFit: "cover",
                    }}
                />
            </Box>

            <Typography variant="h4" fontWeight="bold" color="black" gutterBottom dir="rtl">
                ویژگی‌ها <span style={{color: "#a855f7"}}>ما را متفاوت</span> می‌کند
            </Typography>

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                }}
                dir="rtl"
            >
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        sx={{
                            width: 280,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            p: 2,
                            borderRadius: 4,
                            textAlign: "right",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={feature.icon}
                            alt={feature.title}
                            sx={{width: 48, height: 48, mb: 2}}
                        />
                        <CardContent sx={{p: 0}}>
                            <Typography variant="h6" fontWeight="bold" color="black" gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{textAlign: "justify", lineHeight: 1.8}}
                            >
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default FeaturesSection;
