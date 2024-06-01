import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={clsx('max-w-[1200px] mx-auto px-6', className)}>{children}</div>
    )
}