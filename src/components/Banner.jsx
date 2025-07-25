import React from "react";
import theme from "../js/theme.js";
import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";
import CustomInput from "./CustomInput.jsx";



const Banner = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                px: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
            }}

        >
            <Box
                sx={{
                    maxWidth: 1280,
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 6,
                    py: 12,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Left Section */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 2,
                        width: { xs: "100%", md: "50%" },
                    }}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                height: 256,
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: 4, // مثل elevation
                            }}
                        >
                            <img
                                src={`/public/vite.svg`}
                                alt={`تصویر ${item}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </Box>
                    ))}
                </Box>


                {/* Right Section */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        textAlign: { xs: "center", md: "right" },
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="text.primary"
                        sx={{ lineHeight: 1.3 }}
                    >
                        بهترین راه مدیریت <br />
                        <Box component="span" color={theme.palette.primary.main}>
                            فرآیندهای شرکت شما
                        </Box>
                    </Typography>

                    <Typography variant="body1" color="#6B6B6B" width={"100%"}>
                        سیتینا با بهره‌گیری از تکنولوژی‌های توسعه کم‌کد، امکان ایجاد سریع
                        سیستم‌های مورد نیاز شرکت شما را بدون نیاز به دانش برنامه‌نویسی فراهم
                        آورده است.
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        alignItems="center"

                    >
                        <Button
                            variant="contained"
                            color="white"
                            sx={{ borderRadius: 3, px: 6, py: 2, backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }}
                        >
                            ارسال
                        </Button>
                        <CustomInput placeholder="ایمیل خود را وارد کنید" dir={"rtl"}/>

                    </Stack>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent={{ xs: "center", md: "flex-end" }}
                        alignItems="center"
                        color="#6B6B6B"
                        fontSize="0.875rem"

                    >
                        <span> رایگان ۱۴ روز✅</span>
                        <span> کارت اعتباری نیازی ندارد✅</span>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent={{ xs: "center", md: "flex-end" }}
                        alignItems="center"
                        pt={1}

                    >
                        <Typography variant="body2" color="text.primary" dir={"rtl"} width={"40%"}>
                            +۱۲۰ میلیون نفر در سراسر دنیا کاربران پلتفرم‌های کم‌کد
                        </Typography>
                        <Stack direction="row-reverse" spacing={-1}>
                            {[1, 2, 3, 5].map((img) => (
                                <Avatar
                                    key={img}
                                    alt={`user-${img}`}
                                    src={`https://i.pravatar.cc/40?img=${img}`}
                                    sx={{ border: "2px solid white", width: 45, height: 45 }}
                                />
                            ))}
                        </Stack>

                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
