import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Design: FunctionComponent = () => {
    return (
        <div className='py-32 overflow-hidden
            lg:py-8 lg:pb-24'>
            
            <div className='flex flex-col space-y-12 w-full items-center
                lg:flex-row'>
                    <div>
                        <h1 className='text-center font-spaceGrotesk font-bold text-6xl mb-20'>The Design</h1>
                        <h2 className='font-montserrat text-3xl padding lg:pr-0 xl:px-[162px]'>
                        We’re developing easy to use No-Code Tools for users who want to build, create and generate NFTs. Whether you're a collector, an artist, or a business looking to expand into the world of NFTs, our platform is the perfect solution for you. 
                        </h2>
                    </div>

                <Image 
                    className="lg:w-1/2" 
                    src="/images/generatelabs.app_image.png" 
                    width={1800} height={1800} 
                    alt="Design Image"/>
            </div>
        </div>
    )
}

export default Design