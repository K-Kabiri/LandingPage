import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Box, Typography, Paper, useTheme, CircularProgress } from "@mui/material";
import { useCompaniesData } from "../api/companies.js";

export default function Companies({ id  }) {
    console.log(id);
    const theme = useTheme();
    const { data, isLoading, isError, error } = useCompaniesData(id);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobileOrTablet = windowWidth < 1024;
    const isSwiperActive = isMobileOrTablet || (data?.companies?.length > 5);

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

    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography color="error">خطا در بارگذاری اطلاعات</Typography>;

    let images = data?.companies?.map((c) => c.company_image) || [];

    if (images.length > 5) {
        images = [...images, ...images];
    }

    return (
        <Box
            dir="rtl"
            className="overflow-x-hidden w-screen"
            sx={{
                // background: "linear-gradient(to bottom, #FFE8F5, #ffffff)",
                backgroundColor: theme.palette.background.paper,
                py: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1280px",
                    px: { xs: 4, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    overflow: "hidden",
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        {data?.title}{" "}
                        <Box component="span" color={theme.palette.primary.main}>
                            {data?.subtitle}
                        </Box>{" "}
                    </Typography>
                    <Typography color="text.secondary" fontSize="1.1rem">
                        {data?.description}
                    </Typography>
                </Box>

                <Box sx={{ width: "100%", overflow: "hidden", height: cardSize.height + 60 }}>
                    {isSwiperActive ? (
                        <Swiper
                            modules={[Autoplay]}
                            loop
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            grabCursor={true}
                            centeredSlides={true}
                            centerInsufficientSlides={true}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 10,centeredSlides:true},     // موبایل کوچک
                                480: { slidesPerView: 2, spaceBetween: 10,centeredSlides:true },   // موبایل بزرگ
                                768: { slidesPerView: 2, spaceBetween: 10,centeredSlides:true },   // تبلت
                                1024: { slidesPerView: 5, spaceBetween: 20,centeredSlides:true },  // لپ‌تاپ و دسکتاپ
                            }}
                            style={{ overflow: "visible" }}
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
                                        className="company-card"
                                    >
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`company-${idx}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                borderRadius: 2,
                                                transition: "filter 0.5s ease",
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
                                        alt={`company-${idx}`}
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
          .swiper-slide-active .company-card img {
            filter: none !important;
          }
          .company-card img {
            filter: grayscale(100%);
          }
        `}
            </style>
        </Box>
    );
}
