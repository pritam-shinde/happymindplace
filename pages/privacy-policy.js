
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import HomeCss from '../styles/Home.module.css';
import BannerImage from '../public/Untitled-1_11zon.webp';


const privacy = () => {
    return (
        <>

            {/* Banner Section */}
            <section>
                <Container maxWidth="xxl" className={HomeCss.home}>
                    <Grid container >
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={3} className={HomeCss.bannerText} >
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={6} className='order-1 order-md-0' >
                                        <Box className={`animate__animated animate__fadeInUp ${HomeCss.Border}`}>
                                            <Typography variant='h1'>Privacy policy</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} className='order-0 order-md-1'>
                                        <Box className='d-flex justify-content-center'>
                                            <img src={BannerImage.src} className={`${HomeCss.bannerImage} mx-auto`} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {/* About Section */}
            <section>
                <Container maxWidth="xxl" className={HomeCss.homeSec}>
                    <Grid container >
                        <Grid item xs={12} md={10} className='mx-auto py-lg-3 py-3 my-3 my-lg-3  text-center'>
                            <Box>
                                <Typography className={HomeCss.SecHead}>ABOUT HAPPY MIND</Typography>
                                <Typography variant='h4' className='py-2'>Meditation Center takes your privacy policy very seriously.</Typography>
                                <Typography variant='h4' className='py-2'>Any personal / confidicial information shared by you is strictly with us only.</Typography>
                                <Typography variant='h5' className='py-2 fst-italic'>We do not share ant information to any one or any platforms that's provide by you.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default privacy
