import { FormControl, Checkbox, Autocomplete, Chip, FormLabel, TextField, Typography, Box, Select, MenuItem, FormControlLabel, FormGroup, RadioGroup, Radio, Button, IconButton, Link } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { amenitiesList } from '@/constants/amenities'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import FurnishingsDrwaer from '../furnishings-drawer/FurnishingsDrawer';
import { shouldVisible } from '@/utils/utils';

const StepDetailedInfo = ({ getState, setState }) => {
    const [openFurnishings, setOpenFurnishings] = useState(false)
    const [amenitiesType, setAmenitiesType] = useState('furnishings')

    const toggleDrawer = (state) => () => setOpenFurnishings(state);

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name == "furnishType" && value == "unfurnished") {
            setState((prev) => {
                return { ...prev, [name]: value, furnishings: [] }
            })
        } else {
            setState((prev) => {
                return { ...prev, [name]: value }
            })
        }
    }

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

    const openDrawer = (type) => {
        setAmenitiesType(type)
        setOpenFurnishings(true)
    }

    return (
        <>

            {/* furnish type */}
            <Box className={styles.form_row_wrapper}>
                <FormControl fullWidth className={styles.form_item_wrapper}>
                    <FormLabel className={styles.radio_group_label} id="furnishType-radio-buttons-group-label">Furnish Type:</FormLabel>
                    <RadioGroup
                        aria-labelledby="select furnishType"
                        name="furnishType"
                        value={getState?.furnishType}
                        onChange={handleOnChange}
                        className={styles.radio_group}
                    >
                        <FormControlLabel
                            className={`${styles.radio_label} ${getState?.furnishType === "fully_furnished" ? styles.selected : ""}`}
                            value="fully_furnished"
                            control={<Radio />}
                            label="Fully Furnished"
                        />
                        <FormControlLabel
                            className={`${styles.radio_label} ${getState?.furnishType === "semi_furnished" ? styles.selected : ""}`}
                            value="semi_furnished"
                            control={<Radio />}
                            label="Semi Furnished"
                        />
                        <FormControlLabel
                            className={`${styles.radio_label} ${getState?.furnishType === "unfurnished" ? styles.selected : ""}`}
                            value="unfurnished"
                            control={<Radio />}
                            label="Unfurnished"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* furnishings */}
            {
                getState?.furnishType != 'unfurnished' && (
                    <Box className={styles.furnishings_button_wrapper}>
                        <FormLabel className={`${styles.radio_group_label} ${styles.row}`} id="furnishings-radio-buttons-group-label">
                            Furnishings:
                            <Link
                                component="button"
                                variant="body"
                                onClick={() => openDrawer('furnishings')}
                            >
                                {`${getState?.furnishings?.length > 0 ? 'Edit' : 'Add'} Furnishigs`}
                            </Link>
                        </FormLabel>

                        <Box className={styles.selected_furnishings}>
                            <span>{getState?.furnishings?.join(', ')}</span>
                        </Box>

                        <FurnishingsDrwaer
                            open={openFurnishings}
                            toggleDrawer={toggleDrawer}
                            getState={getState}
                            setState={setState}
                            type={amenitiesType}
                        />
                    </Box>
                )
            }

            {/* social amenities */}
            {
                shouldVisible(getState, 'societyAmenities') && (
                    <Box className={styles.furnishings_button_wrapper}>
                        <FormLabel className={`${styles.radio_group_label} ${styles.row}`} id="societyAmenities-radio-buttons-group-label">
                            Society Amenities:
                            <Link
                                component="button"
                                variant="body"
                                onClick={() => openDrawer('societyAmenities')}
                            >
                                {`${getState?.societyAmenities?.length > 0 ? 'Edit' : 'Add'} Society Furnishigs`}
                            </Link>
                        </FormLabel>
                        <Box className={styles.selected_furnishings}>
                            <span>{getState?.societyAmenities?.join(', ')}</span>
                        </Box>

                        <FurnishingsDrwaer
                            open={openFurnishings}
                            toggleDrawer={toggleDrawer}
                            getState={getState}
                            setState={setState}
                            type={amenitiesType}
                        />
                    </Box>
                )
            }

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