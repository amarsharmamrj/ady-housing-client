import { FormControl, Checkbox, Autocomplete, Chip, FormLabel, TextField, Typography, Box, Select, MenuItem, FormControlLabel, FormGroup, RadioGroup, Radio, Button, IconButton, Link, ListItemText } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { amenitiesList } from '@/constants/amenities'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import FurnishingsDrwaer from '../furnishings-drawer/FurnishingsDrawer';
import { shouldVisible } from '@/utils/utils';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { formFields } from '@/constants/post-property-form';
import { TryRounded } from '@mui/icons-material';

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
                delete prev?.inValidFields[name]
                return { ...prev, [name]: value }
            })
        }
    }

    const handleFloorsChange = (e) => {
        const value = e.target.value

        if (value?.length <= getState?.totalFloors) {
            setState((prev) => {
                return { ...prev, floors: value }
            })
        }

        console.log('@@:', value)
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
            {console.log('@@ ##:', getState?.inValidFields)}

            {/* furnish type */}
            {shouldVisible(getState, 'furnishings') && (
                <Box className={styles.form_row_wrapper}>
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'furnishType') && styles.row_error}`}>
                        <FormLabel className={styles.radio_group_label} id="furnishType-radio-buttons-group-label">Furnish Type <span className="star">*</span></FormLabel>
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
            )}

            {/* furnishings */}
            {
                getState?.furnishType != 'unfurnished' && shouldVisible(getState, 'furnishings') && (
                    <Box className={styles.furnishings_button_wrapper}>
                        <FormLabel className={`${styles.radio_group_label} ${styles.row}`} id="furnishings-radio-buttons-group-label">
                            Furnishings:
                            <Link
                                component="button"
                                variant="body"
                                onClick={() => openDrawer('furnishings')}
                            >
                                {`${getState?.furnishings?.length > 0 ? 'Edit' : 'Add'} Furnishigs`}
                                {getState?.furnishings?.length > 0 ? <EditIcon /> : <AddIcon />}
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
                        <Box className={`${styles.radio_group_label} ${styles.row}`} id="societyAmenities-radio-buttons-group-label">
                            Society Amenities:
                            <Link
                                component="button"
                                variant="body"
                                onClick={() => openDrawer('societyAmenities')}
                            >
                                {`${getState?.societyAmenities?.length > 0 ? 'Edit' : 'Add'} Society Amenities`}
                                {getState?.societyAmenities?.length > 0 ? <EditIcon /> : <AddIcon />}
                            </Link>
                        </Box>
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
            {
                shouldVisible(getState, 'nearbyList') && (
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
                )}

            {/* possession status */}
            {shouldVisible(getState, 'possessionStatus') && (
                <Box className={styles.form_row_wrapper}>
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'possessionStatus') && styles.row_error}`}>
                        <FormLabel className={styles.radio_group_label} id="possessionStatus-radio-buttons-group-label">Possession Status <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select possessionStatus"
                            name="possessionStatus"
                            value={getState?.possessionStatus}
                            onChange={handleOnChange}
                            className={styles.checkbox_group}
                        >
                            {
                                formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.possessionStatus?.map((item) => {
                                    return (
                                        <FormControlLabel
                                            key={item}
                                            className={`${styles.radio_label} ${getState?.possessionStatus === item ? styles.selected : ""}`}
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    )
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            )}

            {/* zoneType */}
            {shouldVisible(getState, 'zoneType') && (
                <Box className={styles.form_row_wrapper}>
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'zoneType') && styles.row_error}`}>
                        <FormLabel className={styles.radio_group_label} id="zoneType-radio-buttons-group-label">Zone Type <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select zone type"
                            name="zoneType"
                            value={getState?.zoneType}
                            onChange={handleOnChange}
                            className={styles.checkbox_group}
                        >
                            {
                                formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.zoneType?.map((item) => {
                                    return (
                                        <FormControlLabel
                                            key={item}
                                            className={`${styles.checkbox_label} ${getState?.zoneType === item ? styles.selected : ""}`}
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    )
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            )}


            {/*  property condition */}
            {shouldVisible(getState, 'propertyCondition') && (
                <Box className={styles.form_row_wrapper}>
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'propertyCondition') && styles.row_error}`}>
                        <FormLabel className={styles.radio_group_label} id="propertyCondition-radio-buttons-group-label">Property Condition <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select propertyCondition"
                            name="propertyCondition"
                            value={getState?.propertyCondition}
                            onChange={handleOnChange}
                            className={styles.checkbox_group}
                        >
                            {
                                formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.propertyCondition?.map((item) => {
                                    return (
                                        <FormControlLabel
                                            key={item}
                                            className={`${styles.radio_label} ${getState?.propertyCondition === item ? styles.selected : ""}`}
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    )
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            )}

            {/*  ownership */}
            {shouldVisible(getState, 'ownership') && (
                <Box className={styles.form_row_wrapper}>
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'ownership') && styles.row_error}`}>
                        <FormLabel className={styles.radio_group_label} id="ownership-radio-buttons-group-label">Ownership <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select ownership"
                            name="ownership"
                            value={getState?.ownership}
                            onChange={handleOnChange}
                            className={styles.checkbox_group}
                        >
                            {
                                formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.ownership?.map((item) => {
                                    return (
                                        <FormControlLabel
                                            key={item}
                                            className={`${styles.radio_label} ${getState?.ownership === item ? styles.selected : ""}`}
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    )
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                </Box>
            )}

            <Box className={styles.form_row_wrapper}>
                {/* built-up area */}
                {shouldVisible(getState, 'totalFloors') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'totalFloors') && styles.row_error}`}>
                        <FormLabel>Total Floors <span className="star">*</span></FormLabel>
                        <TextField
                            type="number"
                            name="totalFloors"
                            value={getState?.totalFloors}
                            onChange={handleOnChange}
                            placeholder="e.g., 2"
                            slotProps={{
                                htmlInput: {
                                    maxLength: 15
                                }
                            }}
                            size="medium"
                        />
                    </FormControl>
                }

                {/* Floors */}
                {shouldVisible(getState, 'floors') &&
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'floors') && styles.row_error}`}>
                        <FormLabel>Floors <span className="star">*</span></FormLabel>
                        <Select
                            labelId="floors-label"
                            id="floors-select"
                            size="medium"
                            name="floors"
                            multiple
                            value={getState?.floors || []}
                            renderValue={(selected) => selected.join(', ')}
                            onChange={handleFloorsChange}
                            placeholder="Select floors"
                        >
                            <MenuItem disabled value="">
                                <em>Select floors</em>
                            </MenuItem>
                            {Array.from({ length: Number(getState?.totalFloors) + 3 }, (_, i) => i - 2)?.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <Checkbox checked={getState?.floors?.includes(item)} />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                }
            </Box>

        </>
    )
}

export default StepDetailedInfo