import { Box, Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PropertyList.module.css'

const PropertyCard = ({ property }) => {
    const { id, name, price, amenities, image, area, bedrooms, bathrroms } = property

    return (
        <Grid size={{ xs: 6, md: 6 }}>
            <Box className={styles.card}>
                <Box className={styles.image_wrapper}>
                    <Image
                        src={image}
                        alt={name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={styles.image}
                    />
                </Box>

                <Box className={styles.details_wrapper}>
                    <Typography variant="p">{price}</Typography>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="span">{amenities.join(',')}</Typography>

                    <Divider />
                    <Box className={styles.features}>
                        <Typography className={styles.feature} variant="span">{area} sqrt.</Typography>
                        <Typography className={styles.feature} variant="span">{bedrooms} beds</Typography>
                        <Typography className={styles.feature} variant="span">{bathrroms} baths</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default PropertyCard