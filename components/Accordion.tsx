import React, { Fragment, FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'
import GrayPlus from './icons/GrayPlus'
import Minus from './icons/Minus'
import {
    Accordion as AccordionMUI,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

interface Props {
    theme?: string;
    header: ReactNode;
    body: ReactNode;
}
  
const Accordion: FunctionComponent<Props> = ({theme = "light", header, body}) => {
    const [isOpen, setIsOpen] = useState(false)
    const panel = useRef<HTMLDivElement>(null)

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <Fragment>
            {/* @ts-ignore */}
            <AccordionMUI open={isOpen} className={`bg-${theme === 'light'? 'dirtyWhite' : 'black'} rounded-lg`}>
                {/* @ts-ignore */}
                <AccordionHeader className={`px-10 py-6 rounded-lg font-spaceGrotesk font-bold text-xl ${theme === 'light'? 'text-blackText' : 'text-white hover:text-white'}`} 
                    onClick={() => toggleOpen()}>
                    {header}
                </AccordionHeader>
                <AccordionBody className={`px-10 py-6 font-spaceGrotesk font-bold text-xl text-${theme === 'light'? 'blackText' : 'white'}`}>
                    {body}
                </AccordionBody>
            </AccordionMUI>
        </Fragment>
    )
}

export default Accordion