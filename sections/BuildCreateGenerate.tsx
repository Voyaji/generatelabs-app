import React, { FunctionComponent } from 'react'

const BuildCreateGenerate: FunctionComponent = () => {
    return (
        <section className='relative overflow-hidden'>
            <div className='flex flex-col justify-center items-center h-screen w-full text-black '>
                <div className='flex justify-center items-center'>
                    <h1 className='font-spaceGrotesk font-bold text-6xl'>Build. Create. {" "}</h1>
                    <div className='relative ml-3'>
                        <img className="absolute inset-0 -translate-y-3 pointer-events-none" src="/images/circle_design_element_brush.svg" />
                        <h1 className='font-spaceGrotesk font-bold text-6xl'>Generate</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center font-montserrat text-3xl mt-6'>
                    <div>
                        <span className='font-bold'>A No-Code Tool {" "}</span>
                        for Businesses, Artist, Designers and <br />
                        Creators to build, create and generate  {" "}
                        <span className='relative inline-block'>
                            <img className='absolute -bottom-2' src="/images/line_design_element_brush.svg" />
                            NFT Collections.
                        </span>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-11'>
                    <button className='bg-black text-white px-11 py-5 rounded-lg text-xl font-inter'>
                        Create Now
                    </button>
                </div>
            </div>

            <img className='absolute top-0 left-16' src="/images/design_element_1.svg" />
            <img className='absolute -left-16 top-1/2 -translate-y-1/4' src="/images/design_element_2.svg" />
            <img className='absolute left-1/2 top-[5rem] -translate-y-1/2' src="/images/design_element_3.svg" />
            <img className='absolute right-0 top-[5rem] translate-x-1/2' src="/images/design_element_4.svg" />
            <img className='absolute right-16 top-1/2' src="/images/design_element_5.svg" />
        </section>
    )
}

export default BuildCreateGenerate