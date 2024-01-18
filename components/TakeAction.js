import React from 'react'
import { RxCaretRight } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const TakeAction = () => {
  return (
    <div className='w-full mt-2 shadow-md text-white bg-primary'>
        <div className='p-24 justify-between flex flex-col items-center'>
            <div className='w-[90vw] xl:w-[75%] gap-2 flex flex-col lg:flex-row  items-center justify-between'>
                <div className='lg:max-w-[400px] flex flex-col' alt='call to action'>
                    <h3 className='text-title'>Take Action</h3>
                        <div className='overflow-hidden shown py-4 lg:hidden'>
                            <Image
                                className=''
                                alt='img'
                                src='/img/blum2.jpeg'
                                width={500}
                                height={300}
                            />
                        </div>
                    <p className='text-sub mt-2'>Across Connecticut people are standing up to join the fight by volunteering with Team Blumenthal. Add your name now to join our team, look up your current voter registration status, check out our recent updates from the campaign trail or make a plan to vote on election day!</p>

                    <Button  className='rounded-[2px] self-center md:self-start md:max-w-none  mt-6 text-white w-full font-bold border-2 border-primary-light text-[18px] h-[60px] bg-primary hover:bg-primary-light p-2'>
                        Get Involved
                    </Button>
                </div>
                <div className='overflow-hidden hidden lg:shown lg:flex'>
                    <Image
                        className=''
                        alt='img'
                        src='/img/blum2.jpeg'
                        width={500}
                        height={300}
                    />
                </div>
            </div>
            
            <div className='w-[90vw] xl:w-[75%] h-[100%] items-center overflow-x-scroll mt-4 lg:mt-2' alt='section'>
                <div className='flex flex-col gap-2' alt='holder'>
                    <div className='lg:flex flex-row gap-2 hidden lg:shown'>

                        <div className="h-fit w-fit group overflow-hidden " alt='item'>               
                            <div className="relative transition-all duration-300 overflow-hidden">
                                <div className='flex flex-col items-start'>
                                    <div className="bg-primary-light filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                                    <div className='text-start justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 y- text-white font-bold bg-transparent'>
                                        <h4>Policies</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                        <p>Policy 1</p>
                                        <p>Policy 2</p>
                                        <p>Policy 3</p>
                                        <p>Policy 4</p>
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
                                        <h4>Policies</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                        <p>Policy 1</p>
                                        <p>Policy 2</p>
                                        <p>Policy 3</p>
                                        <p>Policy 4</p>
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
                                        <h4>Policies</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                        <p>Policy 1</p>
                                        <p>Policy 2</p>
                                        <p>Policy 3</p>
                                        <p>Policy 4</p>
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
                                        <h4>Policies</h4>
                                        <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                                    </div>
                                    <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                        <p>Policy 1</p>
                                        <p>Policy 2</p>
                                        <p>Policy 3</p>
                                        <p>Policy 4</p>
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
                            <p>Policies</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Policies</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Policies</p>
                        </Link>
                        <Link href='/policies' className='bg-primary-light text-[20px] font-medium p-4 w-full rounded-[2px] flex items-center justify-center'>
                            <p>Policies</p>
                        </Link>
                    </div>

                </div>
                
            </div>
      </div>

    </div>
  )
}

export default TakeAction
