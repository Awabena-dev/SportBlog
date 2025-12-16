import React, { ReactNode } from 'react'

const Title = ({ children }: { children?: ReactNode }) => {
    return (
        <h2 className='heading-3 text-secondary font-medium'>{children}</h2>
    )
}

export default Title