import React from 'react'
import Link from 'next/link'

const DonationElement = () => {
  return (
    <div className='w-full donation-bg shadow-md mt-2 bg-secondary py-16 text-secondary text-sub flex flex-col items-center' alt='donations'>
        <h3 className='text-title mb-5 text-white'>Chip In To Accomplish Objective</h3>
        <div className='grid text-center grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-2'>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>$5</Link>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>$25</Link>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>$50</Link>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>$100</Link>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>$250</Link>
            <Link className='py-5 w-full px-8 md:px-20 lg:hover:bg-primary lg:hover:text-white transition-all duration-50 text-[26px] font-bold bg-white' href='' alt='donate'>Other</Link>
        </div>
    </div>
  )
}

export default DonationElement
