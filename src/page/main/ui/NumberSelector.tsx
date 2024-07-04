'use client'

import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { MiniButton } from '@/shared/ui/MiniButton'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export const NumberSelector = () => {
    const [isOpened, setIsOpened] = React.useState(false)
    const ref = useOutsideClick(() => {
        isOpened && setIsOpened(false)
    })

    const onClickButton = () => {
        setIsOpened((prev) => !prev)
    }

    const onCall = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
        setIsOpened(false)
    }



    return (
        <div ref={ref} className='relative'>
            <MiniButton
                onClick={onClickButton}
                title="+993 63 87-78-77"
                icon={<Image src={'/icons/call-icon.svg'} width={22} height={22} alt="Call icon" />}
                suffixIcon={<Image src={'/icons/arrow-down-white.svg'} width={16} height={16} alt="Arrow" className={clsx('', {
                    'transform rotate-180': isOpened
                })} />}
            />


            {isOpened && <div className='absolute top-[110%] w-full left-0 space-y-1'>
                <MiniButton
                    icon={<Image src={'/icons/call-icon.svg'} width={18} className='ml-3' height={18} alt="Call icon" />}
                    title="+993 63 87-78-77"
                    className='rounded-br-none w-full rounded-bl-none text-[12px h-[32px]'
                    onClick={() => onCall('+99363877877')}
                />
                <MiniButton
                    icon={<Image src={'/icons/call-icon.svg'} width={18} className='ml-3' height={18} alt="Call icon" />}
                    title="+993 12 94-11-22"
                    className='w-full rounded-none text-[12px h-[32px]'
                    onClick={() => onCall('+99312941122')}
                />
                <MiniButton
                    icon={<Image src={'/icons/call-icon.svg'} width={18} className='ml-3' height={18} alt="Call icon" />}
                    title="+993 12 94-11-10"
                    className='w-full rounded-none text-[12px h-[32px]'
                    onClick={() => onCall('+99312941110')}
                />
                <MiniButton
                    icon={<Image src={'/icons/call-icon.svg'} width={18} className='ml-3' height={18} alt="Call icon" />}
                    title="+993 65 80-87-77"
                    className='w-full rounded-none text-[12px h-[32px]'
                    onClick={() => onCall('+99365808777')}
                />
                <MiniButton
                    icon={<Image src={'/icons/call-icon.svg'} width={18} className='ml-3' height={18} alt="Call icon" />}
                    title="+993 71 28-28-28"
                    className='w-full rounded-tr-none rounded-tl-none text-[12px h-[32px]'
                    onClick={() => onCall('+99371282828')}
                />
            </div>}

        </div>
    )
}
