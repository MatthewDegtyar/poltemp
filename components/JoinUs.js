import React from 'react'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'
import { RxCaretDown } from 'react-icons/rx';

const JoinUs = () => {
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
    <div className='flex flex-col '>

        <div className='min-h-[calc(100vh-120px)]  mt-2 flex flex-col items-center bg-white bg-center bg-cover bg-no-repeat' style={{ backgroundImage: 'url("https://richardblumenthal.com/wp-content/uploads/2019/01/foot-1-scaled.jpg")' }}>
            <div className={`text-white flex right-0 flex-col items-center justify-items-center justify-center absolute w-[100%] sm:w-[75%] lg:w-[50%] h-[calc(100vh-120px)]  bg-gradient-to-l from-primary to-transparent ${inputShown ? '' : 'hidden'}`}>
                        <h3 className='text-[68px] text-center font-bold'>
                            <span>Join Us</span>
                        </h3>
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

                    <div className={`text-white flex right-0 flex-col items-center justify-items-center justify-center absolute w-[100%] sm:w-[75%] lg:w-[50%] h-[calc(100vh-120px)]  bg-gradient-to-l from-primary to-transparent ${inputShown ? 'hidden' : 'shown'}`}>
                        <p className='text-[68px] font-bold'>Thank You!</p>
                        <p className='text-[48px]'>We'll be in touch shortly</p>
                    </div>
        </div>
            
        <div className='flex font-bold text-[18px] place-self-center w-full items-center' alt='action buttons'>
            <div className='p-4 text-white cursor-pointer w-full rounded-l-[2px] h-full bg-primary hover:bg-primary-highlight transition-all duration-300 flex items-center justify-center' alt='button'>
                <p>Volunteer</p>
            </div>
            <div className='p-4 text-white cursor-pointer w-full rounded-r-[2px] h-full bg-secondary hover:bg-secondary-highlight transition-all duration-300 flex items-center justify-center' alt='button'>
                <p>Donate</p>
            </div>
        </div>
    </div>
  )
}

export default JoinUs
