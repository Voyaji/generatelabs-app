import React, { FunctionComponent } from 'react'

const BuildCreateGenerate: FunctionComponent = () => {
    return (
        <section className='relative overflow-hidden pt-[80px]'>
            <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] w-full text-black padding py-0 space-y-14
                lg:items-center'>
                
                <div className='flex flex-col justify-center items-start font-spaceGrotesk font-bold text-5xl sm:text-7xl
                    xl:flex-row lg:items-center'>
                    <h1>Build. 
                    <span className='block lg:inline-block'>Create.</span></h1>
                    <div className='relative lg:ml-3'>
                        <img className="absolute inset-0 -translate-y-3 pointer-events-none" src="/images/circle_design_element_brush.svg" />
                        <h1>Generate</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center font-montserrat text-3xl mt-6 z-50'>
                    <div className='lg:text-center'>
                        <span className='font-bold'>A No-Code Tool {" "}</span>
                        for Businesses, Artist, Designers and 
                        <span className='inline-block'>Creators to build, create and generate</span>
                          {" "}
                        <span className='relative inline-block'>
                            <img className='absolute -bottom-2' src="/images/line_design_element_brush.svg" />
                            NFT Collections.
                        </span>
                    </div>
                </div>

                <div className='flex justify-start items-center mt-11
                    lg:justify-center'>
                    <button className='bg-black text-white px-11 py-5 rounded-xl text-xl font-inter'>
                        Create Now
                    </button>
                </div>
            </div>

            <img className='hidden lg:block absolute top-0 left-16' src="/images/design_element_1.svg" />
            <img className='hidden 2xl:block absolute -left-16 top-1/2 -translate-y-1/4' src="/images/design_element_2.svg" />
            <img className='hidden lg:block absolute left-1/2 top-[5rem] -translate-y-1/2' src="/images/design_element_3.svg" />
            <img className='hidden lg:block absolute right-0 top-[5rem] translate-x-1/2' src="/images/design_element_4.svg" />
            <img className='hidden 2xl:block absolute right-16 top-1/2' src="/images/design_element_5.svg" />
        </section>
    )
}

export default BuildCreateGenerate