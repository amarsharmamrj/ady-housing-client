import Filters from "@/components/search/filters/FIlters"
import PropertyList from "@/components/search/property-list/PropertyList"
import { Grid } from "@mui/material"

export const metadata = {
    title: 'Search properties',
    description: 'Find your dream property.'
}

const Search = () => {

    return (
        <main>
            <Grid container>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Filters />
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                    <PropertyList />
                </Grid>
            </Grid>
        </main>
    )
}

export default Search