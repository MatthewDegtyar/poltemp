import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const AboutTeaser = () => {
  return (
    <div className='mt-2 flex items-center text-primary flex-col lg:flex-row w-full py-24 lg:py-0' id='about'>
        <div className='lg:w-[50%] hidden lg:shown lg:flex'>
            <Image
                className='h-[65vh] w-[40vw] object-cover' 
                alt='img'
                src='/img/blum2.jpeg'
                width={680}
                height={1200}
            />
        </div>
        <div className='lg:w-[50%] w-[90vw] lg:px-12 flex flex-col lg:max-w-[450px] lg:ml-24 items-start justify-center'>
                <h3 className='text-title'>About CANDIDATE</h3>
                  <div className='shown lg:hidden flex py-4'>
                      <Image
                          className=' object-cover' 
                          alt='img'
                          src='/img/blum2.jpeg'
                          width={680}
                          height={1200}
                      />
                  </div>
                <p className='text-sub mt-2'>Across Connecticut people are standing up to join the fight by volunteering with Team Blumenthal. Add your name now to join our team, look up your current voter registration status, check out our recent updates from the campaign trail or make a plan to vote on election day!</p>

                <Button  className='rounded-[2px] mt-6 w-full font-bold border-2 border-secondary hover:border-secondary text-[18px] text-primary hover:text-white h-[60px] bg-white hover:bg-secondary p-2'>
                    Get Involved
                </Button>

            </div>
    </div>
  )
}

export default AboutTeaser
