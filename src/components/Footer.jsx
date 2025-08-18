import { Box, Typography, Link, IconButton, Tooltip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import theme from "../theme.js";
import { useFooterData } from "../api/footer.js";

const iconMap = {
    Instagram: InstagramIcon,
    Telegram: TelegramIcon,
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
};

export default function Footer() {
    const { data, isLoading, error } = useFooterData(1);

    if (isLoading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>خطا در دریافت اطلاعات</div>;

    const { logo, contact_information, useful_links, qr_code, copyright_notice } = data;

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
                    {logo && <img src={logo} alt="SYNTA" width={120} className="mb-6" />}
                    <Typography variant="body2" color="text.secondary">{contact_information?.email}</Typography>
                    <Typography variant="body2" color="text.secondary">{contact_information?.phone_number}</Typography>
                    <Box mt={1} display="flex" gap={1}>
                        {contact_information?.social_links?.map((social) => {
                            const IconComponent = iconMap[social.label];
                            if (!IconComponent) return null;

                            return (
                                <Tooltip key={social.id} title={social.label}>
                                    <IconButton
                                        component="a"
                                        href={social.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderRadius: "50%",
                                            transition: "all 0.3s ease",
                                            color: theme.palette.text.secondary,
                                            cursor: "pointer",
                                            '&:hover': {
                                                transform: 'scale(1.2)',
                                                color: theme.palette.primary.contrastText,
                                                backgroundColor: theme.palette.primary.main,
                                                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                            },
                                        }}
                                    >
                                        <IconComponent fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            );
                        })}
                    </Box>

                </Box>

                {/* Links */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography fontWeight="bold" color={theme.palette.text.primary} gutterBottom>
                        {useful_links?.title}
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                        {useful_links?.links?.map((link) => (
                            <Link
                                key={link.id}
                                href={link.link || "#"}
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
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* QR Code */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography fontWeight="bold" gutterBottom>{qr_code?.title}</Typography>
                    <Box
                        component="img"
                        src={qr_code?.image}
                        alt="QR Code"
                        sx={{ width: 120, height: 120, mx: 'auto', display: 'block' }}
                    />
                    <Typography variant="caption" display="block" mt={1} color="primary">با موبایل اسکن کنید</Typography>
                </Box>

                <iframe
                    src="https://1abzar.ir/abzar/tools/stat/stat-v3.php?color=FFFFFF&bg=5249B4&kc=888888&kadr=1&amar=b498xne0fb3j3p6hmf9a8k6dot1o3w&show=1|0|1|1|1|1|1"
                    scrolling="no"
                    frameBorder="0"
                    name="alir"
                    width="160"
                    height="183"
                    style={{
                        border: "1px solid #888888",
                        borderRadius: "4px",
                        WebkitBorderRadius: "4px",
                        MozBorderRadius: "4px",
                    }}
                    title="site-visitor-stats"
                />

            </Box>

            <Typography variant="caption" display="block" textAlign="center" mt={4} color="text.secondary">
                {copyright_notice}
            </Typography>
        </Box>
    );
}
