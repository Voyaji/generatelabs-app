import React, { FunctionComponent } from 'react'

interface Props {
    className?: string;
    toggleAccordion: () => void;
}

const Minus: FunctionComponent<Props> = ({ className, toggleAccordion }) => {
    return (
        <svg className={`${className}`} onClick={() => toggleAccordion()}
            width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20H10" stroke="#28292B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Minus

