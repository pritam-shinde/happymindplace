import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import HomeCss from '../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link'
import Head from 'next/head'

const ContactUs = () => {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
<Head>
        <title>Contact us</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/contact-us/" />
      </Head>
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

      {/* Client */}
      <section>
        <Container maxWidth="xxl">
          <Grid container >
            <Grid item xs={12} md={10} className='mx-auto py-lg-4 my-lg-4 py-4 my-4'>
              <Box>
                <Grid container spacing={3} className='text-center'>
                  <Grid item xs={12} md={4} >
                    <Box className={`py-3 shadow-lg ${HomeCss.IconBackgrond}`}>
                      <Box>
                        <MapOutlinedIcon className={HomeCss.icons} />
                      </Box>
                      <Typography className='py-2' variant='h3'> Address</Typography>
                      <Typography className=' text-black-50' > 251 B, 4th floor, 
                        Subhash Apartment, <br />
                        Opp. Bank of Maharashtra, 
                        Main Road Nandanvan, 
                        Nagpur.</Typography>

                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4} >
                    <Box className={`py-3 shadow-lg ${HomeCss.IconPhone}`}>
                      <Box>
                        <LocalPhoneOutlinedIcon className={HomeCss.PhoneIcon} /></Box>
                      <Typography className='py-2 text-white' variant='h3'> Contact</Typography>
                      <Link href="tel:8208358849" legacyBehavior><a className='text-white text-decoration-none'>+91 820 835 8849</a></Link> <br />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4} >
                    <Box className={`py-3 shadow-lg ${HomeCss.IconBackgrond}`}>
                      <Box>
                        <EmailOutlinedIcon className={HomeCss.icons} /> </Box>
                      <Typography className='py-2' variant='h3'> Email</Typography>
                      <Link href="mailto:info@happymindplace.com" legacyBehavior><a className='text-black-50 text-decoration-none'>info@happymindplace.com</a></Link> <br />
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Meditation */}
      <section>
        <Container maxWidth="xxl" className={HomeCss.homeSec}>
          <Grid container >
            <Grid item xs={12} md={10} className='mx-auto py-lg-3 my-lg-3 py-3 my-3'>
              <Box>
                <Grid container spacing={3} >

                  <Grid item xs={12} md={6}  >
                    <Box className={`animate__animated animate__fadeInUp ${HomeCss.Meditation}`}>
                      <Typography className={HomeCss.SecHead}>OUR CONTACT</Typography>
                      <Typography variant='h2' className='py-lg-3 py-3'>Get in touch with us</Typography>
                      <Typography className={HomeCss.aboutP} variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                    </Box>


                  </Grid>
                  <Grid item xs={12} md={6} >
                    <Box>
                      <Grid container >
                        <Grid item xs={6} md={6}>
                          <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <TextField id="outlined-basic" label="Lastname" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={11} py={2}>
                          <TextField fullWidth label="Email" id="fullWidth" />
                        </Grid>

                        <Grid item xs={12} md={11} py={2}>
                          <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            fullWidth
                            rows={4}
                          />

                        </Grid>
                        <button type="submit" className={HomeCss.button}>SEND MESSAGE</button>


                      </Grid>
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
