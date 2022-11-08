import React from 'react'
import HomeCss from '../styles/Home.module.css'
import BannerImage from '../Components/Untitled-1_11zon.webp'
import Image from 'next/image'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'

const home = () => {
    return (
        <>
            <Head>
                <title>Home - happymindplace.com</title>
                <meta name='description' content='' />
                <meta name='robots' content='index' />
                <link rel="stylesheet" href="/home/" />
            </Head>
            <main>
                <Container maxWidth='xxl' className='px-0'>
                    <Grid container>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box mt={3}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Typography className='para fw-semibold text-center' variant='h4'>Breathing Maditation Breathing Yoga Breathing Dance</Typography>
                                                                <Typography className='para' variant='h5'>A PLACE OF MEDITATIONS</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Image src={BannerImage} alt='Meditating' title='Girl Meditating' layout='responsive'></Image>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>

                                            </Container>
                                        </section>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>
            </main>
        </>
    )
}

export default home
