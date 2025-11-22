export const validateName = (value) => {
    if (value?.length > 50) return 'Maximum 50 characters allowed.'
    return ''
}

export const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Email should be valid.'
    return ''
}

export const validateContact = (value) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(value)) return 'Contact number should be valid.'
    return ''
}


export const validateAddress = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") return "Address is required.";
    if (trimmedValue.length < 5) return "Address must be at least 5 characters.";
    if (trimmedValue.length > 200) return "Address must within characters.";
    if (!/^[a-zA-Z0-9\s,&:./-]+$/.test(trimmedValue)) return "Address contains invalid characters.";
    return ''
}


export const validateLocality = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") return "Address is required.";
    if (trimmedValue.length < 5) return "Address must be at least 5 characters.";
    if (trimmedValue.length > 40) return "Address must be within 40 characters.";
    if (!/^[a-zA-Z0-9\s,./-]+$/.test(trimmedValue)) return "Address contains invalid characters.";
    return ''
}

export const validatePositiveNumber = (value) => {
    console.log('@@ value:', value)
    if (value < 1) return "Entered value should be positive number.";
    return ''
}

export const validateCarpetupArea = (value, builtUpArea) => {
    if (value.includes('e')) return "Entered value should be valid.";
    if (value < 1) return "Entered value should be positive number.";
    if (value > builtUpArea) return "Carpet area cannot be less than built up area.";
    return ''
}

export const validateFloors = (value, totalFloors) => {
    console.log('@@ value:', value, totalFloors)
    if (value?.length < totalFloors) return `Select all the ${totalFloors} floors.`;
    return ''
}
