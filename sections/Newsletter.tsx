import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Newsletter: FunctionComponent = () => {
    return (
        <footer className='flex-1'
            style={{
                backgroundImage: `url('/images/gradient_section_bg.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

            <Padding className='pt-16 pb-7'>
                <div className='flex'>
                    <div className='flex flex-col space-y-4'>
                        <span className='font-montserrat text-xl text-blackText'>Sign up for</span>
                        <h1 className='text-white font-spaceGrotesk font-bold text-7xl'>NEWSLETTER</h1>
                        <span className='font-montserrat text-xl text-blackText'>Are you a Creator Interested to build, create and generate your own NFTs? Sign up for Beta by following the  link provided. </span>
                    </div>

                    <div className='flex flex-col justify-center items-end w-full'>
                        <form className='space-y-11'>
                            <div className='flex flex-col items-end space-y-5 w-full'>
                                <input className='font-montserrat text-black text-base px-5 py-3 rounded-lg w-96' type="text" placeholder='Your name' />
                                <input className='font-montserrat text-black text-base px-5 py-3 rounded-lg w-96' type="email" placeholder='E-mail Address' />
                            </div>

                            <div className='flex justify-start w-full'>
                                <button className='bg-black text-white px-11 py-5 rounded-lg text-xl font-inter'>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-16'>
                    <small className='text-center text-black font-inter text-sm'>© Official GenerateLabs.App 2023</small>
                </div>
            </Padding>

        </footer>
    )
}

export default Newsletter