import { Box, List, ListItem, Typography } from "@mui/material"
import Link from "next/link"
import styles from '../Footer.module.css'

const FooterLinks = ({ title, links }) => {
    return (
        <Box>
            <Typography variant="h4" className={styles.title}>{title}</Typography>
            <List  className={styles.list}>
                {
                    links?.map((link, index) => {
                        return (
                            <ListItem className={styles.link} key={`${title}-${index}`}>
                                <Link href={link.url}>{link.name}</Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
}

export default FooterLinks