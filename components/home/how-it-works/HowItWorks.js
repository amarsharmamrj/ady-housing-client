import SectionTitle from "@/components/section-title/SectionTitle"
import styles from "./HowItWorks.module.css"
import { Box } from "@mui/material"
import HowItWorksCard from "./partials/HowItWorksCard"
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent'
import KeyIcon from '@mui/icons-material/Key'

const cardItems = [
    {
        icon: <TravelExploreIcon className={styles.icon} />,
        title: 'Search & Discover',
        desc: 'Easily search our vast database of properties. Use our advanced filters to narrow down your options and find the perfect home.'
    },
    {
        icon: <RealEstateAgentIcon className={styles.icon} />,
        title: 'Connect with Agents',
        desc: 'Our expert agents are here to help you. Schedule viewings, ask questions, and get professional advice every step of the way.'
    },
    {
        icon: <KeyIcon className={styles.icon} />,
        title: 'Close the Deal',
        desc: "We'll guide you through the paperwork, negotiations, and closing process to ensure a smooth and successful transaction."
    }
]

const HowItWorks = () => {
    return (
        <section>
            <SectionTitle title="How It Works" subTitle="A simplified and transparent process for you." />

            <Box className={styles.cards}>
                {
                    cardItems?.map((item, index) => (
                        <HowItWorksCard
                            key={`${index}-title`}
                            title={item?.title}
                            desc={item?.desc}
                            icon={item?.icon}
                        />
                    ))
                }
            </Box>
        </section>
    )
}

export default HowItWorks