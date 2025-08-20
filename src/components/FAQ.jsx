import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Typography, Box, CircularProgress, useTheme} from "@mui/material";
import { useFAQData } from "../api/FAQ.js";

const FAQ = ({ id  }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const { data, isLoading, isError, error } = useFAQData(id);
    const theme = useTheme();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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
            sx={{
                // background: 'linear-gradient(to bottom, #FFEDD5, #ffffff)',
                backgroundColor: theme.palette.background.paper,
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
                        {data?.title}
                    </Box>{" "}
                    {data?.subtitle}
                </Typography>

                <Typography
                    color={theme.palette.text.primary}
                    lineHeight={2}
                    sx={{ maxWidth: '100%', mx: 'auto', textAlign: 'center' }}
                    fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.125rem' }}
                >
                    {data?.description}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                    }}
                >
                    {data?.questions?.map((faq, index) => (
                        <Box
                            key={faq.id}
                            sx={{
                                borderRadius: 2,
                                backgroundColor: theme.palette.primary.light,
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
                                        color: openIndex === index ? theme.palette.primary.main : theme.palette.grey[800],
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
                                        color: theme.palette.grey[800],
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
