import Image from 'next/image'
import React from 'react'
import Logo from '../Components/logo_11zon.webp'
import Link from 'next/link'
import NavCss from '../styles/Navbar.module.css'



const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg px-lg-5">
                <div class="container px-lg-5">
                    <Link href="/" />
                    <a class={NavCss.navbarBrand} href="/home/">
                        <Image src={Logo} alt="" layout='responsive' />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class={`${NavCss.navLink} ${NavCss.Active}`} href="/index/" aria-current="page"> Home</Link>
                            <Link class={NavCss.navLink} aria-current="page" href="/about-us/">About Us</Link>
                            <Link class={NavCss.navLink} aria-current="page" href="/course/">Course</Link>
                            <Link class={NavCss.navLink} aria-current="page" href="/store/">Store</Link>
                            <Link class={NavCss.navLink} aria-current="page" href="/faq/">FAQ</Link>
                            <Link class={NavCss.navLink} aria-current="page" href="/contact/">Contact us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
