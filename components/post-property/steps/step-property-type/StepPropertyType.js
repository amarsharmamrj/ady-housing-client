import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import styles from '../../PostNewProperty.module.css'
import { formFields } from "@/constants/post-property-form"

const StepPropertyType = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'propertyCategory') {
            setState((prev) => {
                delete prev?.inValidFields[name]
                return { ...prev, propertySubCategory: '', [name]: value }
            })
        } else {
            setState((prev) => {
                delete prev?.inValidFields[name]
                return { ...prev, [name]: value }
            })
        }
    }

    const error = 'This field is required.'

    return (
        <>
            {/* you want to */}
            <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'lookingTo') && styles.row_error}`}>
                <FormLabel className={styles.radio_group_label} id="property-type-radio-buttons-group-label">You want to <span className="star">*</span></FormLabel>
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
            <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'propertyCategory') && styles.row_error}`}>
                <FormLabel className={styles.radio_group_label} id="property-category-radio-buttons-group-label">Property Category <span className="star">*</span></FormLabel>
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
                        label="Residential"
                    />
                    <FormControlLabel
                        className={`${styles.radio_label} ${getState?.propertyCategory === "commercial" ? styles.selected : ""}`}
                        value="commercial"
                        control={<Radio />}
                        label="Commercial"
                    />
                </RadioGroup>
            </FormControl>

            {/* property sub category */}

            {
                getState?.lookingTo !== '' && getState?.propertyCategory !== '' && (
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'propertySubCategory') && styles.row_error}`}>
                        <FormLabel className={styles.checkbox_group_label} id="property-sub-category-radio-buttons-group-label">Property Sub-Category <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select property sub-category"
                            name="propertySubCategory"
                            value={getState?.propertySubCategory}
                            onChange={handleOnChange}
                            className={styles.checkbox_group}
                        >
                            {formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.propertySubCategory?.map((item) => (
                                <FormControlLabel
                                    key={item}
                                    className={`${styles.checkbox_label} ${getState?.propertySubCategory === item ? styles.selected : ""}`}
                                    value={item}
                                    control={<Radio />}
                                    label={item}
                                />
                            )
                            )}
                        </RadioGroup>
                    </FormControl>
                )
            }
        </>
    )
}

export default StepPropertyType