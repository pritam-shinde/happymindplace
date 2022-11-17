import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import HomeCss from '../styles/Home.module.css';
import TextField from '@mui/material/TextField';


const ContactUs = () => {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
                      <Typography variant='h1' className='py-lg-3 py-3'>Get in touch with us</Typography>
                      <Typography className={HomeCss.aboutP} variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                    </Box>


                  </Grid>
                  <Grid item xs={12} md={6} >
                    <Box>
                      <Grid container >
                        <Grid item xs={12} md={6}>
                          <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
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
