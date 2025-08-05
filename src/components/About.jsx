import { Box, Typography, Paper, Avatar } from '@mui/material';
import theme from "../theme.js";

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
            className="overflow-x-hidden w-screen"
            sx={{
                background: 'linear-gradient(to bottom, #f3e8ff, #ffffff)',
                px: { xs: 2, md: 4 },
                py: 10,
                overflowX: 'hidden',
                display: 'flex',
                justifyContent: 'center',

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    alignItems: 'center',
                    gap: 5,
                    width: '100%',
                    maxWidth: '1280px',
                }}
            >
                {/* متن و آمار */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: 'center', md: 'right' },
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={theme.palette.text.primary}
                        sx={{ mb: 2 }}
                    >
                        چند کلمه جالب{' '}
                        <Box component="span" color={theme.palette.primary.main}>
                            درباره برنامه.
                        </Box>
                    </Typography>

                    <Typography
                        color={theme.palette.text.primary}
                        lineHeight={2}
                        sx={{ maxWidth: '100%', mx: { xs: 'auto', md: 0 } }}
                    >
                        راهکار توسعه مشارکتی سینتا، با بهره‌گیری از ساختار پلتفرم‌های کم‌کد و با استفاده
                        از روش نمونه‌سازی تکاملی، طراحی سیستم مورد انتظار مشتری را آسان نموده و مجموعه‌ای
                        قوی از ویژگی‌های کارآمد برای طراحی، تولید کد، تست و پیکربندی‌های لازم جهت تولید و
                        استقرار سیستم‌های نرم‌افزاری مورد نیاز برای کسب‌وکارهای ارائه می‌دهد...
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            mt: 4,
                            justifyContent: { xs: 'center', md: 'flex-center' },
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
                                    backgroundColor: `${item.color}.50`,
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

                {/* تصویر */}
                <Box
                    sx={{
                        flex: 1,
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="/vite.svg"
                        alt="main"
                        sx={{
                            width: { xs: '100%', sm: 400, md: 500 },
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                    <Box
                        component="img"
                        src="/src/assets/react.svg"
                        alt="overlay"
                        sx={{
                            position: 'absolute',
                            top: { xs: 230, md: 300 },
                            left: { xs: 80, md: 0 },
                            width: { xs: 150, md: 180 },
                            borderRadius: 2,
                            boxShadow: 4,
                            border: '1px solid #e0e0e0',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
