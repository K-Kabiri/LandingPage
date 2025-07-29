import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import theme from "../js/theme";

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
        <Box className={"bg-gradient-to-b from-white to-purple-100 py-10 text-center"} dir={"rtl"} sx={{px:2,mt:8,}}>

            <Box className="mb-10 flex justify-center h-100">
                <div className={"xs:w-full md:w-[60%] rounded-xl !shadow-lg"}>
                    <Box
                        component="img"
                        src="/src/assets/react.svg"
                        alt="پیش‌نمایش سیستم"
                        sx={{ width: '100%', height: '100%' }}
                    />
                </div>
            </Box>

            <Typography variant="h4" fontWeight="bold" gutterBottom dir="rtl"
                        className={`text-${theme.palette.text.primary}`}>
                <span style={{color: `${theme.palette.text.secondary}`}}>ویژگی‌ها</span> ما را متفاوت می‌کند.
            </Typography>


            <Box className=" flex flex-wrap justify-center gap-6">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        sx={{borderRadius: 4}}
                        className="w-70 flex flex-col items-start p-2 text-right !shadow-lg"
                    >
                        <CardMedia
                            component="img"
                            image={feature.icon}
                            alt={feature.title}
                            sx={{width: 48, height: 48, mt:2, mb:2}}

                        />
                        <CardContent className={"p-2"}>
                            <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary} gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{}}
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
