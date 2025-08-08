import { Box, Typography, Button, InputBase } from "@mui/material";
import theme from "../theme.js";

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
                    alignItems: { xs: "flex-start", md: "center" },
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
                {/* متن سمت راست */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 1, color: "#fff" }}
                    >
                        اشتراک خبرنامه
                    </Typography>
                    <Typography sx={{ color: "#f3f3f3" }}>
                        اولین کسی باشید که آخرین پست را در صندوق ورودی خود دریافت می‌کنید
                    </Typography>
                </Box>

                {/* فرم سمت چپ */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        gap: 1.5,
                        flex: 1,
                        justifyContent: { xs: "flex-start", md: "flex-end" },
                    }}
                >
                    <InputBase
                        placeholder="ایمیل خود را وارد کنید"
                        inputProps={{
                            style: { textAlign: "right" },
                        }}
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                            px: 2,
                            py: 1,
                            flex: 1,
                            minWidth: { xs: "100%", sm: "250px" },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: theme.palette.primary.main,
                            px: 4,
                            py: 1,
                            borderRadius: 1,
                            "&:hover": { backgroundColor: "#f0f0f0" },
                            minWidth: { xs: "100%", sm: "auto" },
                        }}
                    >
                        ارسال
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
