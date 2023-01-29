import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const SmallToMediumScreenCharacters: FunctionComponent = () => {
    return (
        <Padding
            className='!py-16 flex flex-col items-center justify-center lg:hidden'
            style={{
                backgroundImage: `url('/images/gradient_section_bg.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '75%'
            }}
        >
            <div className='grid grid-rows-2 grid-cols-3 gap-2 gap-y-6
                    md:grid-cols-4'>
                <Image width={203} height={311} src="/images/nft_card_1.png" priority alt="NFT Card" />
                <Image width={203} height={311} src="/images/nft_card_2.png" priority alt="NFT Card" />
                <Image width={203} height={311} src="/images/nft_card_3.png" priority alt="NFT Card" />

                <Image width={203} height={311} src="/images/nft_card_4.png" priority alt="NFT Card" />
                <Image width={203} height={311} src="/images/nft_card_5.png" priority alt="NFT Card" />
                <Image width={203} height={311} src="/images/nft_card_6.png" priority alt="NFT Card" />

                <Image width={203} height={311} className="hidden md:block" src="/images/nft_card_7.png" priority alt="NFT Card" />
                <Image width={203} height={311} className="hidden md:block" src="/images/nft_card_8.png" priority alt="NFT Card" />
            </div>

            <div className='flex items-center justify-center w-full mt-6 space-x-2 
                    md:hidden'>
                <Image width={203} height={311} className="w-1/3" src="/images/nft_card_7.png" priority alt="NFT Card" />
                <Image width={203} height={311} className="w-1/3" src="/images/nft_card_8.png" priority alt="NFT Card" />
            </div>
        </Padding>
    );
};

const LargeAndBeyondScreenCharacters: FunctionComponent = () => {
    return (
        <Padding
            className='!py-16 hidden lg:flex lg:flex-col lg:items-center lg:justify-center space-y-12'
            style={{
                backgroundImage: `url('/images/gradient_image-min.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '75%'
            }}
        >
            <div className='flex justify-end w-full space-x-4  xl:space-x-12'>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="/images/nft_card_1.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="/images/nft_card_2.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="/images/nft_card_3.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="/images/nft_card_4.png" priority alt="NFT Card" />
                </div>

            </div>

            <div className='flex justify-start w-full space-x-4 xl:space-x-12'>

                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className='drop-shadow-2xl' src="/images/nft_card_5.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className='drop-shadow-2xl' src="/images/nft_card_6.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative  drop-shadow-2xl'>
                    <Image fill className="drop-shadow-2xl" src="/images/nft_card_7.png" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className="drop-shadow-2xl" src="/images/nft_card_8.png" priority alt="NFT Card" />
                </div>

            </div>


        </Padding>
    );
}

const Characters: FunctionComponent = () => {
    return (
        <section className=''>
            <SmallToMediumScreenCharacters />
            <LargeAndBeyondScreenCharacters />
        </section>
    )
}

export default Characters