import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'
import Gradient from '../public/images/line_gradient.svg'

const Characters: FunctionComponent = () => {
    return (
        <section className='relative overflow-hidden flex flex-col h-screen'>
            <div className='flex-1'></div>
            <div className='flex-1 py-16 relative'
                style={{
                    backgroundImage: `url('/images/gradient_section_bg.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>


                    <div className='flex justify-end items-center absolute -top-full translate-y-1/2 w-full padding'>
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                    </div>

                    <div className='flex justify-start items-end absolute -bottom-full -translate-y-1/2 w-full padding'>
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                        <img src="/images/nft_card_1.svg" />
                    </div>

            </div>
            <div className='flex-1'></div>
        </section>
    )
}

export default Characters