import React from 'react'
import RootLayout from '@/layouts/RootLayout'
import Link from 'next/link'
import { RxCaretRight } from 'react-icons/rx'
const Page = () => {
    const backgroundImage = '/img/voting1.webp';

  return (
    <RootLayout pageTitle='Voter Resources' hideAbout={false}>
        <div className='xl:h-[60vh] h-[40vh]'>
            <div className='relative  items-center xl:h-[60vh] h-[40vh]'>
                    {/* Background Image */}
                    <div
                    className='absolute inset-0 bg-center bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                    ></div>

                    {/* Overlay Gradient */}
                    <div className='absolute inset-0 bg-gradient-to-tr justify-center flex from-primary via-transparent to-transparent'>
                    <h2 className='absolute xl:bottom-16 xl:left-32 self-center font-bold text-white text-[42px] lg:text-[68px]'>Voter Resources</h2>
                    </div>
                    <div className='xl:h-[60vh] h-[40vh]'></div>
            </div>
        </div>

        <div className='w-dull mt-16 mb-16 flex flex-col items-center'>
        <div className='w-[90vw] xl:w-[75%] h-[100%] items-center overflow-x-scroll mt-4 lg:mt-2' alt='section'>
                <div className='flex text-white flex-col gap-2' alt='holder'>
                    <div className='lg:flex flex-row gap-2 hidden lg:shown'>

                        <div className="h-fit w-fit  group overflow-hidden " alt='item'>               
                            <div className="relative transition-all duration-300 overflow-hidden">
                                <div className='flex flex-col items-start'>
                                    <div className="bg-primary-light filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                                    <div className='text-start justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 y- text-white font-bold bg-transparent'>
                                        <h4>Location</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                    </ul>

                                </div>

                                <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                                    <p className='font-medium hover:underline mb-4'>Learn More</p>
                                </Link>
                            </div>
                        </div>
                        <div className="h-fit w-fit group overflow-hidden " alt='item'>               
                            <div className="relative transition-all duration-300 overflow-hidden">
                                <div className='flex flex-col items-start'>
                                    <div className="bg-primary-light filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                                    <div className='text-start justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 y- text-white font-bold bg-transparent'>
                                        <h4>Register</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>

                                    </ul>

                                </div>

                                <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                                    <p className='font-medium hover:underline mb-4'>Learn More</p>
                                </Link>
                            </div>
                        </div>
                        <div className="h-fit w-fit group overflow-hidden " alt='item'>               
                            <div className="relative transition-all duration-300 overflow-hidden">
                                <div className='flex flex-col items-start'>
                                    <div className="bg-primary-light filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                                    <div className='text-start justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 y- text-white font-bold bg-transparent'>
                                        <h4>Register</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>

                                    </ul>

                                </div>

                                <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                                    <p className='font-medium hover:underline mb-4'>Learn More</p>
                                </Link>
                            </div>
                        </div>
                        <div className="h-fit w-fit group overflow-hidden " alt='item'>               
                            <div className="relative transition-all duration-300 overflow-hidden">
                                <div className='flex flex-col items-start'>
                                    <div className="bg-primary-light filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                                    <div className='text-start justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 y- text-white font-bold bg-transparent'>
                                        <h4>Location</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>

                                    </ul>

                                </div>

                                <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                                    <p className='font-medium hover:underline mb-4'>Learn More</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                     
                    <div className='grid grid-cols-2 gap-2 w-full self-center lg:hidden'>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Location</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Register</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Register</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Location</p>
                        </Link>
                    </div>

                </div>
                
            </div>
        </div>
    </RootLayout>
  )
}

export default Page
