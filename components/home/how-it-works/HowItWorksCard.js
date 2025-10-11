import  Card, { Typography }  from "@mui/material"

const HowItWorksCard = ({title, desc}) => {
    return (
        <Card>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="p">{desc}</Typography>
        </Card>
    )
}

export default HowItWorksCard