import { Accordion, AccordionDetails, AccordionSummary, Box,  Chip, Slider, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Filters.module.css'
import { formatIndianNumber, isMobile } from '@/utils/utils';

const marks = [
    { label: '1L', value: 100000 },
    { label: '1CR', value: 10000000 },
    { label: '2Cr', value: 20000000 },
    { label: '2Cr', value: 20000000 },
    { label: '3Cr', value: 30000000 },
    { label: '4Cr', value: 40000000 },
    { label: '5Cr+', value: 50000000 },
]

const FilterContent = ({selectedFilters, filters, priceValue, handlePriceChange, formatSelectedDisplayValue, handleDelete, handleValueSelected}) => {
    return (
          <>
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
            </>
    )
}

export default FilterContent