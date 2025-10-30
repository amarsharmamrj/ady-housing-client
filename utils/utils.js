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