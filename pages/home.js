import React from 'react'
import BannerImage from '../Components/Untitled-1_11zon.webp'
import Image from 'next/image'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import HomeCSS from '../styles/Home.module.css'
import { Home } from '@mui/icons-material'
import BImage from '../Components/banner-2.webp'
import B3Image from '../Components/banner-3pic.webp'
import LItem from '../Components/list-item.png'


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
                                    <Grid item xs={12} className='mx-auto'>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box mt={5} pt={5} >
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6} >
                                                            <Box mt={5} pt={5} p={2} className='Para'>
                                                                <Typography className='fw-semibold text-center pb-4' variant='h3'>Breathing Maditation <br /> Breathing Yoga <br /> Breathing Dance</Typography>
                                                            </Box>
                                                            <Box className='place'>
                                                                <Typography className='place fw-semibold text-center'>A PLACE OF MEDITATIONS</Typography>
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

                    <Grid container className='divSec text-center py-md-5'>
                        <Grid item xs={12} lg={10} className='mx-auto'>
                            <Box>
                                <Typography className='shc fw-semibold' variant='p'>ABOUT HAPPY MIND</Typography>
                                <Typography className='fw-semibold py-4' variant='h4'>Everyone has a little madness insight</Typography>
                                <Typography className='pfz'>Now a days everyone know about  Meditation but very few of them are practising daily with proper way.</Typography>
                                <Typography className='pfz'>‘Happy Mind’ - A place of meditation, where you will learn meditation techniques with appropriate way.</Typography>
                                <Typography className='fw-bolder py-2' variant='h6'>Join 'HAPPY MIND' Mindfulness Techniques and Meditation Retreat.</Typography>
                                <Typography className='pfz'>This retreat will include playful and interactive group activities to help you better understand meditation and ultimately bring back awareness.</Typography>
                                <Typography className='pfz'>Most people are likely familiar with the positive sides of meditation associated with mental health.</Typography>
                                <Typography className='fw-bolder py-2' variant='h6'>The course is of tremendous help to build your mindfulness and awareness in a playful way to transit your daily life in a futuristic manner.</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} className='mx-auto'>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box mt={5} pt={5} >
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Image src={BImage} alt='Meditating' title='Girl Meditating' layout='responsive'></Image>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} className='pt-5'>
                                                            <Box pt={5} mt={5} >
                                                                <Typography className='shc fw-semibold' variant='p'> ABOUT HAPPY MIND</Typography>
                                                                <Typography className='fw-semibold py-4' variant='h4'>What Is Meditation?</Typography>
                                                                <Typography className='pfz'>It's about training in awareness and getting a healthy sense of perspective.</Typography>
                                                                <Typography className='pfz'>You're not trying to turn off your thoughts or feelings, you're learning to observe them without judgment.</Typography>
                                                                <Typography className='fw-bolder py-2' variant='h6'>And eventually, you will start to better understand them as well.</Typography>
                                                                <Typography className='pfz'>It will be an intense process to learn meditation in your busy schedule with special way and experts in the sector.</Typography>
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

                    <Grid container className='CareerSec  py-md-5'>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} className='mx-auto'>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box  >
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6} className='pt-5'>
                                                            <Box>
                                                                <Typography className='shc fw-semibold' variant='p'> ABOUT HAPPY MIND</Typography>
                                                                <Typography className='fw-semibold C-fs py-4'>Meditation Courses</Typography>
                                                                <Box className='d-flex justify-content-between'>
                                                                <ul className='list-unstyled'>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Couple Meditation</li>                                                    
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Chakra Breathing</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Chakra Sound</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Self Talk/ Self Love</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Dance With Breath</li>
                                                                </ul>
                                                                <ul className='list-unstyled'>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Body & Mind</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Meditation With Your Crystal</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Open Your Child Mind</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Personalized Meditation</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Love & Prey Meditation</li>
                                                                </ul>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Image src={B3Image} alt='Meditating' title='Girl Meditating' layout='responsive'></Image>
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

                    <Grid container className='CareerSec  py-md-5'>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} className='mx-auto'>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Box  >
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6} className='pt-5'>
                                                            <Box>
                                                                <Typography className='shc fw-semibold' variant='p'> ABOUT HAPPY MIND</Typography>
                                                                <Typography className='fw-semibold C-fs py-4'>Meditation Courses</Typography>
                                                                <Box className='d-flex justify-content-between'>
                                                                <ul className='list-unstyled'>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Couple Meditation</li>                                                    
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Chakra Breathing</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Chakra Sound</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Self Talk/ Self Love</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Dance With Breath</li>
                                                                </ul>
                                                                <ul className='list-unstyled'>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Body & Mind</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Meditation With Your Crystal</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Open Your Child Mind</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Personalized Meditation</li>
                                                                    <li className='fw-semibold py-3'><span> <Image src={LItem} className='Simage p-1'></Image></span> Love & Prey Meditation</li>
                                                                </ul>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Image src={B3Image} alt='Meditating' title='Girl Meditating' layout='responsive'></Image>
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
