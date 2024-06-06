import clsx from 'clsx';
import React from 'react'

interface Props {
    title: string;
    icon: JSX.Element
    className?: string;
}

export const MiniButton: React.FC<Props> = ({ title, icon, className }) => {
    return (
        <button className={clsx("bg-primary flex items-center text-[16px] font-medium py-2 px-3 rounded-full gap-x-2 text-white whitespace-nowrap", className)}>
            {icon}
            {title}
        </button>
    )
}
