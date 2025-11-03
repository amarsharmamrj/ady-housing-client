"use client";

import { FormControl, FormLabel, TextField, Box, Select, MenuItem } from '@mui/material'
import styles from '../../PostNewProperty.module.css'

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
                {/* built-up area */}
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
                        size="small"
                    />
                </FormControl>
            </Box>
        </>
    )
}

export default StepPricing