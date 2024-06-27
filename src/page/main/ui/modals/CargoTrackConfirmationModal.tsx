'use client'

import { useStore } from '@/entities/useStore'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    lng: string;
}

export const CargoTrackConfirmationModal: React.FC<Props> = ({ lng }) => {
    const { t } = useTranslation(lng)

    const isOpen = useStore((state) => state.trackModal)

    const close = useStore((state) => state.changeTrackModal)
    const setServiceEnableModal = useStore((state) => state.setServiceEnabledModal)

    const changeEnableTrack = useStore((state) => state.changeTrackEnabled)
    const enableTrack = useStore((state) => state.trackEnabled)

    const onClose = () => close(false)

    const onSave = () => {
        onClose()
        changeEnableTrack(enableTrack ? false : true)
        setServiceEnableModal(true)
    }

    return (
        <div className={clsx('fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center transition-all duration-500', {
            'invisible opacity-0': !isOpen,
            'visible opacity-1': isOpen
        })}>
            <div className='relative bg-white w-[90%] sm:w-full max-w-[600px] p-8 rounded-[22px] flex flex-col items-center justify-center'>
                <button className='absolute top-5 right-5' onClick={onClose}>
                    <Image src={'/icons/green-close.svg'} width={18} height={18} alt='Close icon' />
                </button>
                <h3 className='text-primary font-bold text-[20px] text-center max-w-[440px]'>{t('cargoTrackConfirmationModalTitle')}</h3>
                <div className='w-full space-y-4 mt-4'>
                    <Button onClick={onSave} className='!py-2.5 w-full transition-all hover:scale-[1.03] hover:!bg-white hover:!text-primary border border-primary'>{t('continue')}</Button>
                    <Button onClick={onClose} className='!py-2.5 w-full transition-all hover:scale-[1.03] hover:!bg-white hover:!text-primary border border-primary'>{t('back')}</Button>
                </div>
            </div>
        </div>
    )
}
