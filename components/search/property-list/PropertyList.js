"use client"

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import styles from './PropertyList.module.css'
import PropertyHeader from "./SearchHeader"
import PropertyCard from "./PropertyCard"

export const PropertyList = ({ properties }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box className={styles.container}>

            {!isMobile && <PropertyHeader propertyCount={properties?.length} />}

            {isMobile && <Typography variant="h6" my={1}>{properties?.length || 0} Properties found</Typography>}

            <Grid container spacing={4}>
                {
                    properties?.map((property) => <PropertyCard key={property._id} property={property} />)
                }
            </Grid>
        </Box>
    )
}

export default PropertyList