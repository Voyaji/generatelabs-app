import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import Padding from './Padding'

const Navbar:FunctionComponent = () => {
  return (
    <nav className='fixed top-0 w-full h-20 bg-black z-[999]'>
        <Padding className='flex h-full w-full
            
            lg:items-center '>
            <div className='flex items-center'>
                <img src="/images/generate_labs_app_logo.svg" alt="Generate Labs Logo"/>
            </div>

            <div className='hidden
                lg:flex
                flex-1 justify-center items-center space-x-10
                font-montserrat text-xl font-light text-white'>
                <Link href="#create">Create</Link>
                <Link href="#development">Development</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="#newsletter">Sign-up</Link>
            </div>

            <div className='hidden 
                lg:flex lg:space-x-4'>
                <img src="/images/Twitter-Negative.svg" alt="Twitter Logo"/>
                <img src="/images/Medium-Negative.svg" alt="Medium Logo"/>
            </div>
        </Padding>
    </nav>
  )
}

export default Navbar