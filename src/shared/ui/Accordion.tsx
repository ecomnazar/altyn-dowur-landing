'use client'

import clsx from 'clsx';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

interface AccordionProps {
    title: string;
    description: string
}

export const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer shadow-[0_3px_5px_1.5px_rgba(0,0,0,0.2)] p-4 rounded-full sm:rounded-[30px]'>
            <div className='flex items-center justify-between'>
                <button className='text-left'>{title}</button>
                <FaPlus className={clsx('text-primary transition-all duration-500', {
                    'rotate-45': isOpen,
                })} size={24} />
            </div>
            <div className={clsx('max-h-0 overflow-hidden transition-all', {
                'max-h-[1000px] duration-1000 delay-300': isOpen,
                'duration-500': !isOpen
            })}>{description}</div>
        </div>
    );
};