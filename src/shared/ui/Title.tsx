import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Title: React.FC<Props> = ({ className, children }) => {
    return (
        <h2 className={clsx("uppercase text-primary text-[22px] sm:text-[34px] md:text-[46px] font-bold", className)}>{children}</h2>
    )
}
