"use client";

import { Box, Button } from "@mui/material"
import styles from '../HeroSection.module.css'
import { useState } from "react";

const Search = () => {
    const [selected, setSelected] = useState("buy");

    return (
        <Box className={styles.search_wrapper}>
            <Box className={`${styles.buy_rent_wrapper} ${selected === "rent" ? styles.rent_active : styles.buy_active}`}>

                <Box className={styles.toggle_bg}></Box>

                <Button
                    className={`${styles.toggle_btn} ${selected === "buy" ? styles.active : ""}`}
                    onClick={() => setSelected("buy")}
                >
                    Buy
                </Button>

                <Button
                    className={`${styles.toggle_btn} ${selected === "rent" ? styles.active : ""}`}
                    onClick={() => setSelected("rent")}
                >
                    Rent
                </Button>
            </Box>
        </Box>
    )
}

export default Search