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


const Banner = () => {
    const images = [1, 2, 3, 4]; // number of picture

    return (
        <Box
            className="bg-white overflow-x-hidden w-screen"
            dir="rtl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column-reverse',
                        md: 'row-reverse',
                    },
                    gap: 10,
                    mt: 5,
                    py: 10,
                    px: {xs: 2, md: 4},
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: {xs: 'center', md: 'right'},
                    width: '100%',
                    maxWidth: '1280px',
                }}
            >

                {/* Left Section */}
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
                            key={item}
                            className={`rounded-lg overflow-hidden shadow-md h-64${
                                images.length === 1
                                    ? 'w-3/4'
                                    : images.length === 3
                                        ? index === 2
                                            ? 'col-span-2 justify-self-center w-3/4'
                                            : ''
                                        : ''
                            }`}
                        >
                            <img
                                src={`/vite.svg`}
                                alt={`تصویر ${item}`}
                                className="w-full h-full object-contain block"
                            />
                        </Box>
                    ))}
                </Box>
                {/* Right Section */}
                <Box className="w-full md:w-[50%] flex flex-col gap-4"
                     sx={{
                         textAlign: {
                             xs: 'center',
                             md: 'right',
                         }
                     }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="text.primary"
                    >
                        بهترین راه مدیریت <br/>
                        <Box component="span" color={theme.palette.primary.main}>
                            فرآیندهای شرکت شما
                        </Box>
                    </Typography>

                    <Typography variant="body1" color="#6B6B6B" width="100%">
                        سیتینا با بهره‌گیری از تکنولوژی‌های توسعه کم‌کد، امکان ایجاد سریع
                        سیستم‌های مورد نیاز شرکت شما را بدون نیاز به دانش برنامه‌نویسی فراهم
                        آورده است.
                    </Typography>

                    <Box className="flex md:flex-col flex-row gap-4"
                         sx={{
                             display: 'flex',
                             flexDirection: {
                                 xs: 'column',
                                 md: 'row',
                             },
                         }}
                    >
                        <CustomInput placeholder="ایمیل خود را وارد کنید" borderRadius={3}/>
                        <CustomButton
                            variant="contained"
                            borderRadius={3}
                        >
                            ارسال
                        </CustomButton>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection={{xs: "column", sm: "row"}}
                        gap={2}
                        justifyContent={{xs: "center", md: "flex-start"}}
                        alignItems="center"
                        color="#6B6B6B"
                        fontSize="0.875rem"
                    >
                        <span>✅ رایگان ۱۴ روز</span>
                        <span>✅ کارت اعتباری نیازی ندارد</span>
                    </Box>

                    <Stack
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        justifyContent={{xs: "center", md: "flex-start"}}
                        alignItems="center"
                        pt={1}
                        gap={2}
                    >
                        <Stack direction="row" spacing={-1}>
                            {[1, 2, 3, 5].map((img) => (
                                <Avatar
                                    key={img}
                                    alt={`user-${img}`}
                                    src={`https://i.pravatar.cc/40?img=${img}`}
                                    sx={{border: "2px solid white", width: 50, height: 50}}
                                />
                            ))}
                        </Stack>
                        <Typography variant="body2" sx={{color: theme.palette.text.primary, width: "40%"}}>
                            +۱۲۰ میلیون نفر در سراسر دنیا کاربران پلتفرم‌های کم‌کد
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
