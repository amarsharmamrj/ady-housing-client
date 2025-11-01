import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import styles from '../../PostNewProperty.module.css'

const StepPropertyType = ({
    propertyType, setPropertyType,
    propertyCategory, setPropertyCategory,
    propertySubCategory, setPropertySubCategory
}) => {
    return (
        <>
            {/* you want to */}
            <FormControl fullWidth className={styles.form_item_wrapper}>
                <FormLabel className={styles.radio_group_label} id="property-type-radio-buttons-group-label">You want to:</FormLabel>
                <RadioGroup
                    aria-labelledby="select proper type"
                    name="property-type"
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertyType === "sell" ? styles.selected : ""}`}
                        value="sell"
                        control={<Radio />}
                        label="Sell" />
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertyType === "buy" ? styles.selected : ""}`}
                        value="buy"
                        control={<Radio />}
                        label="Buy"
                    />
                </RadioGroup>
            </FormControl>

            {/* property category */}
            <FormControl fullWidth className={styles.form_item_wrapper}>
                <FormLabel className={styles.radio_group_label} id="property-category-radio-buttons-group-label">Property Category:</FormLabel>
                <RadioGroup
                    aria-labelledby="select property category"
                    name="property-category"
                    value={propertyCategory}
                    onChange={(event) => setPropertyCategory(event.target.value)}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertyCategory === "residential" ? styles.selected : ""}`}
                        value="residential"
                        control={<Radio />}
                        label="Residential" />
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertyCategory === "commercial" ? styles.selected : ""}`}
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
                    name="property-sub-category"
                    value={propertySubCategory}
                    onChange={(event) => setPropertySubCategory(event.target.value)}
                    className={styles.radio_group}
                >
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertySubCategory === "flat" ? styles.selected : ""}`}
                        value="flat"
                        control={<Radio />}
                        label="Flat / Apartment" />
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertySubCategory === "house" ? styles.selected : ""}`}
                        value="house"
                        control={<Radio />}
                        label="House / Villa"
                    />
                    <FormControlLabel
                        className={`${styles.radio_label} ${propertySubCategory === "plot" ? styles.selected : ""}`}
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