import { Box, TextField, Typography } from '@mui/material';
import theme from "../theme.js";
import CustomButton from "./common/CustomButton.jsx";
import {useContactUsData} from "../api/contactUs.js";


export default function ContactUs({ id = 1 }) {
    const { data, isLoading, isError, error } = useContactUsData(id);

    if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
    if (isError) return <Typography>خطا در دریافت داده‌ها</Typography>;

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
                    gap: 5,
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1280px',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
                dir="rtl"
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
                        src={data.images?.[0]?.image}
                        alt={data.images?.[0]?.name }
                        sx={{ width: '90%' }}
                    />
                </Box>

                {/* Left Section  */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 5,
                        width: '100%',
                        alignItems: 'center',
                        backgroundColor: theme.palette.primary.light,
                        borderRadius: 2,
                    }}
                    dir="rtl"
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        mb={2}
                        style={{ color: theme.palette.primary.main }}
                    >
                        {data.title}
                    </Typography>

                    {data.input_fields_items?.map((field) => (
                        <TextField
                            key={field.id}
                            label={field.label}
                            placeholder={field.placeholder_text}
                            variant="outlined"
                            fullWidth
                            multiline={field.label === "پیام"}
                            rows={field.label === "پیام" ? 5 : 1}
                        />
                    ))}

                    <CustomButton
                        variant="contained"
                        px={6}
                        py={1}
                        borderRadius={3}
                    >
                        {data.buttons?.[0]?.label }
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}
