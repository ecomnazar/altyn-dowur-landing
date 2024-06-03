'use client'

import { useStore } from '@/entities/useStore'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export const CargoTranportation = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [enableInfo, setEnableInfo] = React.useState(false)

    const enableTrack = useStore((state) => state.trackEnabled)
    const changeEnableTrack = useStore((state) => state.changeTrackEnabled)

    const openModal = useStore((state) => state.changeTrackModal)

    const handleEnableTrack = () => {
        if (enableTrack) {
            changeEnableTrack(false)
        } else {
            openModal(true)
        }
    }

    const handleOpen = () => setIsOpen((prev) => !prev)

    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Section className="pt-[270px] md:pt-48">
            <Container>
                <div className="flex flex-col md:flex-row items-start space-y-2 mb-8 md:mb-0 md:items-center justify-between">
                    <Title>ГРУЗОПЕРЕВОЗКИ</Title>
                    <div className='relative w-full md:w-fit'>
                        <Button onClick={handleOpen}>РАССЧИТАТЬ СТОИМОСТЬ</Button>
                        <form onSubmit={sendForm} className={clsx('bg-[#004900]/40 z-[99] absolute rounded-[16px] w-[] sm:w-[400px] md:w-[600px] bottom-0 left-0 md:left-auto md:right-0  p-6 backdrop-blur-sm transition-all duration-500', {
                            'translate-y-[110%] opacity-1': isOpen,
                            'translate-y-[105%] opacity-0': !isOpen
                        })}>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-[18px] font-semibold text-primary'>Рассчитать стоимость доставки груза</h3>
                                <button onClick={() => setIsOpen(false)}>
                                    <Image src={'/icons/green-close.svg'} width={18} height={18} alt='Close icon' />
                                </button>
                            </div>
                            <div className='mt-6 space-y-4'>
                                <div className='relative'>
                                    <input type="text" placeholder='Откуда везти' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                    <Image src={'/icons/green-point.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='relative'>
                                        <input type="text" placeholder='Куда везти' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                        <Image src={'/icons/red-point.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' />
                                    </div>
                                    <div className='relative'>
                                        <input type="date" placeholder='Дата доставки' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                        {/* <Image src={'/icons/date.svg'} width={22} height={22} alt='Point icon' className='absolute top-1/2 -translate-y-1/2 right-5' /> */}
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <input type="text" placeholder='Ваше имя' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Ваш телефон' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <input type="text" placeholder='Вес груза' className='rounded-full h-[50px] w-full px-5 placeholder:text-[#777777]' />
                                    </div>
                                    <div className=''>
                                        <button onClick={handleEnableTrack} className='flex items-center justify-center gap-x-2 rounded-full h-12 w-full bg-primary text-white'>
                                            <div className='relative w-3.5 h-3.5 border-2 border-white flex items-center justify-center'>
                                                {enableTrack && <Image src="/icons/white-tick.svg" fill alt="Tick icon" />}
                                            </div>
                                            Отслеживание груза
                                            <Image src={'/icons/location.svg'} width={13} height={13} alt='Location icon' />
                                        </button>
                                    </div>
                                </div>
                                <div className='ml-4 flex items-center gap-x-2'>
                                    <div>
                                        <button onClick={() => setEnableInfo((prev) => !prev)} className='relative w-[14px] h-[14px] border-2 border-[#333333] flex items-center justify-center'>
                                            {enableInfo && <Image src="/icons/green-tick.svg" fill alt="Tick icon" />}
                                        </button>
                                    </div>
                                    <p className='text-[15px]'>Даю свое согласие на обработку моих <span className='text-[#004900]'>персональных данных</span></p>
                                </div>
                                <button className='rounded-full h-12 w-full bg-primary text-white'>ОТПРАВИТЬ ЗАЯВКУ</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mx-auto">
                    <Image src={'/images/map.png'} alt="Map" width={1200} height={1200} />
                    <div className="flex items-center">
                        <Image src={'/images/trains.png'} alt="Trains" width={600} height={600} />
                        <Image src={'/images/trains.png'} alt="Trains" width={600} height={600} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
