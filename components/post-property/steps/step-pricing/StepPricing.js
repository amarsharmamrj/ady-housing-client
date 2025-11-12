"use client";

import { FormControl, FormLabel, TextField, Box, Select, MenuItem, FormHelperText } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const StepPricing = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState((prev) => {
            delete prev?.inValidFields[name]
            return { ...prev, [name]: value }
        })
    }

    const handleDateChange = (e) => {
        const value = e?.$d
        setState((prev) => {
            delete prev?.inValidFields['availableFrom']
            return { ...prev, availableFrom: value }
        })
    }

    return (
        <>
            <Box className={styles.form_row_wrapper}>
                {/* price */}
                <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'price') && styles.row_error}`}>
                    <FormLabel>Property Price <span className="star">*</span></FormLabel>
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
                    {Object.hasOwn(getState?.inValidFields, 'price') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.price}</FormHelperText>}
                </FormControl>
            </Box>

            <Box className={styles.form_row_wrapper}>
                {/* available from */}
                {/* {shouldVisible(getState, 'availableFrom') && */}
                <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'availableFrom') && styles.row_error}`}>
                    <FormLabel>Available From <span className="star">*</span></FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker disablePast={true} value={dayjs(getState?.availableFrom)} onChange={handleDateChange} />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
                {/* } */}
            </Box>
        </>
    )
}

export default StepPricing