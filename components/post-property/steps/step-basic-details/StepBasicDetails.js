import { FormControl, FormLabel, TextField, Box, Select, MenuItem } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { areaUnits } from '@/constants/area-units'
import { formFields } from '@/constants/post-property-form'
import { shouldVisible } from '@/utils/utils'

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
            {shouldVisible(getState, 'name') &&
                <Box className={styles.form_row_wrapper}>
                    {/* contact person name */}
                    <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                        <FormLabel>Contact Person Name</FormLabel>
                        <TextField
                            type="text"
                            name="name"
                            value={getState?.name}
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
            }

            <Box className={styles.form_row_wrapper}>
                {/* contact number */}
                {shouldVisible(getState, 'contact') &&
                    <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                        <FormLabel>Contact Number</FormLabel>
                        <TextField
                            type="tel"
                            name="contact"
                            value={getState?.contact}
                            onChange={handleOnChange}
                            placeholder="Enter contact number"
                            slotProps={{
                                htmlInput: {
                                    maxLength: 10
                                }
                            }}
                            size="small"
                        />
                    </FormControl>
                }

                {/* email */}
                {shouldVisible(getState, 'email') &&
                    <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            type="email"
                            name="email"
                            value={getState?.email}
                            onChange={handleOnChange}
                            placeholder="Enter email"
                            slotProps={{
                                htmlInput: {
                                    maxLength: 50
                                }
                            }}
                            size="small"
                        />
                    </FormControl>
                }
            </Box>

            {shouldVisible(getState, 'address') &&
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
            }

            <Box className={styles.form_row_wrapper}>
                {/* locality */}
                {shouldVisible(getState, 'locality') &&
                    <FormControl fullWidth variant="outlined" className={styles.form_item_wrapper}>
                        <FormLabel>Locality</FormLabel>
                        <TextField
                            type="text"
                            name="locality"
                            value={getState?.locality}
                            onChange={handleOnChange}
                            placeholder="Enter locality"
                            slotProps={{
                                htmlInput: {
                                    maxLength: 100
                                }
                            }}
                            size="small"
                        />
                    </FormControl>
                }

                {/* city */}
                {shouldVisible(getState, 'city') &&
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
                }
            </Box>

            <Box className={styles.form_row_wrapper}>
                {/* built-up area */}
                {shouldVisible(getState, 'builtUpArea') &&
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
                }

                {/* carpet area */}
                {shouldVisible(getState, 'carpetArea') &&
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
                }

                {/* Unit */}
                {shouldVisible(getState, 'unit') &&
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
                }
            </Box>
        </>
    )
}

export default StepBasicDetails