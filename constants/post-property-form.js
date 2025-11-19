export const formFields = {
    lookingTo: {
        rent: {
            propertyCategory: {
                residential: {
                    propertySubCategory: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    buildingName: '',
                    address: '',
                    locality: '',
                    bhk: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK', '6+ BHK'],
                    builtUpArea: '',
                    unit: '',
                    furnishType: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
                    furnishings: ['Dining Table', 'Washing Machine', 'Cupboard', 'Sofa', 'Microwave', 'Stove', 'Fridge', 'Water Purifier', 'Gas Pipeline', 'Chimney', 'Modular Kitchen', 'Fan', 'Light', 'AC', 'Wardrobe', 'TV', 'Bed', 'Gyser'],   // only when furnishType is furnished, semi-furnished
                    societyAmenities: ['Power Backup', 'Swimming Pool', 'Gym', 'Lift', 'Garden', 'Sports', 'Kids Area', 'CCTV', 'Club House', 'Community Hall', 'Water Supply'],
                    nearbyList: [],
                    price: '',   // rent monthly
                    availableFrom: '',
                    securityDepositType: ['None', '1 Month', '2 Month', 'Custom']   // if custom => input for it 
                },
                commercial: {
                    propertySubCategory: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    buildingName: '',
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
                    floors: [1, 2, 5, 100],
                    price: ''
                }
            }
        },
        sell: {
            propertyCategory: {
                residential: {
                    propertySubCategory: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    buildingName: '',
                    address: '',
                    locality: '',
                    bhk: ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK', '6+ BHK'],
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
                    propertySubCategory: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
                    name: '',
                    contact: '',
                    email: '',
                    city: '',
                    buildingName: '',
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