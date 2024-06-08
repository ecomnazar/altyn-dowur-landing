'use client'

import Image from 'next/image'
import React from 'react'
import { Container } from '@/shared/ui/Container'
import { Section } from '@/shared/ui/Section'
import { Title } from '@/shared/ui/Title'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import 'swiper/css';

export const Clients = () => {

    const swiperRef = React.useRef<SwiperRef>(null)

    const handleNext = () => swiperRef.current?.swiper?.slideNext()
    const handlePrev = () => swiperRef.current?.swiper?.slidePrev()

    const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0

    return (
        <Section>
            <Container>
                <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8'>
                    <Title className='whitespace-nowrap'>Что говорят наши <span className='hidden lg:inline-block'>клиенты</span></Title>
                    <div className='hidden lg:inline-block h-[2px] w-[90%] bg-gradient-to-r from-primary ml-4 via-primary/50 to-primary/0' />

                    <div className='w-full flex lg:hidden items-center justify-between'>
                        <div className='flex items-center w-full'>
                            <Title>клиенты</Title>
                            <div className='h-[2px] w-[90%] bg-gradient-to-r from-primary ml-4 via-primary/50 to-primary/0' />
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <button onClick={handlePrev} className='w-10 h-10 bg-[#333333] hover:bg-primary p-2.5 rounded-full rotate-180'><Image src={'/icons/arrow-right.svg'} width={35} height={45} alt='Arrow icon' /></button>
                            <button onClick={handleNext} className='w-10 h-10 bg-[#333333] hover:bg-primary p-2.5 rounded-full'><Image src={'/icons/arrow-right.svg'} width={35} height={45} alt='Arrow icon' /></button>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center gap-x-3'>
                        <button onClick={handlePrev} className='w-10 h-10 bg-[#333333] hover:bg-primary p-2.5 rounded-full rotate-180'><Image src={'/icons/arrow-right.svg'} width={35} height={45} alt='Arrow icon' /></button>
                        <button onClick={handleNext} className='w-10 h-10 bg-[#333333] hover:bg-primary p-2.5 rounded-full'><Image src={'/icons/arrow-right.svg'} width={35} height={45} alt='Arrow icon' /></button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={innerWidth > 768 ? 2 : 1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    ref={swiperRef}
                >
                    {Array.from({ length: 8 }).map((_, index) => {
                        return <SwiperSlide key={index}>
                            <div className='bg-[#F1F4F7] py-4 px-6 rounded-[20px]'>
                                <div className='flex items-start justify-between'>
                                    <div className='flex items-center gap-x-4'>
                                        <div>
                                            <div className='w-20 h-20 rounded-full bg-[#666666]' />
                                        </div>
                                        <div>
                                            <h3 className='text-[#333333] font-medium text-[19px]'>Максим Свиридов</h3>
                                            <p className='text-[#777777] text-[13px]'>Уборка после ремонта</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-1 translate-y-1'>
                                        {Array.from({ length: 5 }).map((_, index) => {
                                            return <Image key={index} src={'/icons/star.svg'} width={18} height={18} alt='Star' />
                                        })}
                                    </div>
                                </div>
                                <p className='mt-8 text-[#777777] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>

                {/* <button className="bg-gradient-to-br from-primary via-primary/50 to-white text-white font-semibold rounded p-0.5">
                    <span className="flex w-full bg-gray-900 text-white rounded p-2">
                        Gradient border
                    </span>
                </button> */}

            </Container>
        </Section>
    )
}
