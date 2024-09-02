"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { BsInstagram } from 'react-icons/bs'
import { FaBloggerB, FaFacebook, FaHome, FaLinkedin, FaPenFancy, FaUsers } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoChatbubbles } from 'react-icons/io5'

const Header = () => {
    const pathname = usePathname();

  return (
    <header className="tm-header" id="tm-header">
    <div className="tm-header-wrapper">
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
        <GiHamburgerMenu />
        </button>
        <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
            <FaBloggerB 
            color='#000'
            size={35}
            />
        </div>            
            <h1 className="text-center">Xtra Blog</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">            
            <ul>
                <li className={`${pathname === "/" ? "active" : ""} tm-nav-item`}>
                    <Link href="/" className="tm-nav-link">
                    <FaHome />
                    Blog Home
                </Link></li>
                <li className={`${pathname === "/post" ? "active" : ""} tm-nav-item`}>
                    <Link href="/post" className="tm-nav-link">
                    <FaPenFancy />
                    Single Post
                </Link></li>
                <li className={`${pathname === "/about-us" ? "active" : ""} tm-nav-item`}>
                    <Link href="/about-us" className="tm-nav-link">
                    <FaUsers />
                    About Xtra
                </Link></li>
                <li className={`${pathname === "/contact-us" ? "active" : ""} tm-nav-item`}>
                    <Link href="/contact-us" className="tm-nav-link">
                    <IoChatbubbles />
                    Contact Us
                </Link></li>
                <li className={`${pathname === "/write-blog" ? "active" : ""} tm-nav-item`}>
                    <Link href="/write-blog" className="tm-nav-link">
                    <IoChatbubbles />
                    Write Blog
                </Link></li>
            </ul>
        </nav>
        <div className="tm-mb-65">
            <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
            <FaFacebook color='#000' />
            </a>
            <a href="https://twitter.com" className="tm-social-link">
            <FaSquareXTwitter color='#000'/>
            </a>
            <a href="https://instagram.com" className="tm-social-link">
            <BsInstagram color='#000' />
            </a>
            <a href="https://linkedin.com" className="tm-social-link">
            <FaLinkedin color='#000' />
            </a>
        </div>
        <p className="tm-mb-80 pr-5 text-white">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
        </p>
    </div>
</header>
  )
}

export default Header
