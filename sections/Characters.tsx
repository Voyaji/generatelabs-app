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
                    <img src="/images/nft_card_1.svg" alt="NFT Card"/>
                    <img src="/images/nft_card_2.svg" alt="NFT Card"/>
                    <img src="/images/nft_card_3.svg" alt="NFT Card"/>
                    
                    <img src="/images/nft_card_4.svg" alt="NFT Card"/>
                    <img src="/images/nft_card_5.svg" alt="NFT Card"/>
                    <img src="/images/nft_card_6.svg" alt="NFT Card"/>

                    <img className="hidden md:block" src="/images/nft_card_7.svg" alt="NFT Card"/>
                    <img className="hidden md:block" src="/images/nft_card_8.svg" alt="NFT Card"/>
                </div>

                <div className='flex items-center justify-center w-full mt-6 space-x-2 
                    md:hidden'>
                    <img className="w-1/3" src="/images/nft_card_7.svg" alt="NFT Card"/>
                    <img className="w-1/3" src="/images/nft_card_8.svg" alt="NFT Card"/>
                </div>

            </Padding>
        </section>
    )
}

export default Characters