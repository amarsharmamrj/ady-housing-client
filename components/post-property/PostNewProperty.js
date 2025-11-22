"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './PostNewProperty.module.css'
import { styled } from "@mui/material/styles";
import { CircularProgress, Paper, StepConnector, stepConnectorClasses } from '@mui/material';
import StepPropertyType from './steps/step-property-type/StepPropertyType';
import StepBasicDetails from './steps/step-basic-details/StepBasicDetails';
import StepDetailedInfo from './steps/step-detailed-info/StepDetailedInfo';
import StepPricing from './steps/step-pricing/StepPricing';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter, useSearchParams } from "next/navigation";
import { validateStepFields } from '@/utils/utils';
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack'

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 20,
        [theme.breakpoints.down("sm")]: {
            top: 20,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.grey[300],
        borderRadius: 1,
        transition: "background-color 0.5s ease, width 0.5s ease",
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
        backgroundColor: theme.palette.primary.main,
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const steps = ['Property Type', 'Basic Details', 'Detailed Info', 'Pricing'];

const PostNewProperty = () => {
    const router = useRouter();

    const [activeStep, setActiveStep] = React.useState(0);
    const [inProgress, setInProgress] = React.useState(false);

    const [formStates, setFormStates] = React.useState({
        lookingTo: '',
        propertyCategory: '',
        propertySubCategory: '',

        name: '',
        contact: '',
        email: '',
        buildingName: '',
        address: '',
        locality: '',
        city: '',
        builtUpArea: '',
        carpetArea: '',
        unit: 'square-feet',

        furnishType: '',
        furnishings: [],
        societyAmenities: [],
        nearBy: [],
        bhk: '',

        possessionStatus: '',
        zoneType: '',
        propertyCondition: '',
        ownership: '',
        totalFloors: '',
        floors: '',

        price: '',
        availableFrom: new Date(),
        securityDepositType: '',
        securityDeposit: '',
        // shareWithAgents create

        inValidFields: {},
        isSubmitted: false,

        images: [
            "https://images.pexels.com/photos/2783862/pexels-photo-2783862.jpeg",
            "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg",
            "https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg",
            "https://images.pexels.com/photos/1398760/pexels-photo-1398760.jpeg"
        ]
    })

    const handleNext = () => {

        setFormStates((prev) => {
            return { ...prev, isSubmitted: true }
        })

        let excludeFields = []
        if (formStates?.lookingTo === 'sell') {
            if (formStates?.propertyCategory === 'residential') {
                excludeFields = ['ownership', 'floors', 'possessionStatus', 'propertyCondition', 'totalFloors', 'zoneType', 'carpetArea', 'nearBy', 'furnishings', 'societyAmenities', 'securityDepositType', "securityDeposit",]
            } else {
                excludeFields = ['nearBy', 'furnishType', 'furnishings', 'societyAmenities', 'securityDepositType', "securityDeposit", 'bhk']
            }
        }
        if (formStates?.lookingTo === 'rent') {
            if (formStates?.propertyCategory === 'residential') {
                excludeFields = ['ownership', 'floors', 'possessionStatus', 'propertyCondition', 'totalFloors', 'zoneType', 'carpetArea', 'nearBy', 'furnishings', 'societyAmenities']
            } else {
                excludeFields = ['nearBy', 'furnishType', 'furnishings', 'societyAmenities', 'securityDepositType', "securityDeposit", 'bhk']
            }
        }

        const inValidFields = validateStepFields(activeStep, formStates, excludeFields)
        setFormStates((prev) => {
            return { ...prev, inValidFields }
        })
        console.log('@@ inValidFields:', inValidFields)
        console.log('@@ formStates:', formStates)

        const isActiveStepValid = Object.keys(inValidFields)?.length == 0

        if (!isActiveStepValid) {
            return enqueueSnackbar('Kindly fill required fields!', {
                variant: 'error',
                action: (snackbarId) => (
                    <button className={styles.dismiss} onClick={() => { closeSnackbar(snackbarId) }}>
                        Dismiss
                    </button>
                )
            })
        }

        // submit form
        if (activeStep === steps.length - 1) {
            return submitForm()
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        router.push(`/post-property?step=${activeStep + 2}`);

    };

    const submitForm = async () => {
        console.log('@@ submit form:', formStates)
        setInProgress(true)
        delete formStates.inValidFields
        delete formStates.isSubmitted
        delete formStates.securityDepositType

        const fd = new FormData();

        // append normal fields
        Object.keys(formStates).forEach((key) => {
            if (key !== "images") {
                fd.append(key, formStates[key]);
            }
        });

        // append files
        formStates.images.forEach((file) => {
            fd.append("images", file);
        });

        try {
            const res = await fetch("http://localhost:4000/api/property", {
                method: "POST",
                // headers: {
                //     "Content-Type": "multipart/form-data"
                //     // "Content-Type": "application/json"
                // },
                body: fd
                // body: JSON.stringify(formStates)
            });

            if (!res.ok) {
                setInProgress(false)
                throw new Error("Failed to fetch properties");
            }

            setInProgress(false)
            enqueueSnackbar('Property submitted successfully!', {
                variant: 'success',
                action: (snackbarId) => (
                    <button className={styles.dismiss} onClick={() => { closeSnackbar(snackbarId) }}>
                        Dismiss
                    </button>
                )
            })

            return res.json();
        } catch (error) {
            console.log('api error:', error)
            setInProgress(false)
            enqueueSnackbar('Something went wrong, Try again!', {
                variant: 'error',
                action: (snackbarId) => (
                    <button className={styles.dismiss} onClick={() => { closeSnackbar(snackbarId) }}>
                        Dismiss
                    </button>
                )
            })
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        router.push(`/post-property?step=${activeStep}`);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Paper elevation={4} className={styles.post_property}>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            />

            <Stepper activeStep={activeStep} alternativeLabel connector={<CustomConnector />}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}
                                slotProps={{
                                    stepIcon: {
                                        sx: {
                                            fontSize: "2rem",
                                            width: 40,
                                            height: 40
                                        },
                                    }
                                }}
                            >{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {
                Object.keys(formStates?.inValidFields)?.length > 0 &&
                <p className={styles.error_message}>All start(*) marked fields are required!</p>
            }

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {
                            activeStep !== 0 && (
                                <Button
                                    color="primary"
                                    variant='outlined'
                                    onClick={handleBack}
                                    startIcon={<ArrowBackIcon />}
                                    sx={{ height: '40px' }}
                                >
                                    Back
                                </Button>
                            )
                        }
                    </Box>

                    <Box className={styles.form_steps_wrapper}>
                        {/* step - property type */}
                        {
                            activeStep === 0 && <StepPropertyType getState={formStates} setState={setFormStates} />
                        }

                        {/* step - basic details */}
                        {
                            activeStep === 1 && <StepBasicDetails getState={formStates} setState={setFormStates} />
                        }

                        {/* step - detailed Info */}
                        {
                            activeStep === 2 && <StepDetailedInfo getState={formStates} setState={setFormStates} />
                        }

                        {/* step - basic details */}
                        {
                            activeStep === 3 && <StepPricing getState={formStates} setState={setFormStates} />
                        }
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

                        <Box sx={{ flex: '1 1 auto' }} />

                        {
                            inProgress ?
                                <Button
                                    color="primary"
                                    size="medium"
                                    variant='contained'
                                    sx={{ height: '50px', fontSize: '1.2rem', width: '200px', '&:hover': { cursor: 'default', backgroundColor: '#1fab89', boxShadow: 'none' } }}
                                >
                                    <CircularProgress color="white" enableTrackSlot size="30px" />
                                </Button>
                                : (

                                    <Button
                                        color="primary"
                                        size="medium"
                                        variant='contained'
                                        endIcon={<ArrowForwardIcon sx={inProgress ? { color: 'red' } : {}} />}
                                        onClick={handleNext}
                                        sx={{ height: '50px', fontSize: '1.2rem' }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit Property' : `Continue to ${steps[activeStep + 1]}`}
                                    </Button>
                                )
                        }

                    </Box>
                </React.Fragment>
            )}
        </Paper>
    );
}

export default PostNewProperty