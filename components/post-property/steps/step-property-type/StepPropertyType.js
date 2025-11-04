import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import styles from '../../PostNewProperty.module.css'

const StepPropertyType = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <>
            {/* you want to */}
            <FormControl fullWidth className={styles.form_item_wrapper}>
                <FormLabel className={styles.radio_group_label} id="property-type-radio-buttons-group-label">You want to:</FormLabel>
                <RadioGroup
                    aria-labelledby="select proper type"
                    name="lookingTo"
                    value={getState?.lookingTo}
                    onChange={handleOnChange}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.lookingTo === "sell" ? styles.selected : ""}`}
                        value="sell"
                        control={<Radio />}
                        label="Sell"
                    />
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.lookingTo === "rent" ? styles.selected : ""}`}
                        value="rent"
                        control={<Radio />}
                        label="Rent"
                    />
                </RadioGroup>
            </FormControl>

            {/* property category */}
            <FormControl fullWidth className={styles.form_item_wrapper}>
                <FormLabel className={styles.radio_group_label} id="property-category-radio-buttons-group-label">Property Category:</FormLabel>
                <RadioGroup
                    aria-labelledby="select property category"
                    name="propertyCategory"
                    value={getState?.propertyCategory}
                    onChange={handleOnChange}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertyCategory === "residential" ? styles.selected : ""}`}
                        value="residential"
                        control={<Radio />}
                        label="Residential" />
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertyCategory === "commercial" ? styles.selected : ""}`}
                        value="commercial"
                        control={<Radio />}
                        label="Commercial"
                    />
                </RadioGroup>
            </FormControl>

            {/* property sub category */}
            <FormControl fullWidth className={styles.form_item_wrapper}>
                <FormLabel className={styles.radio_group_label} id="property-sub-category-radio-buttons-group-label">Property Sub-Category:</FormLabel>
                <RadioGroup
                    aria-labelledby="select property sub-category"
                    name="propertySubCategory"
                    value={getState?.propertySubCategory}
                    onChange={handleOnChange}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertySubCategory === "flat" ? styles.selected : ""}`}
                        value="flat"
                        control={<Radio />}
                        label="Flat / Apartment" />
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertySubCategory === "house" ? styles.selected : ""}`}
                        value="house"
                        control={<Radio />}
                        label="House / Villa"
                    />
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertySubCategory === "plot" ? styles.selected : ""}`}
                        value="plot"
                        control={<Radio />}
                        label="Plot / Land"
                    />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default StepPropertyType