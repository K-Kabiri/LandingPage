import React from "react";
import theme from "../theme.js";
import {
    Box,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";
import CustomInput from "../components/common/CustomInput.jsx";
import CustomButton from "../components/common/CustomButton.jsx";
import { useBannerData } from "../api/banner.js"; // مسیر رو بر اساس پروژه‌ت درست کن

const Banner = () => {
    const { data, isLoading, error } = useBannerData(1);

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت داده</p>;

    const { title, subtitle, description, notes, images, email_boxes, user_box } = data;

    return (
        <Box
            className="bg-white overflow-x-hidden w-screen"
            dir="rtl"
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row-reverse' },
                    gap: 10,
                    mt: 5,
                    py: 10,
                    px: { xs: 2, md: 4 },
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: { xs: 'center', md: 'right' },
                    width: '100%',
                    maxWidth: '1280px',
                }}
            >
                {/* Left Section - Images */}
                <Box
                    className={`grid gap-4 w-full md:w-[50%] ${
                        images.length === 1
                            ? 'grid-cols-1 place-items-center'
                            : images.length === 3
                                ? 'grid-cols-2 grid-rows-[auto_auto]'
                                : 'grid-cols-2'
                    }`}
                >
                    {images.map((item, index) => (
                        <Box
                            key={item.id}
                            className={`rounded-lg overflow-hidden shadow-md h-30${
                                images.length === 1
                                    ? 'w-3/4'
                                    : images.length === 3
                                        ? index === 2
                                            ? 'col-span-2 justify-self-center w-3/4'
                                            : ''
                                        : ''
                            }`}
                            sx={{height:300, width:250}}

                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain block"
                            />
                        </Box>
                    ))}
                </Box>

                {/* Right Section */}
                <Box className="w-full md:w-[50%] flex flex-col gap-4"
                     sx={{ textAlign: { xs: 'center', md: 'right' } }}
                >
                    <Typography variant="h3" fontWeight="bold" color="text.primary">
                        {title} <br />
                        <Box component="span" color={theme.palette.primary.main}>
                            {subtitle}
                        </Box>
                    </Typography>

                    <Typography variant="body1" color="#6B6B6B" width="100%">
                        {description}
                    </Typography>

                    {/* Email Input */}
                    {email_boxes.length > 0 && (
                        <Box
                            className="flex md:flex-col flex-row gap-4"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CustomInput placeholder={email_boxes[0].placeholder_text} borderRadius={3} />
                            {email_boxes[0].buttons.length > 0 && (
                                <CustomButton
                                    variant="contained"
                                    borderRadius={3}
                                >
                                    {email_boxes[0].buttons[0].label}
                                </CustomButton>
                            )}
                        </Box>
                    )}

                    {/* Notes */}
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        gap={2}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        alignItems="center"
                        color="#6B6B6B"
                        fontSize="0.875rem"
                    >
                        {notes.map(note => (
                            <span className={"flex flex-row gap-2"} key={note.id}><img  src={note.icon} alt={""}/>{note.text}</span>
                        ))}
                    </Box>

                    {/* Users */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                        alignItems="center"
                        pt={1}
                        gap={2}
                    >
                        <Stack direction="row" spacing={-1}>
                            {user_box.users_images.map(user => (
                                <Avatar
                                    key={user.id}
                                    alt={user.name}
                                    src={user.image}
                                    sx={{ border: "2px solid white", width: 50, height: 50 }}
                                />
                            ))}
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.primary, width: "40%" }}
                        >
                            {user_box.text}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
