import React from 'react'
import { Grid, Typography } from '@mui/material'
import HomeCss from '../styles/Home.module.css'
import BannerImage from '../Components/Untitled-1_11zon.webp'
import Image from 'next/image'

const home = () => {
    return (
        <>
            <div className="home">
                <Grid container>
                    <Grid item lg={6}><Typography variant='21'>Breathing Meditation
                        Breathing Yoga
                        Breathing Dance
                    </Typography></Grid>

                    <Grid item lg={6}>
                        <Image src={BannerImage} alt='Banner-Image' layout='responsive'/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default home
