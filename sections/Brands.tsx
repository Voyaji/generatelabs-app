import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const LaptopBrands: FunctionComponent = () => {
    return (
        <>
            <div className='grid grid-cols-5 xl:padding py-0 mb-12'>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_1.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_2.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_3.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_4.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_5.svg" alt="" />
                </div>
            </div>

            <div className='grid grid-cols-6 mb-36 mt-0'>
                <div className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_6.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_7.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_8.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_9.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_10.svg" alt="" />
                </div>
                <div className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_11.svg" alt="" />
                </div>
            </div>
        </>
    )
}

const MobileBrands: FunctionComponent = () => {
    return (
        <>
            <div className='grid grid-cols-2 grid-rows-10 py-0'>
                <div className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_1.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_2.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_3.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_4.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_5.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_6.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_7.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_8.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_9.svg" alt="" />
                </div>
                <div className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_10.svg" alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center h-24 px-2 '>
                <img src="/images/logo_11.svg" alt="" />
            </div>
        </>
    )
}

const Brands: FunctionComponent = () => {

    return (
        <section className='bg-black'>
            <div className='!py-24'>
                <h1 className='text-white text-center font-spaceGrotesk text-4xl font-bold mb-36
                    lg:text-6xl'>Brands we've worked with</h1>
                <div className="hidden lg:block">
                    <LaptopBrands />
                </div>
                <div className="lg:hidden">
                    <MobileBrands />
                </div>
            </div>
        </section>
    )
}

export default Brands