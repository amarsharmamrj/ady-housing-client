import { Box, Grid } from "@mui/material"
import styles from './PropertyList.module.css'
import PropertyHeader from "./SearchHeader"
import PropertyCard from "./PropertyCard"

async function getProperties() {
    try {
        const res = await fetch("http://localhost:4000/api/property", {
            cache: "no-store"
        });

        if (!res.ok) throw new Error("Failed to fetch properties");
        return res.json();
    } catch (error) {
        console.log('api error:', error)
    }
}

export const PropertyList = async () => {
    const properties = await getProperties();
    console.log('@@ properties:', properties)

    return (
        <Box className={styles.container}>
            <PropertyHeader propertyCount={properties?.data?.length} />

            <Grid container spacing={4}>
                {
                    properties?.data?.map((property) => <PropertyCard key={property._id} property={property} />)
                }
            </Grid>
        </Box>
    )
}

export default PropertyList