import React from 'react'
import BannerImage from '../Components/Untitled-1_11zon.webp'
import Image from 'next/image'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import HomeCSS from '../styles/Home.module.css'
import { Home } from '@mui/icons-material'

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
                <Container maxWidth='xxl' className='px-0 home'>
                    <Grid container>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}  className='mx-auto'>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box mt={5} pt={5} >
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6} >
                                                            <Box mt={5} pt={5} p={2} className='Para'>
                                                                <Typography className='fw-semibold text-center' variant='h3'>Breathing Maditation <br /> Breathing Yoga <br /> Breathing Dance</Typography>
                                                            </Box>
                                                            <Box  p={2} className='place'>
                                                                <Typography className='place fw-semibold text-center' variant='h5'>A PLACE OF MEDITATIONS</Typography>
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
