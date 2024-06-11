import clsx from 'clsx'
import React from 'react'

interface Props {
    className?: string;
    isOpen?: boolean
}

export const LanguageChanger: React.FC<Props> = ({ className, isOpen }) => {
    return (
        <div className={clsx('absolute top-full right-0 bg-white rounded-md transition-all duration-500', className, {
            'opacity-1 visibile translate-y-[10px]': isOpen,
            'opacity-0 invisible translate-y-[0px] ': !isOpen
        })}>
            <ul className='text-black py-2'>
                <li className='px-4 py-1'>TM</li>
                <li className='px-4 py-1'>RU</li>
                <li className='px-4 py-1'>EN</li>
            </ul>
        </div>
    )
}
