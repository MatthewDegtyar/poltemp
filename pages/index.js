import RootLayout from '@/layouts/RootLayout'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState} from "react";
import { RxCaretDown } from 'react-icons/rx';

export default function Home() {
    const [inputShown, setInputShown] = useState(true)

    const handleSubmit = () => {
        setTimeout(() => {
            setInputShown(false);
        }, 390);
        setTimeout(() => {
            setInputShown(true);
        }, 4000);
    
    };
  return (
    <RootLayout pageTitle='CAMPAIGN_NAME'>
        <div className='text-white bg-white'>
            <div className='min-h-[calc(100vh-120px)] flex flex-row items-center bg-white bg-center bg-cover bg-no-repeat' style={{ backgroundImage: 'url("https://richardblumenthal.com/wp-content/uploads/2022/05/header2-scaled.jpg")' }}>
              <div className={`text-white flex flex-col items-center justify-items-center justify-center absolute w-[100%] sm:w-[75%] lg:w-[50%] h-[calc(100vh-120px)]  bg-gradient-to-r from-primary to-transparent ${inputShown ? '' : 'hidden'}`}>
                    <h2 className='text-[68px] text-center font-bold'>
                        <span>Fighting</span>
                            <br></br>
                        <span>For You</span> 
                    </h2>
                    <div className={`gap-1 flex flex-col `}>
                        <div className='flex flex-col gap-1' alt='text fields'>
                          <Input classNames={{
                                    inputWrapper: [
                                        "shadow-xl",
                                        "backdrop-blur-xl",
                                        "w-[350px]",
                                        "h-[60px]",
                                        "rounded-[2px]",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                    ],
                                    }} 
                                type="email" label="Email"
                            />
                            <Input classNames={{
                                    inputWrapper: [
                                        "shadow-xl",
                                        "backdrop-blur-xl",
                                        "w-[350px]",
                                        "h-[60px]",
                                        "rounded-[2px]",
                                        "backdrop-saturate-200",
                                        "hover:bg-default-200/70",
                                    ],
                                    }} 
                                type="number" label="Zip"
                            />

                        </div>
                        <Button onClick={() => handleSubmit()} className='rounded-[2px] text-white font-bold text-[18px] h-[60px] bg-secondary p-2'>
                            Join The Team
                        </Button>
                    </div>
                </div>

                <div className={`text-white flex flex-col items-center justify-items-center justify-center absolute w-[100%] sm:w-[75%] lg:w-[50%] h-[calc(100vh-120px)]  bg-gradient-to-r from-primary to-transparent ${inputShown ? 'hidden' : 'shown'}`}>
                    <p className='text-[68px] font-bold'>Thank You!</p>
                    <p className='text-[48px]'>We'll be in touch shortly</p>
                </div>

            </div>
              <div className=' bottom-4 md:bottom-16 absolute items-center hidden sm:shown  w-[100%] flex flex-col' alt='learn more'>
                <Link
                  href='#about'
                  alt='scroll down'
                >
                <Button className='bg-transparent bg-blur backdrop-blur-lg text-sub font-[22px] px-12 text-white'>
                    <p className='font-medium text-sub'>Learn More</p>
                  </Button>
                </Link>
                <div className='flex flex-col items-center scroll-prompt' alt='scroll prompt anim'>
                  <RxCaretDown className='RxCaretDown' color='white' size={45}/>
                </div>
              </div>
        </div>
        


    </RootLayout>
  )
}
