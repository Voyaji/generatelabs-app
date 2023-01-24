import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Characters: FunctionComponent = () => {
    return (
        <section className=''>
            <Padding
                className='!py-16 flex flex-col items-center justify-center'
                style={{
                    backgroundImage: `url('/images/gradient_section_bg.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '75%'
                }}
            >
                <div className='grid grid-rows-2 grid-cols-3 gap-2 gap-y-6
                    md:grid-cols-4'>
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_1.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_2.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_3.svg" priority alt="NFT Card"/>
                    
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_4.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_5.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} src="https://generate-labs-nextjs.vercel.app/images/nft_card_6.svg" priority alt="NFT Card"/>

                    <Image width={203} height={311} className="hidden md:block" src="https://generate-labs-nextjs.vercel.app/images/nft_card_7.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} className="hidden md:block" src="https://generate-labs-nextjs.vercel.app/images/nft_card_8.svg" priority alt="NFT Card"/>
                </div>

                <div className='flex items-center justify-center w-full mt-6 space-x-2 
                    md:hidden'>
                    <Image width={203} height={311} className="w-1/3" src="https://generate-labs-nextjs.vercel.app/images/nft_card_7.svg" priority alt="NFT Card"/>
                    <Image width={203} height={311} className="w-1/3" src="https://generate-labs-nextjs.vercel.app/images/nft_card_8.svg" priority alt="NFT Card"/>
                </div>

            </Padding>
        </section>
    )
}

export default Characters