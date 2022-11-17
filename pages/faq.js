import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerImage from '../public/Untitled-1_11zon.webp';
import HomeCss from '../styles/Home.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoursesImage from '../public/banner-3pic.webp';
import Image from 'next/legacy/image'



const FAQ = () => {

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
                      <Typography variant='h1'>FAQ</Typography>
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
                      <Box  className='shadow-lg my-5'>
                        <Accordion className={HomeCss.faqBorder}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={HomeCss.faq}
                          >
                            <Typography>Question 1</Typography>
                          </AccordionSummary>
                          <AccordionDetails className={HomeCss.faqAns}>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={HomeCss.faq}
                          >
                            <Typography>Question 2</Typography>
                          </AccordionSummary>
                          <AccordionDetails className={HomeCss.faqAns}>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={HomeCss.faq}
                          >
                            <Typography>Question 3</Typography>
                          </AccordionSummary>
                          <AccordionDetails className={HomeCss.faqAns}>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={HomeCss.faq}
                          >
                            <Typography>Question 4</Typography>
                          </AccordionSummary>
                          <AccordionDetails className={HomeCss.faqAns}>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={HomeCss.faq}
                          >
                            <Typography>Question 5</Typography>
                          </AccordionSummary>
                          <AccordionDetails className={HomeCss.faqAns}>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
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
  );
}

export default FAQ
