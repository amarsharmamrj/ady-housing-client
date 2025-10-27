"use client";

import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Slider, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Filters.module.css'
import { filters } from '@/constants/filters';
import { useState } from 'react';

export const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [priceValue, setPriceValue] = useState([10, 20])

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
    }

    const handlePriceChange = (e, value) => {
        setPriceValue(value)
        handleValueSelected('price_range', '', value, true)
    }

    return (
        <aside className={styles.filters}>
            <h2>Filters</h2>
            <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1} mt={2}>
                {
                    selectedFilters?.map(({ filterKey, key, value }) => {
                        return (
                            <Chip
                                variant="outlined"
                                key={key}
                                label={
                                    filterKey == 'bedrooms' ?
                                        `${value} BHK` :
                                        value?.replace('_', ' ')
                                }
                                color='primary'
                                onDelete={() => handleDelete(key)}
                            />
                        )
                    })
                }
            </Stack>

            <Box className={styles.filters_wrapper}>
                {
                    filters?.map(({ filterKey, filterName, values }) => {
                        return (
                            <Accordion key={filterKey} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography component="span">{filterName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1}>
                                        {
                                            filterKey === 'price_range' ? (
                                                <Slider
                                                    getAriaLabel={() => 'Temperature range'}
                                                    value={priceValue}
                                                    onChange={handlePriceChange}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={() => 'value'}
                                                />
                                            ) : (
                                                values?.map((value) => {
                                                    return (
                                                        <Chip
                                                            variant={selectedFilters.some((item) => (item.key == filterKey + value.key)) ? "filled" : "outlined"}
                                                            key={value?.key}
                                                            label={value?.value}
                                                            color='primary'
                                                            className={styles.chip}
                                                            onClick={() => handleValueSelected(filterKey, value?.key, value?.value)}
                                                        />
                                                    )
                                                })
                                            )
                                        }
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Box>
        </aside>
    )
}

export default Filters