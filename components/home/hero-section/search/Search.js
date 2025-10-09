"use client";
import React, { useEffect } from 'react'
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Popover, Select, TextField, Typography } from "@mui/material";
import styles from "./search.module.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    const [selected, setSelected] = useState("buy");
    const [city, setCity] = React.useState('greater-noida');
    const [open, setOpen] = useState(false)
    const id = open ? "simple-popover" : undefined;

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <Box className={styles.search_wrapper}>

            {/* buy, rent button wrapper */}
            <Box
                className={`${styles.buy_rent_wrapper} ${selected === "rent" ? styles.right : styles.left}`}>
                <Box className={styles.buy_rent_inner_wrapper}>
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

            {/* city, locality and search button */}
            <Box className={styles.city_locality_search_wrapper}>

                {/* city */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl label="" fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            label="Age"
                            onChange={handleChange}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "& .MuiSelect-select": {
                                    outline: "none",
                                    paddingLeft: '0'
                                },
                            }}
                        >
                            <MenuItem value={'noida'}>Noida</MenuItem>
                            <MenuItem value={'greater-noida'}>Greater Noida</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* locality */}
                <TextField
                    className={styles.search_input}
                    id="outlined-basic"
                    variant="outlined"
                    autoComplete='off'
                    placeholder='Search for locality, project...'
                    onClick={(e) => setOpen(!open)}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#acacaf' }} />
                                </InputAdornment>
                            )
                        }
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "none",
                            },
                            "&:hover fieldset": {
                                border: "none",
                            },
                            "&.Mui-focused fieldset": {
                                border: "none",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            outline: "none",
                        },
                    }}
                />

                {/* search */}
                <Button
                    variant='contained'
                    className={styles.search_button}
                >
                    Search
                </Button>
            </Box>

            {/* search results wrapper */}
           
            <Box className={`${styles.search_result_wrapper} ${open ? styles.active : ''}`}>
                <ul>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                    <li>result</li>
                </ul>
            </Box>

        </Box>
    );
};

export default Search;
