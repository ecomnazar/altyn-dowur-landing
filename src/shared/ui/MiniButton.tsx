import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    icon: JSX.Element
    className?: string;
    suffixIcon?: JSX.Element

}

export const MiniButton: React.FC<Props> = ({ title, icon, className, suffixIcon, ...props }) => {
    return (
        <button {...props} className={clsx("bg-primary flex items-center text-[16px] font-medium py-2 px-3 rounded-full gap-x-2 text-white whitespace-nowrap", className)}>
            {icon}
            {title}
            {suffixIcon && suffixIcon}
        </button>
    )
}
