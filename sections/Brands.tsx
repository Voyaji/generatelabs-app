import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Padding from '../components/Padding'

const LaptopBrands: FunctionComponent = () => {
    return (
        <>
            <div className='grid grid-cols-5 xl:padding py-0 mb-12'>
                <Link href="https://illiquidcapital.io/" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_1.svg" alt="Illiquid Capital Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://www.alfahanta.io/" className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_2.svg" alt="Alfa Hanta Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://twitter.com/gameficapital" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_3.svg" alt="GameFi Capital Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://www.movingdimensions.net/" className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_4.svg" alt="Moving Dimensions Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://twitter.com/RoninsVIP" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_5.svg" alt="Cyber Ronins Logo" className="pointer-events-none" />
                </Link>
            </div>

            <div className='grid grid-cols-6 mb-36 mt-0'>
                <Link href="https://www.hawkersco.com/en" className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_6.svg" alt="Hawkers Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://lympo.io/" target="_blank" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_7.svg" alt="Lympo Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://twitter.com/psydelve" className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_8.svg" alt="Psydelve Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://www.abokhashem.com/home?fbclid=IwAR0vZncaB767NKg4ghcxGwRtTQR8f5L9WuUiKV2nUz2qlPIHsrD2gYsGUXs" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_9.svg" alt="Abokhashem Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://battlespecies.net/" className='flex justify-center items-center py-8 bg-iconBg'>
                    <img src="/images/logo_10.svg" alt="Battle Species Logo" className="pointer-events-none" />
                </Link>
                <Link href="https://twitter.com/KingCrownDAO?fbclid=IwAR32Ko18zr2b-UxwpOvk1PGlhnvqF1jEd2E1fzT1y5bq9GNj5lTEBa3zVKk" className='flex justify-center items-center py-8 '>
                    <img src="/images/logo_11.svg" alt="King Crown Dao Logo" className="pointer-events-none" />
                </Link>
            </div>
        </>
    )
}

const MobileBrands: FunctionComponent = () => {
    return (
        <>
            <div className='grid grid-cols-2 grid-rows-10 py-0'>
                <Link href="https://illiquidcapital.io/" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_1.svg" alt="Illiquid Capital Logo" />
                </Link>
                <Link href="https://www.alfahanta.io/" target="_blank" className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_2.svg" alt="Alfa Hanta Logo" />
                </Link>
                <Link href="https://twitter.com/gameficapital" target="_blank" className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_3.svg" alt="GameFi Capital Logo" />
                </Link>
                <Link href="https://www.movingdimensions.net/" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_4.svg" alt="Moving Dimensions Logo" />
                </Link>
                <Link href="https://twitter.com/RoninsVIP" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_5.svg" alt="Cyber Ronins Logo" />
                </Link>
                <Link href="https://www.hawkersco.com/en" target="_blank" className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_6.svg" alt="Hawkers Logo" />
                </Link>
                <Link href="https://twitter.com/psydelve" target="_blank" className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_8.svg" alt="Psydelve Logo" />
                </Link>
                <Link href="https://lympo.io/" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_7.svg" alt="Lympo Logo" />
                </Link>

                <Link href="https://www.abokhashem.com/home?fbclid=IwAR0vZncaB767NKg4ghcxGwRtTQR8f5L9WuUiKV2nUz2qlPIHsrD2gYsGUXs" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                    <img src="/images/logo_9.svg" alt="Abokhashem Logo" />
                </Link>
                <Link href="https://battlespecies.net/" target="_blank" className='flex justify-center items-center h-24 px-2 bg-iconBg'>
                    <img src="/images/logo_10.svg" alt="Battle Species Logo" />
                </Link>

            </div>
            <Link href="https://twitter.com/KingCrownDAO?fbclid=IwAR32Ko18zr2b-UxwpOvk1PGlhnvqF1jEd2E1fzT1y5bq9GNj5lTEBa3zVKk" target="_blank" className='flex justify-center items-center h-24 px-2 '>
                <img src="/images/logo_11.svg" alt="King Crown Dao Logo" />
            </Link>
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