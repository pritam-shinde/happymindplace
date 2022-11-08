import Image from 'next/image'
import React from 'react'
import Logo from '../Components/logo_11zon.webp'
import Link from 'next/link'
import NavCss from '../styles/Navbar.module.css'



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg px-lg-5">
                <div className="container px-lg-5">
                    <Link href="/" />
                    <a className={NavCss.navbarBrand} href="/">
                        <Image src={Logo} alt="Logo" layout='responsive' />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className={`${NavCss.navLink} ${NavCss.Active}`} href="/index/" aria-current="page"> Home</Link>
                            <Link className={NavCss.navLink} aria-current="page" href="/about-us/">About Us</Link>
                            <Link className={NavCss.navLink} aria-current="page" href="/course/">Course</Link>
                            <Link className={NavCss.navLink} aria-current="page" href="/store/">Store</Link>
                            <Link className={NavCss.navLink} aria-current="page" href="/faq/">FAQ</Link>
                            <Link className={NavCss.navLink} aria-current="page" href="/contact/">Contact us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
