import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center mb-12 mt-24 px-[5vw]'>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center '>
            <Image
                src='/svg/blum1.svg'
                width={350}
                height={200}
            />
            <div className='lg:flex lg:flex-row grid grid-cols-2 mt-8 lg:mt-0 items-center text-sub text-primary font-bold gap-6' alt='sitemap'>
                <ul className='hover:text-secondary-highlight  transition-all duration-300'><Link href='/' alt='home'>Home</Link></ul>
                <ul className='hover:text-secondary-highlight transition-all duration-300'><Link href='/about' alt='home'>About</Link></ul>
                <ul className='hover:text-secondary-highlight transition-all duration-300'><Link href='/policies' alt='home'>Policies</Link></ul>
                <ul className='hover:text-secondary-highlight transition-all duration-300'><Link href='/vote' alt='home'>Where To Vote</Link></ul>
            </div>
            
            <div className='flex flex-row items-center gap-4 mt-8 lg:mt-0' alt='social'>
                <Link href='/email'>
                    <MdEmail size={30} className='icon-link'/>
                </Link>
                <Link href='/call'>
                    <FaPhoneAlt size={30} className='icon-link'/>
                </Link>
                <Link href='/linkedin'>
                    <FaLinkedinIn size={30} className='icon-link'/>
                </Link>
                <Link href='/instagram'>
                    <FaInstagram size={30} className='icon-link'/>
                </Link>
                <Link href='/facebook'>
                    <FaFacebookF size={30} className='icon-link'/>
                </Link>
                <Link href='/twitter'>
                    <FaXTwitter size={30} className='icon-link'/>
                </Link>
            </div>
            
        </div>

        <div className='px-16 mt-16 rounded-[2px] border-1 border-primary text-primary py-2'>
            <p>Paid For By Big Nigga Ball PAC</p>
        </div>
        <div className='text-primary text-center mt-8'>
            <p>1234 robbery st, NM, 00000</p>
            <p>info@campaign.com</p>
        </div>
        <p className='hover:text-primary-highlight mt-8 font-bold text-primary transition-all duration-300'><Link href='/' alt='home'>Privacy Policy</Link></p>

        <ul className='hover:text-primary-highlight mt-24 font-bold text-primary transition-all duration-300'><Link href='https://www.degtyarconsulting.com/' alt='home'>Powered By Degtyar Consulting</Link></ul>

    </footer>
  )
}

export default Footer
