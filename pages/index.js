import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import MeditationImage from '../public/banner-2.webp';
import CoursesImage from '../public/banner-3pic.webp';
import HomeCss from '../styles/Home.module.css';
import ListItemPic from '../public/list-item.png';
import Smile from '../public/smile.png';
import Years from '../public/years.png';
import Branch from '../public/branch.png';
import CountUp from 'react-countup';
import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



const Home = () => {



  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>


      </Head>
      <main>
        {/* Banner Section */}
        <section>
          <Container maxWidth="xxl" className={HomeCss.home}>
            <Grid container >
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={3} className={HomeCss.bannerText} >
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6} className='order-1 order-md-0' >
                      <Box className={`animate__animated animate__fadeInUp ${HomeCss.Border}`}>
                        <Typography variant='h1'>Breathing Maditation <br /> Breathing Yoga <br /> Breathing Dance</Typography>
                        <Typography className={HomeCss.para} variant='p'>A PLACE OF MEDITATIONS</Typography>
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
                  <Typography variant='h4' className='py-3'>"MEDITATION NOURUSHES THE MIND AS FOOD NOURISHES THE BODY"</Typography>
                  <Typography className={HomeCss.aboutP} variant='p'>Now a days everyone know about  Meditation but very few of them are practising daily with proper way.</Typography> <br />
                  <Typography className={HomeCss.aboutP} variant='p'>‘Happy Mind’ - A place of meditation, where you will learn meditation techniques with appropriate way.</Typography> <br />
                  <Typography variant='h6' className='py-2'>Join 'HAPPY MIND' Mindfulness Techniques and Meditation Retreat.</Typography>
                  <Typography className={HomeCss.aboutP} variant='p'>This retreat will include playful and interactive group activities to help you better understand meditation and ultimately bring back awareness.</Typography> <br />
                  <Typography className={HomeCss.aboutP} variant='p'>Most people are likely familiar with the positive sides of meditation associated with mental health.</Typography> <br />
                  <Typography variant='h6' className='py-2 fst-italic'>The course is of tremendous help to build your mindfulness and awareness in a playful way to transit your daily life in a futuristic manner.</Typography>
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
                        <Typography className={HomeCss.SecHead}>MEDITATION</Typography>
                        <Typography variant='h4' className='py-lg-3 py-3'>What is Meditation?</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>It's about training in awareness and getting a healthy sense of perspective.</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>You're not trying to turn off your thoughts or feelings, you're learning to observe them without judgment.</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>And eventually, you will start to better understand them as well.</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>It will be an intense process to learn meditation in your busy schedule with special way and experts in the sector.</Typography>
                      </Box>

                      <Box className={`animate__animated animate__fadeInUp py-4`}>
                        <Typography variant='h4' className='py-lg-3 py-3'>To Whom This Reyreat is Suitable?</Typography>
                        <Typography className={HomeCss.aboutP} variant='p'>This retreat is open for all the levels of meditators, </Typography>
                        <Typography className={HomeCss.SecHead} variant='p'>even if you have never meditated before</Typography>
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

        {/* Client */}
        <section>
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={12} md={10} className='mx-auto py-lg-4 my-lg-4 py-4 my-4'>
                <Box>
                  <Grid container spacing={3} className='text-center'>
                    <Grid item xs={12} md={4} >
                      <Box>
                        <Box className={HomeCss.client}>
                          <Image src={Smile} layout="responsive" />
                        </Box>
                        <Typography variant='h1' ><CountUp end={250} />+</Typography>
                        <Typography className='py-2 text-secondary'> HAPPY CLIENT</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} >
                      <Box>
                        <Box className={HomeCss.client}>
                          <Image src={Years} layout="responsive" /></Box>
                        <Typography variant='h1' ><CountUp end={15} />+</Typography>
                        <Typography className='py-2 text-secondary'> YEAR EXPERIENCE</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} >
                      <Box>
                        <Box className={HomeCss.client}>
                          <Image src={Branch} layout="responsive" /></Box>
                        <Typography variant='h1' ><CountUp end={15} />+</Typography>
                        <Typography className='py-2 text-secondary'> TOTAL BRANCH</Typography>
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
              <Grid item xs={11} md={10} className='mx-auto py-lg-4 my-lg-4 py-4 my-4'>
                <Box>
                  <Grid container spacing={3} className='text-center'>
                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper "
                    >
                      <SwiperSlide className='mb-5'>
                        <Typography variant='h5' className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed provident laboriosam molestiae qui, consectetur veritatis nisi dicta eaque eveniet, libero perferendis ut excepturi earum ipsam rem et fugiat dolores?
                          <Typography variant='h6' py={3}>-John Smith-</Typography>
                          <Typography className={HomeCss.sliderText}>Client</Typography>
                        </Typography><br />
                      </SwiperSlide>

                      <SwiperSlide className='mb-5'>
                        <Typography variant='h5' className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed provident laboriosam molestiae qui, consectetur veritatis nisi dicta eaque eveniet, libero perferendis ut excepturi earum ipsam rem et fugiat dolores?
                          <Typography variant='h6' py={3}>-Smith John-</Typography>
                          <Typography className={HomeCss.sliderText}>Client</Typography>
                        </Typography><br />
                      </SwiperSlide>

                      <SwiperSlide className='mb-5'>
                        <Typography variant='h5' className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed provident laboriosam molestiae qui, consectetur veritatis nisi dicta eaque eveniet, libero perferendis ut excepturi earum ipsam rem et fugiat dolores?
                          <Typography variant='h6' py={3}>-John Smith Dixit-</Typography>
                          <Typography className={HomeCss.sliderText}>Client</Typography>
                        </Typography><br />
                      </SwiperSlide>

                    </Swiper>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

      </main>
    </>
  )
}

export default Home