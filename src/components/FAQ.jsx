import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from "../theme.js";
import { Typography, Box } from "@mui/material";

const faqs = [
    {
        question: "چگونه می توانم پرداخت کنم؟",
        answer:
            "پس از انتخاب نوع سرویس خود با پشتیبان ما تماس گرفته و ضمن دریافت فاکتور و صورت‌حساب، حساب کاربری خود را فعال نمایید.",
    },
    {
        question: "چگونه حساب را تنظیم کنیم؟",
        answer:
            "به بخش تنظیمات حساب رفته و اطلاعات کاربری خود را کامل نمایید.",
    },
    {
        question: "چه فرآیندی برای بازپرداخت است ؟",
        answer:
            "در صورت عدم رضایت، با پشتیبانی تماس گرفته و فرم بازپرداخت را پر نمایید.",
    },
    {
        question: "چه فرآیندی برای بازپرداخت است ؟",
        answer:
            "در صورت عدم رضایت، با پشتیبانی تماس گرفته و فرم بازپرداخت را پر نمایید.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            dir="rtl"
            sx={{
                background: 'linear-gradient(to bottom, #FFEDD5, #ffffff)',
                py: 10,
                width: '100%',
                overflowX: 'hidden',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1280px',
                    px: { xs: 2, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color={theme.palette.text.primary}
                    sx={{ textAlign: 'center' }}
                >
                    <Box component="span" color={theme.palette.primary.main}>
                        سوالات متداول -
                    </Box>{' '}
                    سوالات متداول پرسیده شده
                </Typography>

                <Typography
                    color={theme.palette.text.primary}
                    lineHeight={2}
                    sx={{ maxWidth: '100%', mx: 'auto', textAlign: 'center' }}
                    fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.125rem' }}
                >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، چیدمان و متون بلکه روزنامه با استفاده از
                    طراحان گرافیک است.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                    }}
                >
                    {faqs.map((faq, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: 2,
                                backgroundColor: '#ede7f6', // مشابه violet-100 (میتونی تغییر بدی)
                                boxShadow: 1,
                                overflow: 'hidden',
                                width: '100%',
                            }}
                        >
                            <button
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '16px 20px',
                                    fontWeight: 600,
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggleFAQ(index)}
                            >
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: openIndex === index ? theme.palette.primary.main : theme.palette.text.primary,
                                        textAlign: 'right',
                                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                                    }}
                                >
                                    {faq.question}
                                </Typography>

                                {openIndex === index ? (
                                    <KeyboardArrowUpIcon sx={{ color: theme.palette.primary.main }} />
                                ) : (
                                    <KeyboardArrowDownIcon sx={{ color: theme.palette.primary.main }} />
                                )}
                            </button>

                            {openIndex === index && (
                                <Typography
                                    sx={{
                                        px: 4,
                                        pb: 4,
                                        color: theme.palette.grey[600],
                                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                                        lineHeight: 1.75,
                                        textAlign: 'right',
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
