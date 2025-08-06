import { Box, Typography, Link, IconButton } from '@mui/material';
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
                background: 'white',
                px: { xs: 2, md: 6 },
                py: 5,
                borderTop: '1px solid #e0e0e0',
            }}
            className={"w-full"}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    flexWrap: 'wrap',
                    gap: { xs: 4, md: 0 },
                    maxWidth: '1280px',
                    mx: 'auto',
                }}
            >
                {/* Contact us */}
                <Box className={"flex flex-col justify-center items-center"} sx={{ flex: 1, minWidth: 0}} dir={"ltr"}>
                    <img src="/src/assets/react.svg" alt="SYNTA" width={80} className={"mb-6"} />
                    <Typography variant="body2" color="text.secondary">synta@farda-studio.ir</Typography>
                    <Typography variant="body2" color="text.secondary" >+98 913 655 8750</Typography>
                    <Box mt={1}>
                        <IconButton><InstagramIcon fontSize="small" /></IconButton>
                        <IconButton><TelegramIcon fontSize="small" /></IconButton>
                        <IconButton><TwitterIcon fontSize="small" /></IconButton>
                    </Box>
                </Box>

                {/* Links */}
                <Box sx={{ flex: 1, minWidth: 0, textAlign: 'center', p: 0 }}>
                    <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary}>
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
                                    },
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/*   (QR Code) */}
                <Box sx={{ flex: 1, minWidth: 0, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>امتحان کنید</Typography>
                    <Box
                        component="img"
                        src="/qr-code.png"
                        alt="QR Code"
                        sx={{ width: 120, height: 120, mx: 'auto' }}
                    />
                    <Typography variant="caption" display="block" mt={1} color="primary">Connect</Typography>
                </Box>

                {/* views */}
                <Box sx={{ flex: 1, minWidth: 0, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>آمار بازدید</Typography>
                    <Box sx={{ backgroundColor: '#a855f7', borderRadius: 2, color: '#fff', p: 2, fontSize: 12, lineHeight: 1.8 }}>
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
