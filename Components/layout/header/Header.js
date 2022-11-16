import Image from 'next/image'
import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Grid } from '@mui/material'
import Logo from '../../../public/logo.png'
import HeaderCss from '../../../styles/Header.module.css'



const Header = () => {
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50 && width > 1199) {
                document.querySelector('header').style.cssText = `
            background-color: #fff;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
            `
            } else if (window.scrollY < 50 && width > 1199) {
                document.querySelector('header').style.cssText = `
            background-color: rgba(255, 255, 255, 0.5);
            `
            } else if (width < 1199 && window.scrollY > 0) {
                document.querySelector('header').style.cssText = `
            background-color: #fff;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
            `
            }
        })
    }, [width])

    return (

        <>
            <header className='fixed-top'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <Link href="/" legacyBehavior>
                                    <a className="navbar-brand" >
                                        <Image src={Logo} alt="Logo" className={HeaderCss.navLogo} />
                                    </a>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav ms-auto">
                                        <li className='nav-item py-1'><Link href="/" legacyBehavior><a className={HeaderCss.navLink}>Home</a></Link></li>
                                        <li className='nav-item py-1'><Link href="/about-us" legacyBehavior><a className={HeaderCss.navLink}>About Us</a></Link></li>
                                        <li className='nav-item py-1'><Link href="/course" legacyBehavior><a className={HeaderCss.navLink}>Course</a></Link></li>
                                        <li className='nav-item py-1'><Link href="/faq" legacyBehavior><a className={HeaderCss.navLink}>FAQ</a></Link></li>
                                        <li className='nav-item py-1'><Link href="/contact-us" legacyBehavior><a className={HeaderCss.navLink}>Contact Us</a></Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        </>
    )
}

export default Header
