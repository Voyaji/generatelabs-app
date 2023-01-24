import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const Design: FunctionComponent = () => {
    return (
        <div className='py-32 overflow-hidden
            lg:py-8'>
            
            <div className='flex flex-col space-y-12 w-full items-center
                lg:flex-row'>
                    <div>
                        <h1 className='text-center font-spaceGrotesk font-bold text-6xl mb-20'>The Design</h1>
                        <h2 className='font-montserrat text-3xl padding lg:pr-0 xl:px-[162px]'>
                            We're developing an easy to use No-Code Software for users who want to build, create and generate NFTs.
                        </h2>
                    </div>
                <img className="lg:w-1/2" src="/images/Design_Area.svg" />
            </div>
        </div>
    )
}

export default Design