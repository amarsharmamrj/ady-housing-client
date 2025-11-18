import { FormControl, FormLabel, TextField, Box, Select, MenuItem, FormHelperText } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { areaUnits } from '@/constants/area-units'
import { shouldVisible } from '@/utils/utils'

const StepBasicDetails = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState((prev) => {
            if (value !== '') delete prev?.inValidFields[name]
            return { ...prev, [name]: value }
        })
    }

    console.log('@@ invalidFields:', getState?.inValidFields)

    return (
        <>
            {shouldVisible(getState, 'name') &&
                <Box className={styles.form_row_wrapper}>
                    {/* contact person name */}
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'name') && styles.row_error}`}>
                        <FormLabel>Contact Person Name <span className="star">*</span></FormLabel>
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
                        {Object.hasOwn(getState?.inValidFields, 'name') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.name}</FormHelperText>}
                    </FormControl>
                </Box>
            }

            <Box className={styles.form_row_wrapper}>
                {/* contact number */}
                {shouldVisible(getState, 'contact') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'contact') && styles.row_error}`}>
                        <FormLabel>Contact Number <span className="star">*</span></FormLabel>
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
                        {Object.hasOwn(getState?.inValidFields, 'contact') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.contact}</FormHelperText>}
                    </FormControl>
                }

                {/* email */}
                {shouldVisible(getState, 'email') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'email') && styles.row_error}`}>
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
                        {Object.hasOwn(getState?.inValidFields, 'email') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.email}</FormHelperText>}
                    </FormControl>
                }
            </Box>

            {shouldVisible(getState, 'buildingName') &&
                <Box className={styles.form_row_wrapper}>
                    {/* full buildingName */}
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'buildingName') && styles.row_error}`}>
                        <FormLabel>Building / Apartment / Society Name <span className="star">*</span></FormLabel>
                        <TextField
                            type="text"
                            name="buildingName"
                            value={getState?.buildingName}
                            onChange={handleOnChange}
                            placeholder="Enter your full buildingName"
                            slotProps={{
                                htmlInput: {
                                    maxLength: 100
                                }
                            }}
                            size="small"
                        />
                        {Object.hasOwn(getState?.inValidFields, 'buildingName') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.buildingName}</FormHelperText>}
                    </FormControl>

                </Box>
            }

            {shouldVisible(getState, 'address') &&
                <Box className={styles.form_row_wrapper}>
                    {/* full address */}
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'address') && styles.row_error}`}>
                        <FormLabel>Full Address <span className="star">*</span></FormLabel>
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
                        {Object.hasOwn(getState?.inValidFields, 'address') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.address}</FormHelperText>}
                    </FormControl>

                </Box>
            }

            <Box className={styles.form_row_wrapper}>
                {/* locality */}
                {shouldVisible(getState, 'locality') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'locality') && styles.row_error}`}>
                        <FormLabel>Locality <span className="star">*</span></FormLabel>
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
                        {Object.hasOwn(getState?.inValidFields, 'locality') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.locality}</FormHelperText>}
                    </FormControl>
                }

                {/* city */}
                {shouldVisible(getState, 'city') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'city') && styles.row_error}`}>
                        <FormLabel>City <span className="star">*</span></FormLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="locality-select"
                            value={getState?.city}
                            name="city"
                            onChange={handleOnChange}
                            size="small"
                            placeholder="Select city"
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
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'builtUpArea') && styles.row_error}`}>
                        <FormLabel>Built-up Area <span className="star">*</span></FormLabel>
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
                        {Object.hasOwn(getState?.inValidFields, 'builtUpArea') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.builtUpArea}</FormHelperText>}
                    </FormControl>
                }

                {/* carpet area */}
                {shouldVisible(getState, 'carpetArea') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper}`}>
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
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'unit') && styles.row_error}`}>
                        <FormLabel>Unit <span className="star">*</span></FormLabel>
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