import SectionTitle from "@/components/section-title/SectionTitle"
import styles from "./HowItWorks.module.css"
import { Box } from "@mui/material"

const cardItems = [
    {
        icon: '',
        title: 'Search & Discover',
        desc: 'Easily search our vast database of properties. Use our advanced filters to narrow down your options and find the perfect home.'
    },
    {
        icon: '',
        title: 'Connect with Agents',
        desc: 'Our expert agents are here to help you. Schedule viewings, ask questions, and get professional advice every step of the way.'
    },
    {
        icon: '',
        title: 'Close the Deal',
        desc: "We'll guide you through the paperwork, negotiations, and closing process to ensure a smooth and successful transaction."
    }
]

const HowItWorks = () => {
    return (
        <section>
            <SectionTitle title="How It Works" subTitle="A simplified and transparent process for you." />

            {/* <Box className={styles.cards}>
                {
                    cardItems?.map((item) => (
                        <HowItWorks
                            key={item?.title}
                            title={item?.title}
                            subTitle={item?.desc} />
                    ))
                }
            </Box> */}
        </section>
    )
}

export default HowItWorks