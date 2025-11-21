import { Box, Button, Checkbox, Drawer, FormControl, FormControlLabel, FormGroup, FormLabel, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from '../../PostNewProperty.module.css'
import { formFields } from "@/constants/post-property-form";

const FurnishingsDrwaer = ({ open, toggleDrawer, getState, setState, type = 'societyAmenities' }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleFurnishingsChange = (e) => {
        const isChecked = e.target.checked
        const value = e.target.value
        if (isChecked) {
            const prevFurnishings = getState?.[type]
            const newFurnishings = [...prevFurnishings, value]
            setState((prev) => {
                return { ...prev, [type]: newFurnishings }
            })

        } else {
            const newFurnishings = getState?.[type]?.filter((amenity) => amenity != value)
            setState((prev) => {
                return { ...prev, [type]: newFurnishings }
            })
        }
        console.log('@@ getState:', getState)
    }

    return (
        <Drawer
            anchor={isMobile ? 'bottom' : 'right'}
            open={open}
            onClose={toggleDrawer(false)}
            slotProps={{
                paper: {
                    sx: {
                        height: isMobile ? "80%" :  "100%",
                        width: isMobile ? "100%" : "45%",
                        borderRadius: isMobile ? "1rem 1rem 0 0" : "0",
                        padding: isMobile ? '1rem' : '2rem',
                    },
                }
            }}
        >
            <Button
                variant="contained"
                startIcon={<KeyboardBackspaceIcon />}
                onClick={toggleDrawer(false)}
                sx={{ color: 'white', letterSpacing: '1px' }}
            >
                Continue to Form
            </Button>

            <FormControl fullWidth className={`${styles.form_item_wrapper}`}>
                <FormGroup
                    aria-labelledby="select amenities"
                    name="amenities"
                    className={`${styles.drawer_checkbox_group} ${styles.furnishings}`}
                >
                    {
                        formFields?.lookingTo?.rent?.propertyCategory?.residential?.[type]?.map((item) => {
                            return (
                                <FormControlLabel
                                    key={item}
                                    className={`${styles.drawer_checkbox_label} ${getState?.[type]?.includes(item) ? styles.selected : ""}`}
                                    value={item}
                                    label={item}
                                    control={<Checkbox checked={getState?.[type]?.includes(item)} onChange={(e) => handleFurnishingsChange(e)} />}
                                />

                            )
                        })
                    }

                </FormGroup>
            </FormControl>

        </Drawer>
    )
}

export default FurnishingsDrwaer