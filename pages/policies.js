import React from 'react'
import RootLayout from '@/layouts/RootLayout'
import Image from 'next/image'

const Page = () => {
    const backgroundImage = '/img/blum3.jpeg';

    const defaultContent = 
    <div className='w-full'>
        <h3 className='mb-2 text-title'>Policy</h3>
        <p>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body <br></br>
        <Image
        className='w-full h-[30vh] mt-4 object-cover'
        src='/img/pol1.webp'
        width={800}
        height={500}
        alt='img'
    />
        <br></br>Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body<br></br> 
        <div className='flex mt-4 flex-row gap-2'>
            <Image
                className='aspect-square lg:h-[30vh] lg:w-[30vh] h-[20vh] w-[20vh] object-cover'
                src='/img/pol2.jpeg'
                width={800}
                height={500}
                alt='img'
            />
            <Image
                className='aspect-square lg:h-[30vh] lg:w-[30vh] h-[20vh] w-[20vh] object-cover'
                src='/img/pol2.jpeg'
                width={800}
                height={500}
                alt='img'
            />
        </div>
        <br></br> Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body BodyBody Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body </p>

    </div>;

  return (
    <RootLayout pageTitle='Policies' hidePolicies={true}>
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
                    <h2 className='absolute xl:bottom-16 xl:left-32 self-center font-bold text-white text-[42px] lg:text-[68px]'>Candidate's Policies</h2>
                    </div>
                    <div className='xl:h-[60vh] h-[40vh]'></div>
            </div>
        </div>
        <h1 className='hidden'>Policies</h1>

        <div className='w-full text-primary gap-16 flex flex-col text-sub px-[10vw] mt-16 mb-16'>
            <div className='flex flex-col items-center gap-8' alt='holder' id='1'>
                    <div className='flex flex-col xl:flex-row justify-between gap-16 items-start' alt='int styling'>

                            {defaultContent}
                            {defaultContent}
                    </div>

            </div>
            
        </div>
    </RootLayout>
      
  )
}

export default Page
