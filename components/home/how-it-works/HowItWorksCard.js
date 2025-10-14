import  { Typography, Box, Paper }  from "@mui/material"
import styles from './HowItWorks.module.css'

const HowItWorksCard = ({title, desc, icon}) => {
    return (
        <Paper elevation={1} className={styles.card}>
            <Box className={styles.icon_wrapper}>{icon}</Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="p">{desc}</Typography>
        </Paper>
    )
}

export default HowItWorksCard