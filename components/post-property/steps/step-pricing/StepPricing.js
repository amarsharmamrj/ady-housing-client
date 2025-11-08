"use client";

import { FormControl, FormLabel, TextField, Box, Select, MenuItem } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StepPricing = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <>
            <Box className={styles.form_row_wrapper}>
                {/* price */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Property Price</FormLabel>
                    <TextField
                        type="number"
                        name="price"
                        value={getState?.price}
                        onChange={handleOnChange}
                        placeholder="e.g., 450000"
                        slotProps={{
                            htmlInput: {
                                maxLength: 20
                            }
                        }}
                        size="medium"
                    />
                </FormControl>
            </Box>

            <Box className={styles.form_row_wrapper}>
                {/* available from */}
                {/* {shouldVisible(getState, 'availableFrom') && */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Available From:</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker disablePast={true} />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
                {/* } */}
            </Box>
        </>
    )
}

export default StepPricing