import React from 'react'
import LogoF from '../../../public/logo.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import FooterCss from '../../../styles/Footer.module.css'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <section>
        <Container maxWidth="xxl" className={FooterCss.footer}>
          <Grid container >
            <Grid item xs={12} md={10} className='mx-auto py-lg-4 my-lg-4 py-4 my-4'>
              <Box>
                <Grid container spacing={3} >
                  <Grid item xs={12} md={4} className='text-center'>
                    <Box>
                      <Box className={FooterCss.logoWidth}>
                        <Image src={LogoF} layout="responsive" /></Box>
                      <Typography className={`py-2 ${FooterCss.place}`}>A Place of Meditations</Typography>
                      <Typography className={FooterCss.more}>MEDITATION, ASTROLOGY & TAROT CARD READING GUIDANCE</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4} >
                    <Box>
                      <Typography className={FooterCss.Quick}>Quick Link</Typography>
                      <Box>
                        <ul className='list-unstyled py-3'>
                          <li className='nav-item py-1'><Link href="/" legacyBehavior><a className={FooterCss.fLink}>Home</a></Link></li>
                          <li className='nav-item py-1'><Link href="/about-us" legacyBehavior><a className={FooterCss.fLink}>About Us</a></Link></li>
                          <li className='nav-item py-1'><Link href="/course" legacyBehavior><a className={FooterCss.fLink}>Course</a></Link></li>
                          <li className='nav-item py-1'><Link href="/faq" legacyBehavior><a className={FooterCss.fLink}>FAQ</a></Link></li>
                          <li className='nav-item py-1'><Link href="/contact-us" legacyBehavior><a className={FooterCss.fLink}>Contact Us</a></Link></li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4} >
                    <Box>
                      <Typography className={FooterCss.Quick}>Contact Us</Typography>
                      <Typography className={FooterCss.address}>251-B, 4th Floor, Subhash Apartment,
                        Opp Bank of Maharashtra, Main Road Nandnvan
                        NAGPUR</Typography>
                      <Typography className='pb-2'>
                      <Link href='/' className={` ${FooterCss.links}`}> <a> <b> Tel: </b> 820 835 8849</a></Link></Typography>
                      <Typography>
                      <Link href='/' className={` ${FooterCss.links}`}> <a ><b>Email:</b> info@happymindplace.com</a></Link></Typography>
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

export default Footer