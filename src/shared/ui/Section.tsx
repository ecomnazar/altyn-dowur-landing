import clsx from 'clsx'
import React from 'react'

interface Props {
    className?: string
    children: React.ReactNode
}

export const Section: React.FC<Props> = ({ className, children }) => {
    return (
        <section className={clsx('py-12 md:py-24', className)}>{children}</section>
    )
}
