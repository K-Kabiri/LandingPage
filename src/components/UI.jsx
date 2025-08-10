import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Box, Typography, Paper, useTheme } from "@mui/material";

const images = [
    "/src/assets/react.svg",
    "/vite.svg",
    "/src/assets/react.svg",
    "/vite.svg",
    "/src/assets/react.svg",
    "/vite.svg",
    "/src/assets/react.svg",
];

export default function BeautifulInterfaceSection() {
    const theme = useTheme();

    const isSwiperActive = images.length > 3;

    const getCardSize = (width) => {
        if (width < 480) return { width: 280, height: 160 };
        if (width < 768) return { width: 320, height: 180 };
        if (width < 1024) return { width: 350, height: 200 };
        return { width: 350, height: 200 };
    };

    const [cardSize, setCardSize] = useState(getCardSize(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setCardSize(getCardSize(window.innerWidth));
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box
            dir="rtl"
            className="overflow-x-hidden w-screen"
            sx={{
                background: "linear-gradient(to bottom, #ffffff, #FFE8F5)",
                py: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1280px",
                    px: { xs: 2, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    overflow: "hidden",
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        رابط کاربری{" "}
                        <Box component="span" color={theme.palette.primary.main}>
                            زیبا
                        </Box>
                    </Typography>
                    <Typography color="text.secondary" fontSize="1.1rem">
                        ساده سازی امور پیچیده در تخصص ماست
                    </Typography>
                </Box>

                {/* Pictures */}
                <Box sx={{ width: "100%", overflow: "visible", height: cardSize.height + 60 }}>
                    {isSwiperActive ? (
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            grabCursor={true}
                            centeredSlides={true}
                            centerInsufficientSlides={true}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 0, centeredSlides: true },
                                480: { slidesPerView: 1, spaceBetween: 0, centeredSlides: true },
                                768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: true },
                                1024: { slidesPerView: 3, spaceBetween: 36, centeredSlides: true },
                            }}
                            style={{
                                overflow: "visible",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {images.map((src, idx) => (
                                <SwiperSlide
                                    key={idx}
                                    style={{
                                        position: "relative",
                                        transition: "transform 0.5s ease",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            height: cardSize.height,
                                            width: cardSize.width,
                                            borderRadius: 2,
                                            borderWidth: 1,
                                            borderColor: theme.palette.primary.main,
                                            overflow: "hidden",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            p: 1,
                                            transition: "transform 0.5s ease",
                                        }}
                                        className="interface-card"
                                    >
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`image-${idx}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                borderRadius: 2,
                                                transition: "transform 0.5s ease",
                                            }}
                                        />
                                    </Paper>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 3,
                                flexWrap: "wrap",
                            }}
                        >
                            {images.map((src, idx) => (
                                <Paper
                                    key={idx}
                                    elevation={3}
                                    sx={{
                                        height: cardSize.height,
                                        width: cardSize.width,
                                        borderRadius: 2,
                                        borderWidth: 1,
                                        borderColor: theme.palette.primary.main,
                                        overflow: "hidden",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 1,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`image-${idx}`}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            borderRadius: 2,
                                        }}
                                    />
                                </Paper>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>

            <style>
                {`
                .swiper-slide-active .interface-card {
                    transform: scale(1.1);
                }
                .interface-card {
                    transform: scale(1);
                }
                `}
            </style>
        </Box>
    );
}
