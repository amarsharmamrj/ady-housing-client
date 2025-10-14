import { Grid } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <Grid container spacing={2} className={styles.footer}>
            <Grid size={3}>
                <div className={styles.logo_wrapper}>Footer 1</div>
            </Grid>
            <Grid size={3}>
                <div>Footer 2</div>
            </Grid><Grid size={3}>
                <div>Footer 3</div>
            </Grid><Grid size={3}>
                <div>Footer 4</div>
            </Grid>
        </Grid>
    )
}

export default Footer