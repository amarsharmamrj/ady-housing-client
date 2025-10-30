"use client";

import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Slider, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Filters.module.css'
import { filters } from '@/constants/filters';
import { useState } from 'react';
import { formatIndianNumber } from '@/utils/utils';

const marks = [
    { label: '1L', value: 100000 },
    { label: '1CR', value: 10000000 },
    { label: '2Cr', value: 20000000 },
    { label: '2Cr', value: 20000000 },
    { label: '3Cr', value: 30000000 },
    { label: '4Cr', value: 40000000 },
    { label: '5Cr+', value: 50000000 },
]

const defaultPriceValue = [100000, 20000000]

export const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [priceValue, setPriceValue] = useState(defaultPriceValue)
    const [filtersExpanded, setFiltersExpanded] = useState(false)

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
        <aside className={`${styles.filters} ${filtersExpanded ? styles.filters_padding : ''}`}>
            <Accordion defaultExpanded={filtersExpanded} onChange={() => setFiltersExpanded(!filtersExpanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={styles.filter_accordian}
                >
                    <Typography component="span" className={styles.filter_title}>Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1} mt={2}>
                        {
                            selectedFilters?.map(({ filterKey, key, value }) => {
                                return (
                                    <Chip
                                        variant="outlined"
                                        key={key}
                                        label={formatSelectedDisplayValue(filterKey, value)}
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
                                            <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1} sx={{ padding: filterKey === 'price_range' ? '0 0.5rem' : '0' }}>
                                                {
                                                    filterKey === 'price_range' ? (
                                                        <Slider
                                                            getAriaLabel={() => 'Temperature range'}
                                                            value={priceValue}
                                                            onChange={handlePriceChange}
                                                            valueLabelDisplay="auto"
                                                            getAriaValueText={() => 'value'}
                                                            min={100000}
                                                            max={50000000}
                                                            step={100000}
                                                            valueLabelFormat={formatIndianNumber}
                                                            marks={marks}
                                                            defaultValue={[100000, 2000000]}
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
                </AccordionDetails>
            </Accordion>
        </aside>
    )
}

export default Filters