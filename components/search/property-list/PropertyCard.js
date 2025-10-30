import { Box, Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PropertyList.module.css'
import { formatCurrency } from "@/utils/utils"
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Link from "next/link";

const PropertyCard = ({ property }) => {
    const { _id, name, price, societyAmenities: amenities, images, builtUpArea: area, bedrooms=2, bathrroms=4 } = property

    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Link href={'/'}>
                <Box className={styles.card}>
                    <Box className={styles.image_wrapper}>
                        <Image
                            src={images[0]}
                            alt={name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className={styles.image}
                        />
                    </Box>

                    <Box className={styles.details_wrapper}>
                        <Typography className={styles.price} variant="p">{formatCurrency(price)}</Typography>
                        <Typography className={styles.name} variant="h4">{name}</Typography>
                        <Typography className={styles.amenities} variant="span">{amenities.join(', ')}</Typography>

                        <Divider className={styles.divider} />
                        <Box className={styles.features}>
                            <Typography className={styles.feature} variant="span">
                                <BorderOuterIcon />
                                {area} sqrt.
                            </Typography>
                            <Typography className={styles.separater} variant="span">|</Typography>

                            <Typography className={styles.feature} variant="span">
                                <BedIcon />
                                {bedrooms} Beds</Typography>
                            <Typography className={styles.separater} variant="span">|</Typography>

                            <Typography className={styles.feature} variant="span">
                                <BathtubIcon />
                                {bathrroms} Baths
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}

export default PropertyCard