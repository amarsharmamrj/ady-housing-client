export const formFields = {
    rent: {
        residential: {
            propertyType: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
            name: '',
            city: '',
            fullAddress: '',
            locality: '',
            bhk: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK', '5BHK'],
            builtupArea: '',
            unit: '',
            furnishType: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
            furnishings: ['Dining Table', 'Washing Machine', 'Cupboard', 'Sofa', 'Microwave', 'Stove', 'Fridge', 'Water Purifier', 'Gas Pipeline', 'Chimney', 'Modular Kitchen', 'Fan', 'Light', 'AC', 'Wardrobe', 'TV', 'Bed', 'Gyser'],   // only when furnishType is furnished, semi-furnished
            amenities: ['Power Backup', 'Swimming Pool', 'Gym', 'Lift', 'Garden', 'Sports', 'Kids Area', 'CCTV', 'Club House', 'Community Hall', 'Water Supply'],
            price: '',   // rent monthly
            availableFrom: '',
            securityDeposit: ['None', '1 month', '2 month', 'custom']   // if custom => input for it 
        },
        commercial: {
            propertyType: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
            name: '',
            city: '',
            fullAddress: '',
            locality: '',
            possessionStatus: ['Ready to move', 'Under construction'],
            availableFrom: '',
            zoneType: ['Industrial', 'Commercial', 'Residential', 'Special economic zone', 'Open Spaces', 'Agricultural zone', 'Others'], 
            propertyCondition: ['Ready to use', 'Bare shell'],  // if ready to use => carpet area
            builtupArea: '',
            carpetArea: '',
            unit: '',
            ownership: ['Freehold', 'Leasehold', 'Cooperative Society', 'Power of attorney'],
            totalFloors: '',
            floors: [1, 2, 5, 100], // dropdown list length should depend on totalFloors,
            price: ''    // rent yearly
        }
    },
    sell: {
        residential: {
            propertyType: ['Apartment', 'Independent House', 'Duplex', 'Independent Floor', 'Villa', 'Penthouse', 'Studio', 'Farm House'],
            name: '',
            city: '',
            fullAddress: '',
            locality: '',
            bhk: ['1RK', '1BHK', '2BHK', '+3BHK'],
            builtupArea: '',
            unit: '',
            furnishType: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
            furnishings: ['Dining Table', 'Washing Machine', 'Cupboard', 'Sofa', 'Microwave', 'Stove', 'Fridge', 'Water Purifier', 'Gas Pipeline', 'Chimney', 'Modular Kitchen', 'Fan', 'Light', 'AC', 'Wardrobe', 'TV', 'Bed', 'Gyser'],   // only when furnishType is furnished, semi-furnished
            amenities: ['Power Backup', 'Swimming Pool', 'Gym', 'Lift', 'Garden', 'Sports', 'Kids Area', 'CCTV', 'Club House', 'Community Hall', 'Water Supply'],
            price: '',   // price
            availableFrom: '',
        },
        commercial: {
            propertyType: ['Office', 'Rental Shop', 'Showroom', 'Ware House', 'Plot', 'Others'],
            name: '',
            city: '',
            fullAddress: '',
            locality: '',
            possessionStatus: ['Ready to move', 'Under construction'],
            availableFrom: '',
            zoneType: ['Industrial', 'Commercial', 'Residential', 'Special economic zone', 'Open Spaces', 'Agricultural zone', 'Others'], 
            propertyCondition: ['Ready to use', 'Bare shell'],  // if ready to use => carpet area
            builtupArea: '',
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