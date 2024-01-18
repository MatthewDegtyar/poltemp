import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const router= useRouter();

    useEffect(() => {
        // Toggle overflow property on the body based on showMenu
        document.body.style.overflow = showMenu ? 'hidden' : 'auto';

        // Clean up the style when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMenu]);

    const handleClick = () => {
        router.push('/');
    }

    const handleMenu = () => {
        console.log('clicked')
        setShowMenu(!showMenu)
    }

  return (
    <nav className='w-full z-50 bg-white transition-all duration-300 h-[65px] fixed shadow-md flex flex-row justify-between  items-center'>

            <div className='flex-shrink-0 ml-2'>
                <Image className='cursor-pointer' onClick={() => handleClick()} src='/svg/blum1.svg' width={200} height={70} />
            </div>

                <div className='justify-end flex transition-all duration-300 flex-row items-center gap-8 '>
                    <div className='flex font-bold text-primary flex-row gap-3 items-center hidden xl:shown xl:flex' alt='navlinks'>
                        <ul className='hover:text-primary-highlight  transition-all duration-300'><Link href='/' alt='home'>Home</Link></ul>
                        <ul className='hover:text-primary-highlight transition-all duration-300'><Link href='/about' alt='home'>About</Link></ul>
                        <ul className='hover:text-primary-highlight transition-all duration-300'><Link href='/policies' alt='home'>Policies</Link></ul>
                        <ul className='hover:text-primary-highlight transition-all duration-300'><Link href='/vote' alt='home'>Voter Resources</Link></ul>
                    </div>
                    <div className='hidden xl:shown xl:flex' alt='social'>
                        <div className='flex flex-row gap-4 mt-4 lg:mt-0 mb-8 lg:mb-0'>
                            <Link href='/email'>
                                <MdEmail size={23} className='icon-link'/>
                            </Link>
                            <Link href='/call'>
                                <FaPhoneAlt size={23} className='icon-link'/>
                            </Link>
                            <Link href='/linkedin'>
                                <FaLinkedinIn size={23} className='icon-link'/>
                            </Link>
                            <Link href='/instagram'>
                                <FaInstagram size={23} className='icon-link'/>
                            </Link>
                            <Link href='/facebook'>
                                <FaFacebookF size={23} className='icon-link'/>
                            </Link>
                            <Link href='/twitter'>
                                <FaXTwitter size={23} className='icon-link'/>
                            </Link>
                        </div>
                    </div>

                    <div onClick={() => handleMenu()} className='mr-8 md:hidden' alt='menu button'>
                        {showMenu ? (
                            <IoClose className='icon-link' size={38}/>
                        ) : (
                            <IoMdMenu className='icon-link' cursor-pointer size={38}/>
                        )}
                    </div>

                    <div className='md:flex font-bold items-center hidden md:shown '>
                        <div onClick={() => handleMenu()} className='mr-4 xl:hidden' alt='menu button'>
                            {showMenu ? (
                                <IoClose className='icon-link' size={38}/>
                            ) : (
                                <IoMdMenu className='icon-link' cursor-pointer size={38}/>
                            )}
                        </div>
                        <div className='p-3 text-white cursor-pointer w-[200px] h-full xl:h-[65px] bg-primary hover:bg-primary-highlight xl:transition-all xl:duration-300 flex items-center justify-center' alt='button'>
                        <p>Volunteer</p>
                        </div>
                        <div className='p-3 text-white cursor-pointer w-[200px] h-full xl:h-[65px] bg-secondary hover:bg-secondary-highlight xl:transition-all xl:duration-300 flex items-center justify-center' alt='button'>
                        <p>Donate</p>
                        </div>
                    </div>
                </div>

                <div className={`fixed top-[65px] text-[42px] font-bold gap-4 text-white left-0 flex flex-col justify-center items-center bg-primary h-[calc(100vh-65px)] w-screen z-50 ${showMenu ? 'shown flex xl:hidden' : 'hidden'}`} alt='mobile menu'>
                    <Link href='/' className={`${router.pathname === '/' ? 'current-link' : ''}`}>Home</Link>
                    <Link href='/about' className={`${router.pathname === '/about' ? 'current-link' : ''}`}>About</Link>
                    <Link href='/policies' className={`${router.pathname === '/policies' ? 'current-link' : ''}`}>Policies</Link>
                    <Link href='/vote' className={`${router.pathname === '/vote' ? 'current-link' : ''}`}>Voter Resources</Link>
                </div>

    </nav>
  );
};

export default NavigationBar;
