import React from 'react'

const CategorySpan = ({ children }: { children?: React.ReactNode | string }) => {
    return (
        <span className='body-1 max-w-fit py-2 px-4 text-primary-200 font-medium border border-primary-200 bg-transparent'>
            {children}
        </span>
    )
}

export default CategorySpan