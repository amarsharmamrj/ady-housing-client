import { Box, Typography } from "@mui/material"
import styles from './HeroSection.module.css'
import Search from "./search/Search"

const HeroSection = () => {
    return (
        <Box className={styles.hero_section}>
            <Typography variant="h1" className={styles.title}>Find Your Dream Home</Typography>
            <Typography variant="p" className={styles.sub_title}>Discover the perfect place to live with
                our comprehensive property listings and expert local agents.
            </Typography>
            <Search />
        </Box>
    )
}

export default HeroSection