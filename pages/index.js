import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Home from './home'

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
}

export default index
