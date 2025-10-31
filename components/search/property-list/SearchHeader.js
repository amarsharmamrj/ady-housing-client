"use client"

import { Box, FormControl, MenuItem, Select, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import styles from './PropertyList.module.css'
import SwapVertIcon from '@mui/icons-material/SwapVert';

const PropertyHeader = ({ propertyCount }) => {
    const [sortBy, setSortBy] = useState('newest')
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [toggleRotate, setToggleRotate] = useState(false)

    const handleChange = (e) => {
        setSortBy(e.target.value)
        setToggleRotate(!toggleRotate)
    }

    return (
        <Box className={styles.header}>

            {!isMobile && <Typography variant="h6">{propertyCount || 0} Properties found</Typography>}

            <Box className={styles.sortBy_wrapper}>
                <SwapVertIcon className={`${styles.sorting_icon} ${toggleRotate ? styles.rotate_icon : ''}`} color="primary" />
                <Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            size="small"
                            onChange={handleChange}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "& .MuiSelect-select": {
                                    outline: "none",
                                    paddingLeft: '0',
                                    paddingTop: { xs: '5px', md: '16px' },
                                    paddingBottom: { xs: '5px', md: '16px' }
                                },
                            }}
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