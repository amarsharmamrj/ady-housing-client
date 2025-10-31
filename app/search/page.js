import Filters from "@/components/search/filters/FIlters"
import PropertyList from "@/components/search/property-list/PropertyList"
import SearchComp from "@/components/search/Search"
import { Grid } from "@mui/material"

export const metadata = {
    title: 'Search properties',
    description: 'Find your dream property.'
}

const Search = () => {

    return (
        <main className="search_container">
            <SearchComp />
        </main>
    )
}

export default Search