import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Development: FunctionComponent = () => {

    return (
        <section className='bg-black' id="development">
            <Padding className='space-y-20 !py-24'>
                <h1 className='text-white text-center font-spaceGrotesk text-4xl font-bold
                    lg:text-6xl'>DEVELOPMENT</h1>

                <div className='flex w-full justify-center h-auto relative
                    after:hidden after:lg:block after:absolute after:content-[" "] after:w-[5px] after:h-full after:bg-gradient-to-b after:bg-line-gradient'>
                    <ul className='text-white'>
                        
                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-left lg:clear-right lg:-translate-x-7'>
                            <h2 className='font-bold text-2xl'>Q1</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -right-[14px] translate-x-7
                                after:content-[" "] after:bg-blackText after:w-4 after:h-4 after:rounded-full
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'></span>
                            <div>The team will focus on building and designing the No Code Tool NFT software. This includes creating the user interface, developing the necessary features, and ensuring that the software is user-friendly and easy to navigate. </div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-right lg:clear-left lg:translate-x-7'>
                            <h2 className='font-bold text-2xl'>Q2</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -left-[14px] -translate-x-7'></span>
                            <div> The software will be available for Beta Access to holders of Generate Labs NFT. This will allow them to test the software and provide valuable feedback to the team. The team will use this feedback to make any necessary adjustments and improvements before the software is released to the public.</div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-left lg:clear-right lg:-translate-x-7'>
                            <h2 className='font-bold text-2xl'>Q3</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -right-[14px] translate-x-7'></span>
                            <div>Public Access is now available to users. The team will focus on the analyzation of usage data and addition of features requested by users to identify areas for improvement. Potential partnerships and integrations with other companies and platforms in the NFT space to expand the capabilities and reach of our software.</div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-right lg:clear-left lg:translate-x-7'>
                            <h2 className='font-bold text-2xl'>Q4</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -left-[14px] -translate-x-7'></span>
                            <div>In Q4, the team will continue to improve the software and announce additional features. This includes adding new functionality, addressing key pointers that are identified by users, and ensuring that the software is up-to-date with the latest technology. The goal is to provide users with the best possible experience and to continue to innovate and improve the software.</div>
                        </li>
                    </ul>
                </div>

            </Padding>
        </section>
    )
}

export default Development