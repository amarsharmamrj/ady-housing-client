import  { Typography, Box, Paper, Grid }  from "@mui/material"
import styles from '../HowItWorks.module.css'

const HowItWorksCard = ({title, desc, icon}) => {
    return (
        <Grid size={{xs: 12, md: 4}}>
        <Paper elevation={1} className={styles.card}>
            <Box className={styles.icon_wrapper}>{icon}</Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="p">{desc}</Typography>
        </Paper>
        </Grid>
    )
}

export default HowItWorksCard