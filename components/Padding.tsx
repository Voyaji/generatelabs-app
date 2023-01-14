import React, {FunctionComponent, ReactNode} from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

const Padding:FunctionComponent<Props> = ({children, className}) => {
  return (
    <div className={`${className} px-24 py-1`}>
        {children}
    </div>
  )
}

export default Padding