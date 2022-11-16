import React from 'react'
import Image from 'next/legacy/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import MeditationImage from '../public/banner-2.webp';
import CoursesImage from '../public/banner-3pic.webp';
import HomeCss from '../styles/Home.module.css';
import ListItemPic from '../public/list-item.png';


const Course = () => {
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
                        <Typography variant='h1'>Courses</Typography>
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
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={12} md={10} className='mx-auto py-lg-3 my-lg-3 py-3 my-3'>
                <Box>
                  <Grid container spacing={3} >
                    <Grid item xs={12} md={6} >
                      <Box className={HomeCss.bannerImage}>
                        <Image src={MeditationImage} layout="responsive" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                      <Box className={`animate__animated animate__fadeInUp ${HomeCss.Meditation}`}>
                        <Typography className={HomeCss.SecHead}>BENEFITS</Typography>
                        <Typography variant='h4' className='py-lg-3 py-3'>Mental Health Benefits of Meditation:</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>It will be an opportunity to learn meditation quickly.</Typography> <br />
                        <Typography className={HomeCss.aboutP} variant='p'>You will learn the fundamentals of Spirityality and go deeper into yourself.</Typography> <br />
                        <Typography className={HomeCss.SecHead} variant='p'>You will attend the power of silence, rejuvenate yourself and become stress free.</Typography><br />
                        <Typography className={HomeCss.aboutP} variant='p'>Increades awareness, clarity, compassion and a sense of calmness.</Typography><br />
                        <Typography className={HomeCss.SecHead} variant='p'>Improved focus in another benefits associated with meditation</Typography>
                      </Box>

                      <Box className={`animate__animated animate__fadeInUp py-4`}>
                        <Typography variant='h4' className='py-lg-3 py-3'>Physical Benefit's of Meditation:</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>Eliminate Chormic Stress of Body, Physical injuries heals faster According to a Harvard study, meditation can dampen the genes involved in the inflammatory response, and also promotes the genes associated with DNA stability.</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

         {/* Courses */}
         <section>
          <Container maxWidth="xxl" className={HomeCss.Career}>
            <Grid container >
              <Grid item xs={12} md={10} className='mx-auto py-lg-2 my-lg-3'>
                <Box>
                  <Grid container spacing={3} >
                    <Grid item xs={12} md={6}  >
                      <Box className={`animate__animated animate__fadeInUp ${HomeCss.Meditation}`}>
                        <Typography className={HomeCss.SecHead}>COURSES</Typography>
                        <Typography variant='h4' className='text-white py-lg-3 py-3'>What is Meditation?</Typography>
                        <Box className='d-flex justify-content-between'>
                          <ul className='list-unstyled '>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic} ></Image></span>Couple Meditation</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Chakra Breathing</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Chakra Sound</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Self Talk / Self Love</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Yogi Dance</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Dance With Breath</li>
                          </ul>
                          <ul className='list-unstyled '>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Body & Mind</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Meditation With Your Crystal</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Open Your Child Mind</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Personalized Meditation</li>
                            <li className={HomeCss.ListC}><span className={HomeCss.ListIcon}><Image src={ListItemPic}></Image></span>Love & Pray Meditation</li>
                          </ul>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <Box py={5} className={`animate__animated animate__fadeInDown ${HomeCss.bannerImage}`}>
                        <Image src={CoursesImage} layout="responsive" />
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

export default Course
