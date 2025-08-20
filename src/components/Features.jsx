import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CircularProgress, useTheme,
} from "@mui/material";
import { useFeaturesData } from "../api/features.js"

const FeaturesSection = ({ id  }) => {
    const { data, isLoading, isError, error } = useFeaturesData(id);
    const theme = useTheme();

    if (isLoading) {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    py: 8,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    py: 8,
                }}
            >
                <Typography color="error">
                    خطا در بارگذاری داده‌ها: {error.message}
                </Typography>
            </Box>
        );
    }

    const features = data?.features || [];

    return (
        <Box
            className={"w-screen"}
            dir="rtl"
            sx={{
                // background: "linear-gradient(to bottom, #ffffff, #f3e8ff)",
                backgroundColor: theme.palette.background.paper,
                py: 8,
                px: { xs: 2, md: 3 },
                overflowX: "hidden",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1280px",
                }}
            >
                <Box sx={{ mb: 10, display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: { xs: "100%", md: "60%" },
                            borderRadius: 2,
                            boxShadow: 3,
                            overflow: "hidden",
                            animation: 'floatUpDown 3s ease-in-out infinite',
                            animationDelay: `${0.1}s`,
                            '@keyframes floatUpDown': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-20px)' },
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src={data?.image || "/src/assets/react.svg"}
                            alt="پیش‌نمایش سیستم"
                            sx={{ width: "100%", height: "auto", display: "block" }}
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
                        {data?.highlighted_title || "ویژگی‌ها"}
                    </Box>{" "}
                    {data?.title || "ما را متفاوت می‌کند."}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 3,
                        mt: 4,
                    }}
                >
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            elevation={3}
                            sx={{
                                backgroundColor:theme.palette.primary.light,
                                borderRadius: 4,
                                width: 280,
                                textAlign: { md: "right", xs: "center" },
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                p: 2,
                                boxSizing: "border-box",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: 6,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={feature.icon}
                                alt={feature.title}
                                sx={{ width: 48, height: 48, mt: 2, mb: 2 }}
                            />
                            <CardContent sx={{ p: 0 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color={theme.palette.primary.main}
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
