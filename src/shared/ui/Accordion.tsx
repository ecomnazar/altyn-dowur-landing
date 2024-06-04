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
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer shadow-lg p-4 rounded-[30px] border border-primary'>
            <div className='flex items-center justify-between'>
                <button>{title}</button>
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