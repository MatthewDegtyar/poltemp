import Link from 'next/link';
import React from 'react';

const DonationHeader = () => {
  return (
    <div className='bg-white top-0'>
      <Link className='' href='' alt='donate'>
        <div className='w-full text-center transition-all duration-300 text-white text-[16px] bg-primary hover:bg-primary-highlight p-2 group'>
          <p className='group-hover:opacity-100 group-hover:bg-primary-hover'>Chip in today to secure our objective</p>
        </div>
      </Link>
    </div>
  );
};

export default DonationHeader;
