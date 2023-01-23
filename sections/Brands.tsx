import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Brands: FunctionComponent = () => {

    return (
        <section className='bg-black'>
            <Padding className='py-24 px-0'>
                <h1 className='text-white text-center font-spaceGrotesk text-6xl font-bold mb-36'>Brands we've worked with</h1>

                <div className='grid grid-cols-5 padding py-0 mb-12'>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_1.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 bg-iconBg'>
                        <img src="/images/logo_2.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_3.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 bg-iconBg'>
                        <img src="/images/logo_4.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_5.svg" alt=""/>
                    </div>
                </div>

                <div className='grid grid-cols-6 mb-36 mt-0'>
                    <div className='flex justify-center items-center py-8 bg-iconBg'>
                        <img src="/images/logo_6.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_7.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 bg-iconBg'>
                        <img src="/images/logo_8.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_9.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 bg-iconBg'>
                        <img src="/images/logo_10.svg" alt=""/>
                    </div>
                    <div className='flex justify-center items-center py-8 '>
                        <img src="/images/logo_11.svg" alt=""/>
                    </div>
                </div>
                

            </Padding>
        </section>
    )
}

export default Brands