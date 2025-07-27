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
                    gap: 2,
                    py: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: {xs:'center', md:'right'},
                    width: '100%',
                    maxWidth: '1280px',
                }}>

                {/* Left Section */}
                <Box className="grid grid-cols-2 gap-4 xs:w-full md:w-[50%]">

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

                <Box className={"xs:x-full md:w-[50%] xs:text-center md:text-right flex flex-col gap-4"}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="text.primary"
                        className="leading-[1]"
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

                    <Stack
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        gap={2}
                        justifyContent={{xs: "center", md: "flex-start"}}
                        alignItems="center"
                    >
                        <CustomInput placeholder="ایمیل خود را وارد کنید" borderRadius={3} px={5} py={10}/>
                        <CustomButton
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

                    </Stack>

                    <Stack
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        gap={2}
                        justifyContent={{xs: "center", md: "flex-start"}}
                        alignItems="center"
                        color="#6B6B6B"
                        fontSize="0.875rem"
                    >
                        <span> ✅رایگان ۱۴ روز</span>
                        <span> ✅کارت اعتباری نیازی ندارد</span>
                    </Stack>

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
