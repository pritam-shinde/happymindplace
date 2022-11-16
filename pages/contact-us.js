import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import HomeCss from '../styles/Home.module.css';

const ContactUs = () => {
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
                        <Typography variant='h1'>Contact US</Typography>
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
    </>
  )
}

export default ContactUs
