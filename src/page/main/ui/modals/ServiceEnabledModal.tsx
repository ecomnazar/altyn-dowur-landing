'use client'

import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { useStore } from '@/entities/useStore'

export const ServiceEnabledModal = () => {
    const isOpen = useStore((state) => state.serviceEnabledModal)

    const close = useStore((state) => state.setServiceEnabledModal)


    const changeEnableTrack = useStore((state) => state.changeTrackEnabled)
    const enableTrack = useStore((state) => state.trackEnabled)

    const onClose = () => close(false)

    const onSave = () => {
        onClose()
        changeEnableTrack(enableTrack ? false : true)
    }

    return (
        <div className={clsx('fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center transition-all duration-500', {
            'invisible opacity-0': !isOpen,
            'visible opacity-1': !isOpen
        })}>
            <div className='relative bg-white w-[90%] sm:w-full max-w-[600px] p-8 rounded-[22px] flex flex-col items-center justify-center'>
                <button className='absolute top-5 right-5' onClick={onClose}>
                    <Image src={'/icons/green-close.svg'} width={18} height={18} alt='Close icon' />
                </button>
                <h3 className='text-primary font-bold text-[20px] text-left'>Услуга подключена к общей стоимости груза</h3>
            </div>
        </div>
    )
}
