"use client";

import { Box, Button, Drawer, useMediaQuery, useTheme } from '@mui/material'
import styles from './Filters.module.css'
import { filters } from '@/constants/filters';
import { useState } from 'react';
import { formatIndianNumber, isMobile } from '@/utils/utils';
import TuneIcon from '@mui/icons-material/Tune';
import FilterContent from './FilterContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const defaultPriceValue = [100000, 20000000]

export const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [priceValue, setPriceValue] = useState(defaultPriceValue)
    const [open, setOpen] = useState(false)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (state) => () => setOpen(state);

    const handleValueSelected = (filterKey, selectedKey = '', selectedValue, isPriceRange = false) => {
        const newKey = filterKey + selectedKey;
        const alreadySelected = selectedFilters?.some((item) => item.key === newKey);
        let updatedFilters;

        if (isPriceRange) {             // for price range
            const newItem = { filterKey, key: newKey, value: `${selectedValue[0]} - ${selectedValue[1]}` };

            if (alreadySelected) {
                updatedFilters = selectedFilters.map(item =>
                    item.key === newKey ? newItem : item
                );
            } else {
                updatedFilters = [...selectedFilters, newItem];
            }
            setSelectedFilters(updatedFilters);
        } else {                        // for other values
            const newItem = { filterKey, key: newKey, value: selectedKey };
            if (!alreadySelected) {
                setSelectedFilters((prev) => [...prev, newItem]);
            }
        }
    };

    const handleDelete = (key) => {
        const remainingFilters = selectedFilters?.filter((item) => item.key != key)
        setSelectedFilters(remainingFilters)

        if (key === 'price_range') setPriceValue(defaultPriceValue)
    }

    const handlePriceChange = (e, value) => {
        setPriceValue(value)
        handleValueSelected('price_range', '', value, true)
    }

    const formatSelectedDisplayValue = (filterKey, value) => {

        if (filterKey == 'bedrooms') {
            return `${value} BHK`
        }

        if (filterKey == 'price_range') {
            return formatIndianNumber(value.split('-')[0]) + ' - ' + formatIndianNumber(value.split('-')[1])
        }

        return value?.replace('_', ' ')
    }

    return (
        <>
            {/* Mobile: full-screen Drawer */}
            {isMobile && (
                <>
                    <Button
                        size='small'
                        variant="outlined"
                        startIcon={<TuneIcon />}
                        onClick={toggleDrawer(true)}
                    >
                        Filters
                    </Button>

                    <Drawer
                        anchor="bottom"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                height: "85%",
                                borderRadius: "16px 16px 0 0",
                                padding: '1rem 1rem'
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            startIcon={<KeyboardBackspaceIcon />}
                            onClick={toggleDrawer(false)}
                            sx={{ color: 'white', letterSpacing: '1px' }}
                        >
                            View Properties
                        </Button>
                        <FilterContent
                            selectedFilters={selectedFilters}
                            filters={filters}
                            priceValue={priceValue}
                            handlePriceChange={handlePriceChange}
                            formatSelectedDisplayValue={formatSelectedDisplayValue}
                            handleDelete={handleDelete}
                            handleValueSelected={handleValueSelected}
                        />
                    </Drawer>
                </>
            )}

            {/* for desktop */}
            {!isMobile && (
                <Box component="aside" sx={{ display: { xs: "none", md: "block" } }} className={styles.filters}>
                    <h2>
                        <TuneIcon />Filters
                    </h2>
                    <FilterContent
                        selectedFilters={selectedFilters}
                        filters={filters}
                        priceValue={priceValue}
                        handlePriceChange={handlePriceChange}
                        formatSelectedDisplayValue={formatSelectedDisplayValue}
                        handleDelete={handleDelete}
                        handleValueSelected={handleValueSelected}
                    />
                </Box>
            )}
        </>
    )
}

export default Filters