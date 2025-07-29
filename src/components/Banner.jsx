import React from "react";
import theme from "../js/theme.js";
import {
    Box,
    Button,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";
import CustomInput from "./CustomInput.jsx";
import CustomButton from "./CustomButton.jsx";


const Banner = () => {
    return (
        <Box className="px-4 flex justify-center items-center" dir={"rtl"}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column-reverse',
                        md: 'row-reverse',
                    },
                    gap: 10,
                    py: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: {xs: 'center', md: 'right'},
                    width: '100%',
                    // maxWidth: '1280px',
                }}>

                {/* Left Section */}
                <Box className="grid grid-cols-2 gap-4 w-full md:w-[50%]">

                    {[1, 2, 3, 4].map((item) => (
                        <Box key={item} className="h-64 rounded-lg overflow-hidden shadow-md">

                            <img
                                src={`/public/vite.svg`}
                                alt={`تصویر ${item}`}
                                className="w-full h-full block"
                            />
                        </Box>
                    ))}
                </Box>


                {/* Right Section */}
                <Box className={"w-full md:w-[50%] flex flex-col gap-4"}
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

                    <Typography variant="body1" color="#6B6B6B" width={"100%"}>
                        سیتینا با بهره‌گیری از تکنولوژی‌های توسعه کم‌کد، امکان ایجاد سریع
                        سیستم‌های مورد نیاز شرکت شما را بدون نیاز به دانش برنامه‌نویسی فراهم
                        آورده است.
                    </Typography>

                    <Box className={"flex md:flex-col flex-row gap-4"}>
                        <CustomInput placeholder="ایمیل خود را وارد کنید" borderRadius={3}/>
                        <CustomButton
                            className={"!m-0"}
                            variant="contained"
                            color="white"
                            bgColor={theme.palette.primary.main}
                            textColor={theme.palette.secondary.main}
                            px={6}
                            py={1.1}
                            borderRadius={3}
                        >
                            ارسال
                        </CustomButton>
                    </Box>


                    <Box
                        direction={{xs: "column", sm: "row"}}
                        gap={2}
                        justifyContent={{xs: "center", md: "flex-start"}}
                        alignItems="center"
                        color="#6B6B6B"
                        fontSize="0.875rem"
                    >
                        <span> ✅رایگان ۱۴ روز</span>
                        <span> ✅کارت اعتباری نیازی ندارد</span>
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
                        <Typography variant="body2" className={`text-${theme.palette.text.primary} w-[40%]`}>
                            +۱۲۰ میلیون نفر در سراسر دنیا کاربران پلتفرم‌های کم‌کد
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
