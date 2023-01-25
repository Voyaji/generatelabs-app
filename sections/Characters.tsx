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
                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_1.png?alt=media&token=defd8278-3f00-45ad-ad9c-59b7c3abe00a" priority alt="NFT Card" />
                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_2.png?alt=media&token=ad4d0258-967f-42fe-95eb-4492194d0e10" priority alt="NFT Card" />
                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_3.png?alt=media&token=69b0039f-adba-44fb-ab59-2fe1de4974ce" priority alt="NFT Card" />

                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_4.png?alt=media&token=108432a4-feb0-4f6d-bd3f-a83766a7b547" priority alt="NFT Card" />
                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_5.png?alt=media&token=043fadce-9fc1-48e3-afd9-86d54785fdf2" priority alt="NFT Card" />
                <Image width={203} height={311} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_6.png?alt=media&token=e93f9202-0b30-4d94-9aed-01931bf4e5bd" priority alt="NFT Card" />

                <Image width={203} height={311} className="hidden md:block" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_7.png?alt=media&token=35c11219-d0eb-4fdc-b7b8-75c3a72f286e" priority alt="NFT Card" />
                <Image width={203} height={311} className="hidden md:block" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_8.png?alt=media&token=3ab9483f-d9cb-44f5-904d-4a11e90c8403" priority alt="NFT Card" />
            </div>

            <div className='flex items-center justify-center w-full mt-6 space-x-2 
                    md:hidden'>
                <Image width={203} height={311} className="w-1/3" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_7.png?alt=media&token=35c11219-d0eb-4fdc-b7b8-75c3a72f286e" priority alt="NFT Card" />
                <Image width={203} height={311} className="w-1/3" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_8.png?alt=media&token=3ab9483f-d9cb-44f5-904d-4a11e90c8403" priority alt="NFT Card" />
            </div>
        </Padding>
    );
};

const LargeAndBeyondScreenCharacters: FunctionComponent = () => {
    return (
        <Padding
            className='!py-16 hidden lg:flex lg:flex-col lg:items-center lg:justify-center space-y-12'
            style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/gradient_image-min.png?alt=media&token=921e056f-0634-4412-98d5-8f71e5aeba6b')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '75%'
            }}
        >
            <div className='flex justify-end w-full space-x-4  xl:space-x-12'>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_1.png?alt=media&token=defd8278-3f00-45ad-ad9c-59b7c3abe00a" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_2.png?alt=media&token=ad4d0258-967f-42fe-95eb-4492194d0e10" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_3.png?alt=media&token=69b0039f-adba-44fb-ab59-2fe1de4974ce" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image className='drop-shadow-2xl' fill={true} src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_4.png?alt=media&token=108432a4-feb0-4f6d-bd3f-a83766a7b547" priority alt="NFT Card" />
                </div>

            </div>

            <div className='flex justify-start w-full space-x-4 xl:space-x-12'>

                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className='drop-shadow-2xl' src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_5.png?alt=media&token=043fadce-9fc1-48e3-afd9-86d54785fdf2" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className='drop-shadow-2xl' src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_6.png?alt=media&token=e93f9202-0b30-4d94-9aed-01931bf4e5bd" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative  drop-shadow-2xl'>
                    <Image fill className="drop-shadow-2xl" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_7.png?alt=media&token=35c11219-d0eb-4fdc-b7b8-75c3a72f286e" priority alt="NFT Card" />
                </div>
                <div className='w-[203px] h-[311px] relative drop-shadow-2xl'>
                    <Image fill className="drop-shadow-2xl" src="https://firebasestorage.googleapis.com/v0/b/generate-labs-f25b7.appspot.com/o/nft_card_8.png?alt=media&token=3ab9483f-d9cb-44f5-904d-4a11e90c8403" priority alt="NFT Card" />
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