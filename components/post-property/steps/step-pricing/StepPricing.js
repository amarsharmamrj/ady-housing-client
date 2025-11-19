"use client";

import { FormControl, FormLabel, TextField, Box, Select, MenuItem, FormHelperText, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import styles from '../../PostNewProperty.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { formFields } from '@/constants/post-property-form';
import { shouldVisible } from '@/utils/utils';

const StepPricing = ({ getState, setState }) => {

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState((prev) => {
            delete prev?.inValidFields[name]
            return { ...prev, [name]: value }
        })
    }

    const handleSecurityDepositTypeOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        let depositValue = ''
        if (value == 'None') depositValue = 0
        if (value == '1 Month') depositValue = Number(getState?.price) * 1
        if (value == '2 Month') depositValue = Number(getState?.price) * 2

        if (value === 'Custom') {
            setState((prev) => {
                delete prev?.inValidFields[name]
                return { ...prev, [name]: value }
            })
        } else {
            setState((prev) => {
                delete prev?.inValidFields[name]
                return { ...prev, [name]: value, securityDeposit: depositValue }
            })
        }
    }

    const handleDateChange = (e) => {
        const value = e?.$d
        setState((prev) => {
            delete prev?.inValidFields['availableFrom']
            return { ...prev, availableFrom: value }
        })
    }

    return (
        <>
            <Box className={styles.form_row_wrapper}>
                {/* price */}
                <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'price') && styles.row_error}`}>
                    <FormLabel> {getState?.lookingTo === 'rent' ? 'Rent (per month)' :'Property Price'} <span className="star">*</span></FormLabel>
                    <TextField
                        type="number"
                        name="price"
                        value={getState?.price}
                        onChange={handleOnChange}
                        placeholder="e.g., 450000"
                        slotProps={{
                            htmlInput: {
                                maxLength: 20
                            }
                        }}
                        size="medium"
                    />
                    {Object.hasOwn(getState?.inValidFields, 'price') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.price}</FormHelperText>}
                </FormControl>
            </Box>

            {/* security deposit */}
            {
                shouldVisible(getState, 'securityDepositType') && (
                    <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'securityDepositType') && styles.row_error}`}>
                        <FormLabel className={styles.checkbox_group_label} id="security-deposit-radio-buttons-group-label">Security Deposit <span className="star">*</span></FormLabel>
                        <RadioGroup
                            aria-labelledby="select property sub-category"
                            name="securityDepositType"
                            value={getState?.securityDepositType}
                            onChange={handleSecurityDepositTypeOnChange}
                            className={styles.checkbox_group}
                        >
                            {formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory]?.securityDepositType?.map((item) => (
                                <FormControlLabel
                                    key={item}
                                    className={`${styles.checkbox_label} ${getState?.securityDepositType === item ? styles.selected : ""}`}
                                    value={item}
                                    control={<Radio />}
                                    label={item}
                                />
                            )
                            )}
                        </RadioGroup>
                    </FormControl>
                )}

            {
                getState?.securityDepositType === 'Custom' && (
                    <Box className={styles.form_row_wrapper}>
                        {/* price */}
                        <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'securityDeposit') && styles.row_error}`}>
                            <FormLabel>Deposit Value <span className="star">*</span></FormLabel>
                            <TextField
                                type="number"
                                name="securityDeposit"
                                value={getState?.securityDeposit}
                                onChange={handleOnChange}
                                placeholder="e.g., 10000"
                                slotProps={{
                                    htmlInput: {
                                        maxLength: 20
                                    }
                                }}
                                size="medium"
                            />
                            {Object.hasOwn(getState?.inValidFields, 'securityDeposit') && <FormHelperText className={styles.errorText}>{getState?.inValidFields?.securityDeposit}</FormHelperText>}
                        </FormControl>
                    </Box>

                )
            }

            <Box className={styles.form_row_wrapper}>
                {/* available from */}
                {/* {shouldVisible(getState, 'availableFrom') && */}
                <FormControl fullWidth className={`${styles.form_item_wrapper} ${Object.hasOwn(getState?.inValidFields, 'availableFrom') && styles.row_error}`}>
                    <FormLabel>Available From <span className="star">*</span></FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker disablePast={true} value={dayjs(getState?.availableFrom)} onChange={handleDateChange} />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
                {/* } */}
            </Box>
        </>
    )
}

export default StepPricing