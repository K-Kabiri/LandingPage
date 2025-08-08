import { Box, Typography, Link, IconButton, Tooltip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import theme from "../theme.js";

export default function Footer() {
    const usefulLinks = [
        { label: 'خانه', href: '#' },
        { label: 'درباره ما', href: '#' },
        { label: 'سرویس‌ها', href: '#' },
        { label: 'بلاگ', href: '#' },
        { label: 'ارتباط با ما', href: '#' },
    ];

    return (
        <Box
            component="footer"
            dir="rtl"
            sx={{
                background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.primary.light})`,
                px: { xs: 2, md: 6 },
                py: 5,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 1)",

            }}
            className="w-full"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: { xs: 4, md: 0 },
                    maxWidth: '1280px',
                    mx: 'auto',
                    textAlign: 'center',
                }}
            >
                {/* Contact us */}
                <Box className="flex flex-col justify-center items-center" sx={{ flex: 1, minWidth: 0 }} dir="ltr">
                    <img src="/src/assets/react.svg" alt="SYNTA" width={80} className="mb-6" />
                    <Typography variant="body2" color="text.secondary">synta@farda-studio.ir</Typography>
                    <Typography variant="body2" color="text.secondary">+98 913 655 8750</Typography>
                    <Box mt={1}>
                        <Tooltip title="Instagram">
                            <IconButton sx={{ '&:hover': { transform: 'scale(1.2)', color: theme.palette.primary.main, transition: '0.3s' } }}>
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram">
                            <IconButton sx={{ '&:hover': { transform: 'scale(1.2)', color: theme.palette.primary.main, transition: '0.3s' } }}>
                                <TelegramIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Twitter">
                            <IconButton sx={{ '&:hover': { transform: 'scale(1.2)', color: theme.palette.primary.main, transition: '0.3s' } }}>
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>

                {/* Links */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography fontWeight="bold" color={theme.palette.text.primary} gutterBottom>
                        لینک‌های مفید
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                        {usefulLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                underline="none"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s ease',
                                    '&:hover': {
                                        color: theme.palette.primary.main,
                                        pl: 1
                                    },
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* QR Code */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography fontWeight="bold" gutterBottom>امتحان کنید</Typography>
                    <Box
                        component="img"
                        src="/vite.svg"
                        alt="QR Code"
                        sx={{ width: 120, height: 120, mx: 'auto', display: 'block' }}
                    />
                    <Typography variant="caption" display="block" mt={1} color="primary">با موبایل اسکن کنید</Typography>
                </Box>

                {/* Views */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography fontWeight="bold" gutterBottom>آمار بازدید</Typography>
                    <Box sx={{ fontSize: 14, lineHeight: 1.8 }}>
                        <div>👤 افراد آنلاین: ۱ نفر</div>
                        <div>📅 بازدید امروز: ۳ نفر</div>
                        <div>📊 بازدید هفته: ۳۴ نفر</div>
                        <div>🌍 بازدید ماهانه: ۴۵ نفر</div>
                        <div>🇮🇷 بازدید کل: ۴۶ نفر</div>
                        <div>توسط یک ای‌پی</div>
                    </Box>
                </Box>
            </Box>

            <Typography variant="caption" display="block" textAlign="center" mt={4} color="text.secondary">
                © تمام حقوق مادی و معنوی این وبسایت متعلق به استارتاپ سینتا می‌باشد.
            </Typography>
        </Box>
    );
}
