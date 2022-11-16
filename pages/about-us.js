import React from 'react'
import AboutImage from '../public/Untitled-1.png'
import AboutCss from '../styles/About.module.css';
import { Box, Container, Grid, Typography } from '@mui/material'
import MeditationImage from '../public/banner-2.webp';
import Image from 'next/legacy/image'




const AboutUs = () => {
  return (
    <>
      <section>
        <Container maxWidth="xxl" className={AboutCss.about}>
          <Grid container >
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={3} className={AboutCss.bannerText} >
                <Grid container spacing={5}>
                  <Grid item xs={12} md={6} className='order-1 order-md-0' >
                    <Box className={`animate__animated animate__fadeInUp ${AboutCss.Border}`}>
                      <Typography variant='h1'>About Us</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} className='order-0 order-md-1'>
                    <Box className='d-flex justify-content-center'>
                      <img src={AboutImage.src} className={`${AboutCss.bannerImage} mx-auto`} />
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
        <Container maxWidth="xxl" className={AboutCss.homeSec}>
          <Grid container >
            <Grid item xs={12} md={10} className='mx-auto py-lg-3 py-3 my-3 my-lg-3  text-center'>
              <Box>
                <Typography className={AboutCss.SecHead}>ABOUT HAPPY MIND</Typography>
                <Typography variant='h4' className='py-3'>"EVERYONE HAS A LITTLE MADNESS INSIGHT"</Typography>
                <Typography variant='h5' className='py-3'>About my Meditations Experience:</Typography>
                <Typography className={AboutCss.aboutP} variant='p'>My life was transformed in the year 1999 when I discovered the teaching of <span className={AboutCss.SecHead}>Osho.</span> After leading a busy chaotic life and a stressful career, I moved into <span className={AboutCss.SecHead}>Osho's commune in Pune where I practised the daily are of meditation for five years.</span></Typography> <br />
                <Typography className={AboutCss.aboutP} variant='p'>My personal transformation during this time was so profound that i chose to dedicated my life to the teaching and practices of Osho, becoming a discipline and sharing the path with others.</Typography> <br />
                <Typography className={AboutCss.aboutP} variant='p'>Here, I practised and learned from the best od Osho therapists, teachers and master around the World.</Typography> <br />
                <Typography className={AboutCss.aboutP} variant='p'>This journey led me to Nagpur, where for many years I have been offering meditation workshops and retreats.</Typography> <br />
                <Typography variant='h5' className='py-2 fst-italic'>Along with individual meditation sessions, therapies in an exclusive way.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Meditation */}
      <section>
        <Container maxWidth="xxl">
          <Grid container >
            <Grid item xs={12} md={10} className='mx-auto py-lg-3 my-lg-3 py-3 my-3'>
              <Box>
                <Grid container spacing={3} >
                  <Grid item xs={12} md={6} >
                    <Box>
                      <Image src={MeditationImage} layout="responsive" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}  >
                    <Box className={`animate__animated animate__fadeInUp ${AboutCss.Meditation}`}>
                      <Typography className={AboutCss.SecHead}>MEDITATION</Typography>
                      <Typography variant='h4' className='py-lg-3'>Vision:</Typography>
                      <Typography className={AboutCss.aboutP} variant='p'>To make healthy mind for entire generation through Meditation, Astrology, and guidance through psychometric test od personality so you can know how to enhance relationship with your being and entire unvierse.</Typography>
                    </Box>

                    <Box className={`animate__animated animate__fadeInUp py-4`}>
                      <Typography variant='h4' className='py-lg-3'>Mission:</Typography>
                      <Typography className={AboutCss.aboutP} variant='p'>To create a meditation place where those of any faith, as well as without a faith,  ay come in the spirit of honour and respect, for the nurturing ofbeing wisdom, compassion, community understanding and healing. By recognizing one's own spiritual nature, the individual is freed to recognize the wholesomeness in others and all form of life.</Typography>
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

export default AboutUs
