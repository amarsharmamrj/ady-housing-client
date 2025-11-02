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
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, StepConnector, stepConnectorClasses } from '@mui/material';
import StepPropertyType from './steps/step-property-type/StepPropertyType';
import StepBasicDetails from './steps/step-basic-details/StepBasicDetails';
import StepDetailedInfo from './steps/step-detailed-info/StepDetailedInfo';
import StepPricing from './steps/step-pricing/StepPricing';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter, useSearchParams } from "next/navigation";

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

    // step 1 - states
    const [propertyType, setPropertyType] = React.useState('');
    const [propertyCategory, setPropertyCategory] = React.useState('');
    const [propertySubCategory, setPropertySubCategory] = React.useState('');

    // step 2 - states
    const [contactName, setContactName] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [locality, setLocality] = React.useState('');
    const [city, setCity] = React.useState('');
    const [builtUpArea, setBuiltUpArea] = React.useState('');
    const [carpetArea, setCarpetArea] = React.useState('');
    const [unit, setUnit] = React.useState('');


    const [stepOne, setStepOne] = React.useState({
        propertyType: '',
        propertyCategory: '',
        propertySubCategory: '',
    });

    const [stepTwo, setStepTwo] = React.useState({
        contactName: '',
        contactNumber: '',
        email: '',
        address: '',
        locality: '',
        city: '',
        builtUpArea: '',
        carpetArea: '',
        unit: '',
    });


    // step - detailed info
    const [amenities, setAmenities] = React.useState([]);
    const [nearBy, setNearBy] = React.useState([]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        router.push(`/post-property?step=${activeStep + 2}`);
        console.log('@@ formStates:', stepOne, stepTwo)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        router.push(`/post-property?step=${activeStep}`);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Paper elevation={4} className={styles.post_property}>
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

                    <Box className={styles.form_steps_wrapper}>
                        {/* step - property type */}
                        {
                            activeStep === 0 && <StepPropertyType getState={stepOne} setState={setStepOne} />
                        }

                        {/* step - basic details */}
                        {
                            activeStep === 1 && <StepBasicDetails getState={stepTwo} setState={setStepTwo} />
                        }

                        {/* step - detailed Info */}
                        {
                            activeStep === 2 && <StepDetailedInfo
                                amenities={amenities}
                                setAmenities={setAmenities}
                                nearBy={nearBy}
                                setNearBy={setNearBy}
                            />
                        }

                        {/* step - basic details */}
                        {
                            activeStep === 3 && <StepPricing />
                        }
                    </Box>

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

                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button
                            color="primary"
                            variant='contained'
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleNext}
                            sx={{ height: '40px' }}
                        >
                            {activeStep === steps.length - 1 ? 'Submit Property' : `Go to ${steps[activeStep + 1]}`}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Paper>
    );
}

export default PostNewProperty