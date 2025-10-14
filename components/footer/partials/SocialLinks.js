import Link from "next/link";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from '../Footer.module.css';

const socialLinks = [
    { icon: <InstagramIcon />, href: "https://www.instagram.com" },
    { icon: <FacebookIcon />, href: "https://www.facebook.com" },
    { icon: <YouTubeIcon />, href: "https://www.youtube.com" },
];

const SocialLinks = () => {
    return (
        <Box textAlign="center" width="100%" m={{ xs: 1, md: 2 }}>
            {socialLinks.map((item, index) => (
                <Link key={index} href={item.href} target="_blank">
                    <Box component="span" className={styles.social_icon}>
                        {item.icon}
                    </Box>
                </Link>
            ))}
        </Box>
    );
};

export default SocialLinks;
