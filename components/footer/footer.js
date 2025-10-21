import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'
import FooterLinks from './partials/FooterLinks'
import { FOOTER_LINKS } from '@/constants/footer-links'
import Image from 'next/image'
import SocialLinks from './partials/SocialLinks'
import Link from 'next/link'


const Footer = () => {
    return (
        <Box component={'footer'} className={styles.footer}>
            <Grid className={styles.footer_content} container spacing={2}>

                {/* logo */}
                <Grid size={{ md: 3 }}>
                    <Link href='/'>
                        <Box textAlign='center'>
                            <Image src={'/logo/logo_icon_white_200_164.png'} width={80} height={65} alt='ady-housing-logo' />
                            <Typography variant='h2'>Ady Housing</Typography>
                        </Box>
                    </Link>
                </Grid>

                {/* company links */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <FooterLinks title={'Company'} links={FOOTER_LINKS.company} />
                </Grid>

                {/* explore links */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <FooterLinks title={'Explore'} links={FOOTER_LINKS.explore} />
                </Grid>

                {/* support links */}
                <Grid size={{ xs: 12, md: 3 }}>
                    <FooterLinks title={'Support'} links={FOOTER_LINKS.support} />
                </Grid>

            </Grid>


            <Grid container>
                {/* social icons */}
                <Grid size={12}>
                    <Divider width='100%' color='#5c5a5a' />
                    <SocialLinks />
                </Grid>

                {/* copyright */}
                <Grid size={12}>
                    <Divider width='100%' color='#5c5a5a' />
                    <Typography
                        component='p'
                        width={'100%'}
                        textAlign={'center'}
                        paddingTop={{ xs: 1, md: 2 }}
                    >
                        © 2024 Ady Housing. All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer