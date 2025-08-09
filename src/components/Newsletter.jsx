import { Box, Typography, Button, InputBase } from "@mui/material";
import theme from "../theme.js";
import CustomInput from "./common/CustomInput.jsx";
import CustomButton from "./common/CustomButton.jsx";

export default function NewsletterSection() {
    return (
        <Box
            dir="rtl"
            className="w-screen overflow-x-hidden"
            sx={{
                backgroundColor: "#ffffff",
                py: 10,
                display: "flex",
                justifyContent: "center",
                px: { xs: 2, md: 20 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: 'center', md: 'center' },
                    justifyContent: "space-between",
                    gap: 5,
                    width: "100%",
                    maxWidth: "1280px",
                    borderRadius: 2,
                    boxShadow: 2,
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    p: { xs: 3, md: 5 },
                }}
            >
                {/* Right Section */}
                <Box sx={{ flex: 1,display: "flex",flexDirection:"column", alignItems: {
                    xs:"center",
                        md:"start"
                    }
                     }}>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 1, color: "#fff" }}
                    >
                        اشتراک خبرنامه
                    </Typography>
                    <Typography sx={{ color: "#f3f3f3", textAlign: {
                        xs:"center",
                        md:"right"
                    } }}>
                        اولین کسی باشید که آخرین پست را در صندوق ورودی خود دریافت می‌کنید
                    </Typography>
                </Box>

                {/* Left Section */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "center", md: "center" },
                        justifyContent: "center",
                        gap: 1.5,
                        flex: 1,
                        width: "100%",
                    }}>
                    <CustomInput
                        placeholder="ایمیل خود را وارد کنید"
                        borderRadius={1}
                        bgColor={'white'}

                    />
                    <CustomButton
                        borderRadius={1}
                        bgColor={'white'}
                        textColor={theme.palette.primary.main}
                    >
                        ارسال
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}
