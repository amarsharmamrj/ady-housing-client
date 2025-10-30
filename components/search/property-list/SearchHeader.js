"use client"

import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"
import styles from './PropertyList.module.css'


const PropertyHeader = ({ propertyCount }) => {
    const [sortBy, setSortBy] = useState('newest')

    const handleChange = (e) => {
        setSortBy(e.target.value)
    }


    return (
        <Box className={styles.header}>
            <Typography variant="h6">{propertyCount} Properties found</Typography>
            <Box className={styles.sortBy_wrapper}>
                <Typography variant="p" sx={{ display: 'inline-block' }}>Sort By:</Typography>
                <Box >
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            size="small"
                            onChange={handleChange}
                            className={styles.sorting}
                        >
                            <MenuItem value={'newest'}>Newest</MenuItem>
                            <MenuItem value={'price-low-to-high'}>Price (Low to High)</MenuItem>
                            <MenuItem value={'price-high-to-low'}>Price (High to Low)</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default PropertyHeader