import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Development: FunctionComponent = () => {
    return (
        <section className='bg-black'>
            <Padding className='space-y-20 py-24'>
                <h1 className='text-white text-center font-spaceGrotesk text-6xl font-bold'>DEVELOPMENT</h1>

                <div className='flex space-x-2'>
                <div className='flex-1 space-y-4'>
                        {/* card */}
                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>The Software</h2>
                            <div>A No Code Tool for Creators to be able to build , create and generate NFTs. Experience a seamless transition into NFTs and Web3 using the Generate Labs Software Application.</div>
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Build</h2>
                            <div>Envision your ideas and seamlessly build the NFT Collection and Creation that you have in mind. The possibilities are endless using the Generate Labs No Code Tool and Software.</div>
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Create</h2>
                            <div>Build and Create the Collection with your team using our intuitive tools designed for co-working. Easily share your workspace - together, or work solo. You decide with your personalized No Code Tools available with the App.</div>
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Generate</h2>
                            <div>Upload, Arrange and Click Generate. Using the Tools you can seamlessly work and focus on other areas of building your NFT Project. Easily move across generating and building out the Contracts for your proposed NFT Collection. Generating has never been more efficient.</div>
                        </div>
                    </div>
                    
                    <div className='px-2 bg-red-300 relative'>
                    </div>
                    
                    <div className='flex-1 space-y-4'>
                        {/* card */}
                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5 relative'>
                            <h2 className='font-bold text-2xl'>The Software</h2>
                            <div>A No Code Tool for Creators to be able to build , create and generate NFTs. Experience a seamless transition into NFTs and Web3 using the Generate Labs Software Application.</div>
                            <div className='w-4 h-4 rounded-full bg-blue-300 absolute left-0 top-full '></div>  
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Build</h2>
                            <div>Envision your ideas and seamlessly build the NFT Collection and Creation that you have in mind. The possibilities are endless using the Generate Labs No Code Tool and Software.</div>
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Create</h2>
                            <div>Build and Create the Collection with your team using our intuitive tools designed for co-working. Easily share your workspace - together, or work solo. You decide with your personalized No Code Tools available with the App.</div>
                        </div>

                        <div className='border border-white px-4 py-8 text-white rounded-lg font-montserrat space-y-5'>
                            <h2 className='font-bold text-2xl'>Generate</h2>
                            <div>Upload, Arrange and Click Generate. Using the Tools you can seamlessly work and focus on other areas of building your NFT Project. Easily move across generating and building out the Contracts for your proposed NFT Collection. Generating has never been more efficient.</div>
                        </div>
                    </div>
                </div>

            </Padding>
        </section>
    )
}

export default Development