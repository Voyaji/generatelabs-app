import React, {FunctionComponent, ReactNode} from 'react'

interface Props {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Padding:FunctionComponent<Props> = ({children, className, style}) => {
  return (
    <div className={` 
        px-[18px]
        sm:px-[32px]
        md:px-[64px]
        lg:px-[128px] lg:py-1
        xl:px-[162px] 
        ${className}`}
        style={style}>
        {children}
    </div>
  )
}

export default Padding