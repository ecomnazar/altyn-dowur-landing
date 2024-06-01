import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<Props> = ({ children, className, type = 'button', ...props }) => {
    return (<button type={type} {...props} className={clsx("bg-primary text-white rounded-full py-2 md:py-4 px-6 md:px-8 text-[14px] md:text-[20px]", className)}>{children}</button>
    )
}
