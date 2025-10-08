import {Box, Typography, CircularProgress, useTheme} from "@mui/material";
import CustomInput from "./common/CustomInput.jsx";
import CustomButton from "./common/CustomButton.jsx";
import { useNewslettersData,sendEmail } from "../api/newsletter.js";
import { useState } from "react";
import {useMutation} from "@tanstack/react-query";

export default function NewsletterSection({ id,landingId  }) {
    const { data, isLoading, isError, error } = useNewslettersData(id);
    const theme = useTheme();
    const [email, setEmail] = useState("");

    const { mutate: sendEmailMutate, isLoading: isSending } = useMutation({
        mutationFn: sendEmail,
        onSuccess: (res) => {
            alert(res?.message || "ایمیل با موفقیت ارسال شد ✅");
            setEmail("");
        },
        onError: (err) => {
            const msg = err.response?.data?.message || "ایمیل وارد شده نامعتبر است ❌";
            alert(msg);
        },
    });


    const handleSubmit = () => {
        if (!email) return;
        sendEmailMutate({ email, landingId });
    };




    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" py={10}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Box textAlign="center" py={10} color="red">
                خطا در دریافت اطلاعات: {error.message}
            </Box>
        );
    }

    return (
        <Box
            dir="rtl"
            className="w-screen overflow-x-hidden"
            sx={{
                backgroundColor: "#ffffff",
                py: 10,
                display: "flex",
                justifyContent: "center",
                px: { xs: 2, md: 4 },
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
                    p: { xs: 2, md: 5 },
                }}
            >
                {/*Right Section*/}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "start" },
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 1, color: "#fff" }}
                    >
                        {data?.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#f3f3f3",
                            textAlign: { xs: "center", md: "right" },
                        }}
                    >
                        {data?.description}
                    </Typography>
                </Box>

                {/*Left Section*/}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "center", md: "center" },
                        justifyContent: "center",
                        gap: 1.5,
                        flex: 1,
                        width: "100%",
                    }}
                >
                    <CustomInput
                        placeholder={data?.email_box?.[0]?.placeholder_text || "ایمیل خود را وارد کنید"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        borderRadius={1}
                        bgColor={"white"}
                    />
                    <CustomButton
                        borderRadius={1}
                        bgColor={"white"}
                        textColor={theme.palette.primary.main}
                        onClick={handleSubmit}
                        disabled={isSending}
                    >
                        ارسال
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}

