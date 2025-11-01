import { FormControl, FormLabel, TextField, Typography, Box, Select, MenuItem } from '@mui/material'
import styles from '../../PostNewProperty.module.css'

const StepBasicDetails = () => {
    return (
        <>
            <Box className={styles.form_row_wrapper}>
                {/* contact number */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Contact Number</FormLabel>
                    <TextField
                        type="tel"
                        placeholder="Enter your contact number"
                        slotProps={{
                            htmlInput: {
                                maxLength: 10
                            }
                        }}
                        size="small"
                    />
                </FormControl>

                {/* email */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Email</FormLabel>
                    <TextField
                        type="email"
                        placeholder="Enter your email number"
                        slotProps={{
                            htmlInput: {
                                maxLength: 50
                            }
                        }}
                        size="small"
                    />
                </FormControl>
            </Box>

            <Box className={styles.form_row_wrapper}>
                {/* full address */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Full Address</FormLabel>
                    <TextField
                        type="text"
                        placeholder="Enter your full address"
                        slotProps={{
                            htmlInput: {
                                maxLength: 100
                            }
                        }}
                        size="small"
                    />
                </FormControl>
            </Box>

            <Box className={styles.form_row_wrapper}>
                {/* locality */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Locality</FormLabel>
                    <TextField
                        type="text"
                        placeholder="Enter your full address"
                        slotProps={{
                            htmlInput: {
                                maxLength: 100
                            }
                        }}
                        size="small"
                    />
                </FormControl>

                {/* city */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>City</FormLabel>
                    <Select
                            labelId="demo-simple-select-label"
                            id="locality-select"
                            size="small"
                            placeholder="Select city"
                            // value={city}
                            // onChange={handleChange}
                        >
                            <MenuItem value={'noida'}>Noida</MenuItem>
                            <MenuItem value={'greater-noida'}>Greater Noida</MenuItem>
                        </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default StepBasicDetails