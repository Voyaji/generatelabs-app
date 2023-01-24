import React, {FunctionComponent, ReactNode} from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

const Padding:FunctionComponent<Props> = ({children, className}) => {
  return (
    <div className={`${className} 
        px-[18px]
        sm:px-[32px]
        md:px-[64px]
        lg:px-[128px]
        xl:px-[162px] lg:py-1`}>
        {children}
    </div>
  )
}

export default Padding