import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Box, Typography, CircularProgress, useTheme} from "@mui/material";
import { useModerDesignData } from "../api/modernDesign.js";

const ModernDesign = ({ id  }) => {
    const { data, isLoading, isError, error } = useModerDesignData(id);
    const theme = useTheme();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" py={10}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Box display="flex" justifyContent="center" py={10} color="red">
                خطا در دریافت داده‌ها: {error.message}
            </Box>
        );
    }

    const { title, subtitle, description, advantages, images } = data;

    const overlayStyles = [
        {
            top: { xs: 120, md: 70 },
            right: { xs: 280, md: 500 },
            width: { xs: 100, md: 150 },
            height: { xs: 100, md: 150 },
            borderRadius: "50%",
        },
        {
            top: { xs: 200, md: 200 },
            right: { xs: 250, md: 450 },
            width: { xs: 120, md: 200 },
            height: { xs: 120, md: 200 },
            borderRadius: 2,
            boxShadow: 2,
            border: "1px solid #e0e0e0",
        },
    ];

    return (
        <Box
            dir="rtl"
            className="overflow-x-hidden w-screen"
            sx={{
                // background: "linear-gradient(to bottom, #ffffff, #FFEDD5)",
                backgroundColor: theme.palette.background.paper,
                py: 10,
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    px: { xs: 2, md: 4 },
                    gap: 5,
                    width: "100%",
                    maxWidth: "1280px",
                }}
            >
                {/* Right Section  */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "right" },
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={theme.palette.text.primary}
                        sx={{ mb: 2 }}
                    >
                        {title}{" "}
                        <Box component="span" color={theme.palette.primary.main}>
                            {subtitle}
                        </Box>
                    </Typography>

                    <Typography
                        color={theme.palette.text.primary}
                        lineHeight={2}
                        sx={{ maxWidth: "100%", mx: { xs: "auto", md: 0 } }}
                    >
                        {description}
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        {advantages?.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: { md: "flex-start", xs: "center" },
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <CheckCircleIcon
                                    sx={{ color: theme.palette.primary.main, mt: "4px" }}
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
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Left Section */}
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        animation: 'floatUpDown 3s ease-in-out infinite',
                        animationDelay: `${0.1}s`,
                        '@keyframes floatUpDown': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }}
                >
                    {images?.length > 0 && (
                        <>
                            <Box
                                component="img"
                                src={images[0].image}
                                alt="main"
                                sx={{
                                    width: { xs: "100%", sm: 400, md: 500 },
                                    borderRadius: 2,
                                    objectFit: "cover",
                                }}
                            />

                            {images.slice(1).map((img, idx) => (
                                <Box
                                    key={img.id}
                                    sx={{
                                        position: "absolute",
                                        ...overlayStyles[idx],
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={img.image}
                                        alt={`overlay-${idx + 1}`}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                            ))}
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ModernDesign;
