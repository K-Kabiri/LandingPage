import { Box, Typography, useTheme } from "@mui/material";
import CustomButton from "./common/CustomButton.jsx";
import CustomInput from "./common/CustomInput.jsx";
import { useContactUsData } from "../api/contactUs.js";
import {useRef, useState} from "react";
import { contactEmail } from "../api/contactUs.js";

export default function ContactUs({ id , scrollId,landingId}) {
    const { data, isLoading, isError } = useContactUsData(id);
    const theme = useTheme();

    const [formValues, setFormValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const sectionRef = useRef(null);


    if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
    if (isError) return <Typography>خطا در دریافت داده‌ها</Typography>;

    const handleChange = (label, value) => {
        setFormValues((prev) => ({ ...prev, [label]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setSuccess(null);
        setError(null);
        try {
            const res = await contactEmail({
                name: formValues["نام"] || formValues["Name"] || "",
                email: formValues["ایمیل"] || formValues["Email"] || "",
                message: formValues["پیام"] || formValues["Message"] || "",
                landingId: landingId,
            });
            setSuccess("پیام شما با موفقیت ارسال شد!");
        } catch (err) {
            console.error(err);
            setError("ارسال پیام با خطا مواجه شد.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            id={scrollId}
            ref={sectionRef}
            dir="rtl"
            className="w-screen overflow-x-hidden scroll-mt-10"
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
                    gap: 5,
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1280px",
                    borderRadius: 2,
                    boxShadow: 2,
                }}
                dir="rtl"
            >
                {/* Right Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", sm: 300, md: 400 },
                    }}
                >
                    <Box
                        component="img"
                        src={data.images?.[0]?.image}
                        alt={data.images?.[0]?.name}
                        sx={{ width: "90%" }}
                    />
                </Box>

                {/* Left Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        padding: 5,
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
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
                        <CustomInput
                            key={field.id}
                            label={field.label}
                            placeholder={field.placeholder_text}
                            variant="outlined"
                            fullWidth
                            multiline={field.label === "پیام"}
                            rows={field.label === "پیام" ? 5 : 1}
                            borderRadius={2}
                            borderColor={theme.palette.grey[700]}
                            placeholderColor={theme.palette.grey[700]}
                            value={formValues[field.label] || ""}
                            onChange={(e) => handleChange(field.label, e.target.value)}
                        />
                    ))}

                    {success && (
                        <Typography color="green" mt={1}>
                            {success}
                        </Typography>
                    )}
                    {error && (
                        <Typography color="red" mt={1}>
                            {error}
                        </Typography>
                    )}

                    <CustomButton
                        variant="contained"
                        px={6}
                        py={1}
                        borderRadius={3}
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "در حال ارسال..." : data.buttons?.[0]?.label}
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
}
