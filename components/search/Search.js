import { Grid } from "@mui/material"
import Filters from "./filters/FIlters"
import PropertyList from "./property-list/PropertyList"

const Search = () => {
    return (
        <Grid container>
            <Grid size={{ xs: 12, md: 3 }}>
                <Filters />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <PropertyList />
            </Grid>
        </Grid>
    )
}

export default Search