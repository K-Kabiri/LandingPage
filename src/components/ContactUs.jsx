import { Box, TextField, Button, Typography } from '@mui/material';
import theme from "../theme.js";
import CustomButton from "./common/CustomButton.jsx";

export default function ContactUs() {
    return (
        <Box
            dir="rtl"
            className="w-screen overflow-x-hidden"
            sx={{
                backgroundColor: '#ffffff',
                py: 10,
                display: 'flex',
                justifyContent: 'center',
                px: { xs: 2, md: 4 },

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    // backgroundColor: '#ede7f6',
                    gap: 5,
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1280px',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
                dir={"rtl"}
            >
                {/* Right Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        width: { xs: '100%', sm: 300, md: 400 },

                    }}
                >
                    <Box
                        component="img"
                        src="images/contact-us.png"
                        alt="تماس با ما"
                        sx={{
                            width: '90%',

                        }}
                    />
                </Box>

                {/* Left Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 5,
                        width: '100%',
                        alignItems: 'center',
                        backgroundColor: '#ede7f6',
                        borderRadius: 2,
                    }}
                    dir={"rtl"}
                >
                    <Typography variant="h5" fontWeight="bold" mb={2} style={{color:theme.palette.primary.main}}>
                        تماس با ما
                    </Typography>

                    <TextField
                        label="نام"
                        variant="outlined"
                        fullWidth

                    />
                    <TextField
                        label="ایمیل"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="پیام"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                    />
                    <CustomButton
                        variant="contained"
                        px={6}
                        py={1}
                        borderRadius={3}
                    >
                        ارسال
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}
