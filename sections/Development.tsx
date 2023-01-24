import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Development: FunctionComponent = () => {

    return (
        <section className='bg-black'>
            <Padding className='space-y-20 !py-24'>
                <h1 className='text-white text-center font-spaceGrotesk text-4xl font-bold
                    lg:text-4xl'>DEVELOPMENT</h1>

                <div className='flex w-full justify-center h-auto relative
                    after:hidden after:lg:block after:absolute after:content-[" "] after:w-[5px] after:h-full after:bg-gradient-to-b after:bg-line-gradient'>
                    <ul className='text-white'>
                        
                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-left lg:clear-right lg:-translate-x-7'>
                            <h2 className='font-bold text-2xl'>The Software</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -right-[14px] translate-x-7
                                after:content-[" "] after:bg-blackText after:w-4 after:h-4 after:rounded-full
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'></span>
                            <div>A No Code Tool for Creators to be able to build , create and generate NFTs. Experience a seamless transition into NFTs and Web3 using the Generate Labs Software Application.</div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-right lg:clear-left lg:translate-x-7'>
                            <h2 className='font-bold text-2xl'>Build</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -left-[14px] -translate-x-7'></span>
                            <div>Envision your ideas and seamlessly build the NFT Collection and Creation that you have in mind. The possibilities are endless using the Generate Labs No Code Tool and Software.</div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-left lg:clear-right lg:-translate-x-7'>
                            <h2 className='font-bold text-2xl'>Create</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -right-[14px] translate-x-7'></span>
                            <div>Build and Create the Collection with your team using our intuitive tools designed for co-working. Easily share your workspace - together, or work solo. You decide with your personalized No Code Tools available with the App.</div>
                        </li>

                        <li className='h-auto px-4 py-8 border border-white rounded-lg relative z-[99] mb-8 space-y-8
                            lg:w-1/2 lg:float-right lg:clear-left lg:translate-x-7'>
                            <h2 className='font-bold text-2xl'>Generate</h2>
                            <span className='hidden lg:block border border-black w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -left-[14px] -translate-x-7'></span>
                            <div>Upload, Arrange and Click Generate. Using the Tools you can seamlessly work and focus on other areas of building your NFT Project. Easily move across generating and building out the Contracts for your proposed NFT Collection. Generating has never been more efficient.</div>
                        </li>
                    </ul>
                </div>

            </Padding>
        </section>
    )
}

export default Development