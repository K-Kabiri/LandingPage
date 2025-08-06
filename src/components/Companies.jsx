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
    "/src/assets/react.svg",
    "/vite.svg",
    "/src/assets/react.svg",
    "/vite.svg",
    "/src/assets/react.svg",
];

export default function Companies() {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const [centerIndex, setCenterIndex] = useState(0);

    const isSwiperActive = images.length > 5;

    const getCardSize = (width) => {
        if (width < 480) return { width: 280, height: 100 };
        if (width < 768) return { width: 320, height: 100 };
        if (width < 1024) return { width: 350, height: 100 };
        return { width: 200, height: 100 };
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
                background: 'linear-gradient(to bottom, #FFE8F5, #ffffff)',
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
                        مورد اعتماد{" "}
                        <Box component="span" color={theme.palette.primary.main}>
                            ۱۵+
                        </Box>{" "}
                        شرکت
                    </Typography>
                    <Typography color="text.secondary" fontSize="1.1rem">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        چاپگرها و متون بلکه روزنامه با استفاده از طراحان گرافیک است.
                    </Typography>
                </Box>

                {/* Logos */}
                <Box sx={{ width: "100%", overflow: "hidden", height: cardSize.height + 60 }}>
                    {isSwiperActive ? (
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            slidesPerView={1}
                            spaceBetween={16}
                            grabCursor={true}
                            onSlideChange={(swiper) => {
                                const visibleSlides = swiper.params.slidesPerView;
                                const center =
                                    (swiper.realIndex + Math.floor(visibleSlides / 2)) % images.length;
                                setActiveIndex(swiper.realIndex);
                                setCenterIndex(center);
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 2 },
                                480: { slidesPerView: 3, spaceBetween: 3 },
                                768: { slidesPerView: 3, spaceBetween: 3 },
                                1024: { slidesPerView: 5, spaceBetween: 10 },
                            }}
                            style={{ overflow: "visible" }}
                        >
                            {images.map((src, idx) => {
                                const isCenterSlide = idx === centerIndex;

                                return (
                                    <SwiperSlide
                                        key={idx}
                                        style={{
                                            zIndex: isCenterSlide ? 2 : 1,
                                            position: "relative",
                                            transition: "transform 0.5s ease",
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
                                                    filter: isCenterSlide
                                                        ? "none"
                                                        : "grayscale(100%)",
                                                    transition: "filter 0.5s ease",
                                                }}
                                            />
                                        </Paper>
                                    </SwiperSlide>
                                );
                            })}
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
                                            filter: "grayscale(100%)",
                                        }}
                                    />
                                </Paper>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
