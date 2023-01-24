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
    style?: React.CSSProperties;
}
  
const Accordion: FunctionComponent<Props> = ({theme = "light", header, body, style}) => {
    const [isOpen, setIsOpen] = useState(false)
    const panel = useRef<HTMLDivElement>(null)

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <Fragment>
            {/* @ts-ignore */}
            <AccordionMUI open={isOpen} className={`${theme === 'light'? ' bg-dirtyWhite' : 'bg-black'} rounded-lg`} style={style}>
                {/* @ts-ignore */}
                <AccordionHeader className={`text-left px-10 py-6 rounded-lg font-spaceGrotesk font text-xl ${theme === 'light'? 'text-blackText' : 'text-white hover:text-white'}`} 
                    onClick={() => toggleOpen()}>
                    {header}
                </AccordionHeader>
                <AccordionBody className={`px-10 py-6 border-2 rounded-lg font-spaceGrotesk text-xl ${theme === 'light'? 'text-blackText' : 'text-white'}`}>
                    {body}
                </AccordionBody>
            </AccordionMUI>
        </Fragment>
    )
}

export default Accordion