export const formFields = {
    lookingTo: {
        rent: {
            propertyCategory: {
                residential: {
                    propertyType: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    address: '',
                    locality: '',
                    bhk: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK', '5BHK'],
                    builtUpArea: '',
                    unit: '',
                    furnishType: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
                    furnishings: ['Dining Table', 'Washing Machine', 'Cupboard', 'Sofa', 'Microwave', 'Stove', 'Fridge', 'Water Purifier', 'Gas Pipeline', 'Chimney', 'Modular Kitchen', 'Fan', 'Light', 'AC', 'Wardrobe', 'TV', 'Bed', 'Gyser'],   // only when furnishType is furnished, semi-furnished
                    societyAmenities: ['Power Backup', 'Swimming Pool', 'Gym', 'Lift', 'Garden', 'Sports', 'Kids Area', 'CCTV', 'Club House', 'Community Hall', 'Water Supply'],
                    nearbyList: [],
                    price: '',   // rent monthly
                    availableFrom: '',
                    securityDeposit: ['None', '1 month', '2 month', 'custom']   // if custom => input for it 
                },
                commercial: {
                    propertyType: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    address: '',
                    locality: '',
                    nearbyList: [],
                    possessionStatus: ['Ready to move', 'Under construction'],
                    availableFrom: '',
                    zoneType: ['Industrial', 'Commercial', 'Residential', 'SEZ', 'Open Spaces', 'Agricultural zone', 'Others'],
                    propertyCondition: ['Ready to use', 'Bare shell'],  // if ready to use => carpet area
                    builtUpArea: '',
                    carpetArea: '',
                    unit: '',
                    ownership: ['Freehold', 'Leasehold', 'Cooperative Society', 'Power of attorney'],
                    totalFloors: '',
                    floors: [1, 2, 5, 100], // dropdown list length should depend on totalFloors,
                    price: ''    // rent yearly
                }
            }
        },
        sell: {
            propertyCategory: {
                residential: {
                    propertyType: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    address: '',
                    locality: '',
                    bhk: ['1RK', '1BHK', '2BHK', '+3BHK'],
                    builtUpArea: '',
                    unit: '',
                    furnishType: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
                    furnishings: ['Dining Table', 'Washing Machine', 'Cupboard', 'Sofa', 'Microwave', 'Stove', 'Fridge', 'Water Purifier', 'Gas Pipeline', 'Chimney', 'Modular Kitchen', 'Fan', 'Light', 'AC', 'Wardrobe', 'TV', 'Bed', 'Gyser'],   // only when furnishType is furnished, semi-furnished
                    societyAmenities: ['Power Backup', 'Swimming Pool', 'Gym', 'Lift', 'Garden', 'Sports', 'Kids Area', 'CCTV', 'Club House', 'Community Hall', 'Water Supply'],
                    nearbyList: [],
                    price: '',   // price
                    availableFrom: '',
                },
                commercial: {
                    propertyType: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    address: '',
                    locality: '',
                    nearbyList: [],
                    possessionStatus: ['Ready to move', 'Under construction'],
                    zoneType: ['Industrial', 'Commercial', 'Residential', 'SEZ', 'Open Spaces', 'Agricultural zone', 'Others'],
                    propertyCondition: ['Ready to use', 'Bare shell'],  // if ready to use => carpet area
                    builtUpArea: '',
                    carpetArea: '',
                    unit: '',
                    ownership: ['Freehold', 'Leasehold', 'Cooperative Society', 'Power of attorney'],
                    totalFloors: '',
                    floors: [1, 2, 5, 100], // dropdown list length should depend on totalFloors,
                    price: '',   // price
                    availableFrom: '',
                }
            }
        }
    }
}