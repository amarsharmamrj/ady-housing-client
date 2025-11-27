import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PropertyList.module.css'
import { formatCurrency, formatIndianNumber } from "@/utils/utils"
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import BedIcon from '@mui/icons-material/Bed';
import MoneyIcon from '@mui/icons-material/Money';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import CallIcon from '@mui/icons-material/Call';
import Link from "next/link";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const PropertyCard = ({ property }) => {
    const { name, buildingName, propertySubCategory, locality, city, price, bhk,
        propertyCategory, unit, totalFloors, updatedAt, 
        furnishings, images, builtUpArea: area, bedrooms = 2, bathrroms = 4,
    } = property

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
                        <Typography className={styles.name} variant="h4">{buildingName}</Typography>
                        <Typography className={styles.desc} variant="h5">
                            <span className={styles.innerText}>{propertySubCategory}</span> in
                            <span className={styles.innerText}> {locality}</span>,
                            <span className={styles.innerText}> {city}</span>
                        </Typography>

                        <Box className={styles.features}>

                            <div className={styles.featureCard}>
                                <MoneyIcon />
                                <Typography className={styles.feature} variant="span"><b>{formatIndianNumber(price)}</b></Typography>
                            </div>

                            <div className={styles.featureCard}>
                                <BorderOuterIcon />
                                <Typography className={styles.feature} variant="span">{`${area} (${unit === 'square-feet' ? 'sq. ft.' : unit})`}</Typography>
                            </div>

                            {
                                propertyCategory === 'residential' ? (
                                    <div className={styles.featureCard}>
                                        <BedIcon />
                                        <Typography className={styles.feature} variant="span">{bhk}</Typography>
                                    </div>
                                ) : (
                                    <div className={styles.featureCard}>
                                        <DomainAddIcon />
                                        <Typography className={styles.feature} variant="span">{totalFloors} Floors</Typography>
                                    </div>
                                )
                            }

                        </Box>
                    </Box>

                    <Box className={styles.footer}>

                        <Box className={styles.posted}>
                            <Typography className={styles.postedText} variant="p">Posted</Typography>
                            <Typography className={styles.postedValue} variant="p"><b>{timeAgo.format(new Date(updatedAt))}</b></Typography>
                        </Box>

                        <Box>
                            <Button
                                color="primary"
                                variant='outlined'
                                // onClick={handleBack}
                                sx={{ height: '40px', marginRight: { xs: '0.5rem', md: '1rem' } }}
                            >
                                View Details
                            </Button>
                            <Button
                                color="primary"
                                variant='contained'
                                // onClick={handleBack}
                                startIcon={<CallIcon />}
                                sx={{ height: '40px' }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}

export default PropertyCard