import { FormControl, Checkbox, Autocomplete, Chip, FormLabel, TextField, Typography, Box, Select, MenuItem, FormControlLabel, FormGroup } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { amenitiesList } from '@/constants/amenities'

const StepDetailedInfo = ({ getState, setState }) => {

    const handleAmenitiesChange = (e) => {
        const isChecked = e.target.checked
        const value = e.target.value
        if (isChecked) {
            const prevAmenities = getState?.amenities
            const newAmenities = [...prevAmenities, value]
            setState((prev) => {
                return { ...prev, amenities: newAmenities }
            })

        } else {
            const newAmenities = getState?.amenities?.filter((amenity) => amenity != value)
            setState((prev) => {
                return { ...prev, amenities: newAmenities }
            })
        }
    }

    const handleNearbyChange = (event, newValue) => {
        if (newValue.length <= 5) {
            setState((prev) => {
                return { ...prev, nearBy: newValue }
            })
        }
    };

    return (
        <>
            {/* amenities */}
            <Box className={styles.form_row_wrapper}>
                <FormControl fullWidth className={styles.form_item_wrapper}>
                    <FormLabel className={styles.radio_group_label} id="amenities-checkbox-buttons-group-label">Amenities:</FormLabel>
                    <FormGroup
                        aria-labelledby="select amenities"
                        name="amenities"
                        className={styles.checkbox_group}
                    >
                        {
                            amenitiesList?.map((amenity) => (
                                <FormControlLabel
                                    key={amenity.value}
                                    className={`${styles.checkbox_label} ${getState?.amenities?.includes(amenity?.value) ? styles.selected : ""}`}
                                    value={amenity?.value}
                                    label={amenity?.label}
                                    control={<Checkbox checked={getState?.amenities?.includes(amenity?.value)} onChange={(e) => handleAmenitiesChange(e)} />}
                                />
                            ))
                        }
                    </FormGroup>
                </FormControl>
            </Box>

            {/* near by */}
            <Box className={styles.form_row_wrapper}>
                <FormControl fullWidth className={styles.form_item_wrapper}>
                    <FormLabel className={styles.radio_group_label} id="nearby-buttons-group-label">Nearby Areas or Landmarks:</FormLabel>
                    <Autocomplete
                        multiple
                        freeSolo
                        id="nearby-areas"
                        value={getState?.nearBy}
                        onChange={handleNearbyChange}
                        options={[]}
                        renderValue={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip
                                    key={option}
                                    variant="outlined"
                                    color='primary'
                                    label={option}
                                    tabIndex={0}
                                    {...getTagProps({ index })}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder={
                                    getState?.nearBy.length >= 5
                                        ? "Maximum 5 entries allowed"
                                        : "Type and press Enter"
                                }
                            />
                        )}
                    />

                </FormControl>
            </Box>

        </>
    )
}

export default StepDetailedInfo