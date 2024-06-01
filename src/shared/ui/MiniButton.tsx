import React from 'react'

interface Props {
    title: string;
    icon: JSX.Element
}

export const MiniButton: React.FC<Props> = ({ title, icon }) => {
    return (
        <button className="bg-primary flex items-center text-[16px] font-medium py-2 px-3 rounded-full gap-x-2 text-white whitespace-nowrap">
            {icon}
            {title}
        </button>
    )
}
