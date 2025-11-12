import { formFields } from "@/constants/post-property-form";
import { formStepStates } from "@/constants/post-property-step-states";
import { isTimeView } from "@mui/x-date-pickers/internals";
import { validateAddress, validateBuiltupArea, validateContact, validateEmail, validateLocality, validateName } from './validation'

export const formatCurrency = (amount = 0) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

export const formatIndianNumber = (num) => {
    if (num >= 1e7) {
        return (num / 1e7).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + ' ' + 'Cr';
    } else if (num >= 1e5) {
        return (num / 1e5).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + ' ' + 'L';
    } else {
        return num.toLocaleString('en-IN');
    }
}

export const isMobile = () => {
    return window?.innerWidth < 600 ? true : false
}

export const shouldVisible = (getState, field) => {
    return Object.hasOwn(formFields.lookingTo[getState?.lookingTo]?.propertyCategory[getState?.propertyCategory], field)
}

export const validateStepFields = (step, formStates, excludeFields) => {
    const currentStep = `step${step + 1}`
    const inValidFields = {}

    for (let key in formStepStates[currentStep]) {
        if (formStates[key] == '' && !excludeFields?.includes(key)) {
            inValidFields[key] = 'This field is required.'
        }

        const value = formStates[key]
        if (formStates[key] != '') {

            if (key == 'name') {
                const error = validateName(value);
                if (error) inValidFields[key] = error;
            }

            if (key == 'contact') {
                const error = validateContact(value);
                if (error) inValidFields[key] = error;
            }

            if (key == 'email') {
                const error = validateEmail(value);
                if (error) inValidFields[key] = error;
            }

            if (key == 'address') {
                const error = validateAddress(value);
                if (error) inValidFields[key] = error;
            }

            if (key == 'locality') {
                const error = validateLocality(value);
                if (error) inValidFields[key] = error;
            }

            if (key == 'builtUpArea' || key == 'price') {
                const error = validateBuiltupArea(value);
                if (error) inValidFields[key] = error;
            }
        }
    }
    return inValidFields
}