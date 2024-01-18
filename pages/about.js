import RootLayout from '@/layouts/RootLayout';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  const backgroundImage = '/img/blum3.jpeg';

  const bioContent = 
  <div className='text-primary flex flex-col items-center text-sub mt-16'>
    <div className='px-[10vw] lg:max-w-[70vw] 2xl:max-w-[50vw]'>
        <p>Senator Richard Blumenthal has always been fearless in standing up for the people of Connecticut, no matter how powerful the foe.</p>
        <br></br>
        <p>As Connecticut’s Senator since 2010, he has taken on the pharmaceutical companies to champion legislation capping the total cost any senior citizen has to pay for prescription drugs, and finally forcing drug companies to negotiate lower prescription prices with Medicare.</p>
        <br></br>
        <p>Senator Blumenthal has fought the big oil companies. He has pushed to end the billions of dollars they receive in windfall profits and tax giveaways. And as gas prices rose in the last year, he took on President Biden, personally urging him to release oil from the Strategic Petroleum Reserve, which the President then did. Senator Blumenthal has also led the fight to hold big oil companies accountable for their profiteering. Now gas prices are going down.</p>
        <br></br>
        <p>Senator Blumenthal is a relentless champion for women, repeatedly fighting for the right of women, not government, to make their own health care decisions. Anticipating the disastrous Supreme Court decision overturning Roe, he introduced the Women’s Health Protection Act — to make Roe the law of the land. He will continue to lead the fight against Republican attempts to pass a nationwide abortion ban.</p>
    </div>

    <div className='mt-12 flex flex-row overflow-x-scroll lg:flex-col gap-2 lg:w-[70vw]'>
        <div className='flex flex-row gap-2'>
            <Image
                className='w-full h-[30vh] object-cover'
                src='/img/pol1.webp'
                width={800}
                height={500}
                alt='img'
            />
            <Image
                className='aspect-square h-[30vh] w-[30vh] object-cover'
                src='/img/pol2.jpeg'
                width={800}
                height={500}
                alt='img'
            />
            <Image
                className='w-full h-[30vh] lg:hidden object-cover'
                src='/img/pol1.webp'
                width={800}
                height={500}
                alt='img'
            />
            <Image
                className='aspect-square lg:hidden h-[30vh] w-[30vh] object-cover'
                src='/img/pol2.jpeg'
                width={800}
                height={500}
                alt='img'
            />
        </div>
        <div className='lg:flex flex-row hidden lg:shown gap-2'>
            <Image
                className='aspect-square h-[30vh] w-[30vh] object-cover'
                src='/img/pol2.jpeg'
                width={800}
                height={500}
                alt='img'
            />
            <Image
                className='w-full h-[30vh] object-cover'
                src='/img/pol1.webp'
                width={800}
                height={500}
                alt='img'
            />
        </div>

    </div>
  </div>
  return (
    <RootLayout pageTitle='About' hideAbout={true}>
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
                    <h2 className='absolute xl:bottom-16 xl:left-32 self-center font-bold text-white text-[42px] lg:text-[68px]'>Meet The Candidate</h2>
                    </div>
                    <div className='xl:h-[60vh] h-[40vh]'></div>
            </div>
        </div>
        <div className='mt-16 flex flex-col items-center'>
            <div className='p-4' alt='quote'>
                <div className='flex flex-row gap-4' alt='body + holder'>
                    <div className='w-[0.25rem] resize-none bg-secondary'></div>
                    <h1 className='italic lg:max-w-[950px] text-primary font-medium text-[18px] lg:text-[32px]'>"I have never backed down from a fight or failed to put Connecticut first. No matter how big or powerful the special interest or lawbreaker, protecting Connecticut’s people is always my top priority and purpose."</h1>
                </div>
                <p className='ml-6 mt-6 text-primary text-sub font-medium'>- Candidate</p>
            </div>
            <div className='flex mt-4 lg:mt-16 flex-cols items-center' alt='bio'>
                <div className='mb-24'>
                    {bioContent}
                    {bioContent}
                </div>
            </div>
        </div>
    </RootLayout>
  );
};

export default Page;
