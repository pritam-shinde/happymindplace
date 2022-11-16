import React from 'react'
import Image from 'next/legacy/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import Logo from '../../../public/logo.png'
import CardCss from '../../../styles/CardCss.module.css'
import Link from 'next/link'



const VisitingCard = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container >
                        <Grid item xs={12} md={10} className='mx-auto py-lg-3 py-md-0 my-lg-3 my-md-0 py-0'>
                            <Box className='text-center'>
                                <Typography variant='h5'>To know more your self with the help of</Typography>
                                <Typography variant='h1'>Astrology, Tarot Card Reading</Typography>
                                <Typography variant='h5'>and Persoality Development Test</Typography>
                            </Box>
                            <Grid container className='mx-auto'>
                                <Grid item xs={12} md={12} >
                                    <Grid container>
                                        <Grid item md={7} className={`mx-auto p-5 my-5 shadow  ${CardCss.card}`}>
                                            <Box className={`mx-sm-auto ${CardCss.logo}`}>
                                                <Image src={Logo} layout='responsive' ></Image>
                                            </Box>
                                            <Box>
                                                <Typography variant='p' className={CardCss.SecHead}>251 B, 4th floor, <br /> Subhash Apartment, <br /> Opp. Bank of Maharashtra, <br /> Main Road Nandanvan, <br /> Nagpur.</Typography> <br />
                                                <Link href='/' className={CardCss.SecLink}> <a > www.happymindplace.com</a></Link>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default VisitingCard
