import { Grid } from "@mui/material"
import Filters from "./filters/FIlters"
import PropertyList from "./property-list/PropertyList"

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

const SearchComp = async () => {
    const properties = await getProperties();
    console.log('@@ properties:', properties)

    return (
        <Grid container>
            <Grid size={{ xs: 12, md: 3 }}>
                <Filters propertyCount={properties?.data?.length} />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <PropertyList properties={properties?.data} />
            </Grid>
        </Grid>
    )
}

export default SearchComp