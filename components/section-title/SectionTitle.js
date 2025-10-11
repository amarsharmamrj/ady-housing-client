import { Typography } from "@mui/material"
import styles from './SectionTitle.module.css'

const SectionTitle = ({ title = '', subTitle = '' }) => {
    return (
        <>
            <Typography className={styles.title} variant="h2">{title}</Typography>
            <Typography  className={styles.subTitle} variant="h5">{subTitle}</Typography>
        </>
    )
}

export default SectionTitle