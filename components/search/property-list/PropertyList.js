"use client";

import { Box, Grid } from "@mui/material"
import styles from './PropertyList.module.css'
import PropertyHeader from "./SearchHeader"
import { useState } from "react"
import PropertyCard from "./PropertyCard"

export const PropertyList = () => {
    const [properties, setProperties] = useState([
        { id: 1, name: 'Charming 3-Bedroom Home', price: 450000, amenities: ['123 Willow Creek', 'Springfield'], area: 2000, bedrooms: 3, bathrooms: 2, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC82VtRh-zoVwHS9GRHCsJ8JU-O_vf6MwGYtDs6vZz3v9OrYknMbwUeHuLOBTeboToBMNdNK74hse7KzeSqi0xuuhMb-ZxVu05OWVNZ0UXNn0nIw30D1Zd_nTJi850ybEVzHxhzZyOppV-J-ovw4cw8ZIYnnPno6lyuuXFD1Lz0Zyi0uYuEIiV8UoHkLy6jKs97HHuhFwnaoP0LyTWi6JUKDsVrnyxG0UC1Ofgz3aIaxvRnMNiEGINGZRP5nB2X-kjVlEVUVAVkCTXU" },
        { id: 2, name: 'Spacious 4-Bedroom House', price: 500000, amenities: ['123 Willow Creek', 'Springfield'], area: 2000, bedrooms: 4, bathrooms: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNzz18POTFfE1oouDcffOvHEHvsBKn399Mag8duxkk-Bub5esp3kknu1XQS8XFZjipY8rFfoM1AFd1X3XNx6op74cjLPLNZJnLivsS2zO8LNAqGG2Db-46Hg69JiO2s_YxBSRBgiCg-YfrsYGagJszBImLfLbV3onsRmZhc9krsrMBFXwZNz9ZiMYmA3Nfl86txTzNCTVx8-ToH4-n9TW3PbDSmhLyL3liduvddOiDyBXE0UNcG9E6is6LJWN35PBCkjsaG6NOhH4S' },
        { id: 3, name: 'Cozy 2-Bedroom Apartment', price: 300000, amenities: ['123 Willow Creek', 'Springfield'], area: 2000, bedrooms: 4, bathrooms: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGM5RLE7D7RxTq9BEXivEYRZIlvWQsRrZvLo3vmm5Ze7Fh7TQjaNkl0Hlmg-EuD_OyURk_VA2dJ6N9DVhuLNgHSZdr7mF9T01APNHC2z8mNDbJdV380hXAntf3TYk7fWM9Bhh-JVsNTgdYsAOJoVPHTNaw5NyC49EEbETQSHQiqcDXE76os6bOo0Mx5lzxTfqYF2mcfpH5kTehgGQ1ga4EW4kFBxYFpcCWUpt8OLPtakEi0zAHeOmA_nWto0Ct-s-MVOrcjiBCd4yg' },
        { id: 4, name: 'Luxury 5-Bedroom Villa', price: 1200000, amenities: ['123 Willow Creek', 'Springfield'], area: 2000, bedrooms: 4, bathrooms: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVeS3QNkY1oLt0MsZWnRLCV-qUuypFP9bRcUJ_chheaXLwHFSK1Pjyt2Ank3drPXDUuyoR_d3p9f0K2U5Cf0Vi1pjNrquTiQ4PBLvCv3syiyTymtPV7qCL-6bZfy3HmdB1oMPXQeqsQGOlBfKroiNg1sWsK4SygMgbLWaDRdLfxSQ1ZI3ogSyEH-wyR0FqKHTjw_isifh0t3_dHBPwVdHlihYUpDUukWTSW5uC0iZta7GDp9dylfWgUbDkD8Mp2mmazzPMlBI5R5iI' }
    ])

    return (
        <Box className={styles.container}>
            <PropertyHeader />

            {/* properties */}
            {/* <Box className={styles.properties}> */}
            <Grid container spacing={4}>
                {
                    properties?.map((property) => <PropertyCard key={property.id} property={property} />)
                }
            </Grid>
            {/* </Box> */}
        </Box>
    )
}

export default PropertyList