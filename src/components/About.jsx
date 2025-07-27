import { Box, Typography, Paper, Avatar } from '@mui/material';
import theme from "../js/theme.js";

export default function AboutProgram() {
    const stats = [
        { label: 'طراحان', value: '۸+', color: 'purple', icon: '/src/assets/react.svg' },
        { label: 'کاربران', value: '۱۷+', color: 'blue', icon: '/src/assets/react.svg' },
        { label: 'کشورها', value: '۵+', color: 'cyan', icon: '/src/assets/react.svg' },
        { label: 'نظرات', value: '۲۳۰۰+', color: 'sky', icon: '/src/assets/react.svg' },
    ];

    return (
        <Box
            dir="rtl"
            className="bg-gradient-to-b from-purple-100 to-white py-8 items-center"
            sx={{
                px: { md: 5, xs: 2 },
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row-reverse' },
                alignItems: 'center',
                gap: 5,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    textAlign: {xs:'center', md:'right'},
                    width: '100%',
                    maxWidth: { xs: '100%', md: '50%' },
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color={theme.palette.text.primary}
                    sx={{ mb: 2, p: 2 ,justifyContent:{ xs: 'center', md: 'flex-start' },
                }}
                >
                    چند کلمه جالب <span style={{ color: theme.palette.text.secondary }}>درباره برنامه.</span>
                </Typography>
                <Typography
                    color={theme.palette.text.primary}
                    lineHeight={2}
                    sx={{ px: 2  ,justifyContent:{ xs: 'center', md: 'flex-start' },}}
                >
                    راهکار توسعه مشارکتی سینتا، با بهره‌گیری از ساختار پلتفرم‌های کم‌کد و با استفاده
                    از روش نمونه‌سازی تکاملی، طراحی سیستم مورد انتظار مشتری را آسان نموده و مجموعه‌ای
                    قوی از ویژگی‌های کارآمد برای طراحی، تولید کد، تست و پیکربندی‌های لازم جهت تولید و
                    استقرار سیستم‌های نرم‌افزاری مورد نیاز برای کسب‌وکارهای ارائه می‌دهد. پلتفرم سینتا
                    با استفاده از رابط‌های کاربری ساده و قابل فهم برای کاربران ناآشنا با مفاهیم
                    برنامه‌نویسی فراهم کرده و حتی فرآیند توسعه سیستم‌های نرم‌افزاری را برای متخصصان این
                    حوزه نیز تسریع نموده و پیچیدگی‌ها را در پشت صحنه رفع نماید
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        mt: 4,
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        px: 2,
                    }}
                >
                    {stats.map((item, idx) => (
                        <Paper
                            key={idx}
                            elevation={3}
                            sx={{
                                width: 250,
                                display: 'flex',
                                alignItems: 'center',
                                p: 2,
                                borderRadius: 2,
                                bgColor: `${item.color}.50`,
                            }}
                        >
                            <Avatar
                                src={item.icon}
                                alt={item.label}
                                sx={{ width: 32, height: 32, ml: 2 }}
                            />
                            <Box>
                                <Typography variant="h5" fontWeight="bold" color={`${item.color}.600`}>
                                    {item.value}
                                </Typography>
                                <Typography color="text.secondary" mt={0.5}>
                                    {item.label}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    maxWidth: { xs: '100%', md: '50%' },
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                <Box
                    component="img"
                    src="/public/vite.svg"
                    alt="main"
                    sx={{
                        width: { xs: '100%', sm: 300, md: 400 },
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                />
                <Box
                    component="img"
                    src="/src/assets/react.svg"
                    alt="overlay2"
                    sx={{
                        position: 'absolute',
                        top: { xs: 180, md: 176 },
                        left: { xs: 10, md: 40 },
                        width: { xs: 120, md: 180 },
                        borderRadius: 2,
                        boxShadow: 4,
                        border: '1px solid #e0e0e0',
                    }}
                />
            </Box>
        </Box>

    );
}
