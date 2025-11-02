import { FormControl, FormLabel, TextField, Typography, Box, Select, MenuItem } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { areaUnits } from '@/constants/area-units'

const StepBasicDetails = ({ getState, setState }) => {

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
                {/* contact person name */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Contact Person Name</FormLabel>
                    <TextField
                        type="text"
                        name="contactName"
                        value={getState?.contactName}
                        onChange={handleOnChange}
                        placeholder="Enter contact person name"
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
                {/* contact number */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Contact Number</FormLabel>
                    <TextField
                        type="tel"
                        name="contactNumber"
                        value={getState?.contactNumber}
                        onChange={handleOnChange}
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
                        name="email"
                        value={getState?.email}
                        onChange={handleOnChange}
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
                        name="address"
                        value={getState?.address}
                        onChange={handleOnChange}
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
                        name="locality"
                        value={getState?.locality}
                        onChange={handleOnChange}
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
                        value={getState?.city}
                        name="city"
                        onChange={handleOnChange}
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

            <Box className={styles.form_row_wrapper}>
                {/* built-up area */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Built-up Area</FormLabel>
                    <TextField
                        type="number"
                        name="builtUpArea"
                        value={getState?.builtUpArea}
                        onChange={handleOnChange}
                        placeholder="e.g., 1200"
                        slotProps={{
                            htmlInput: {
                                maxLength: 15
                            }
                        }}
                        size="small"
                    />
                </FormControl>

                {/* carpet area */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Carpet Area</FormLabel>
                    <TextField
                        type="number"
                        name="carpetArea"
                        value={getState?.carpetArea}
                        onChange={handleOnChange}
                        placeholder="e.g., 1000"
                        slotProps={{
                            htmlInput: {
                                maxLength: 15
                            }
                        }}
                        size="small"
                    />
                </FormControl>

                {/* Unit */}
                <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                    <FormLabel>Unit</FormLabel>
                    <Select
                        labelId="unit-label"
                        id="unit-select"
                        size="small"
                        name="unit"
                        value={getState?.unit || ""}
                        onChange={handleOnChange}
                        placeholder="Select unit"
                    >
                        <MenuItem disabled value="">
                            <em>Select unit</em>
                        </MenuItem>
                        {areaUnits?.map((unit) => <MenuItem value={unit.value}>{unit.label}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default StepBasicDetails