import { Container } from '@/shared/ui/Container'
import { MenuButton } from '@/shared/ui/MenuButton'
import { MiniButton } from '@/shared/ui/MiniButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="h-screen w-screen relative bg-header-background bg-cover bg-center pt-8">
            <Container className='relative'>
                <div className="bg-white/80 backdrop-blur-sm py-3 px-5 rounded-full flex items-center justify-between">
                    <Image width={70} height={70} src="/images/logo.png" alt="Altyn Döwür HJ Logo" />
                    <ul className="hidden lg:flex items-center gap-x-4">
                        <li className='text-[18px] text-primary font-semibold'>Грузоперевозки</li>
                        <li><a href={'#target'} className="text-secondary font-medium text-[18px]" >О компани</a></li>
                        <li><a href={'#services'} className="text-secondary font-medium text-[18px]" >Услуги</a></li>
                        <li><a href={'#footer'} className="text-secondary font-medium text-[18px]" >Контакты</a></li>
                    </ul>
                    <div className='flex items-center gap-x-4'>
                        <div className='hidden lg:flex items-center gap-x-2'>
                            <button className='flex items-center gap-x-2'>
                                <h4 className='text-[18px] font-medium'>RU</h4>
                                <Image src={'/icons/arrow-down.svg'} width={14} height={14} alt='Arrow down icon' />
                            </button>
                            <a href="tel:+99363877877">
                                <MiniButton
                                    title="+993 63 877877"
                                    icon={<Image src={'/icons/call-icon.svg'} width={22} height={22} alt="Call icon" />}
                                />
                            </a>
                        </div>
                        <div className='text-[16px] bg-[#4A6D4A] rounded-full pr-3 text-white hidden md:flex items-center justify-center h-[44px]'>
                            <Link href={'/register'} className='bg-primary h-full rounded-full mr-3 px-3 flex items-center'>Регистрация</Link>
                            <Link href={'/login'}>Войти</Link>
                        </div>
                        <MenuButton />
                    </div>
                </div>
                <div className="mt-[50px] sm:mt-[150px] space-y-4 text-center">
                    <h2 className="text-center text-[28px] sm:text-[34px] md:text-[46px] font-semibold max-w-[950px] mx-auto text-white">
                        Оптимизируйте свои операции по
                        доставке с помощью наших быстрых и
                        надежных услуг грузовых поездов.
                    </h2>
                    <h1 className="text-center text-[28px] sm:text-[34px] md:text-[46px] font-semibold text-white">Altyn Dowur H.J.</h1>
                    <button className="text-white border rounded-full w-[250px] md:w-[350px] h-[60px] mx-auto font-semibold hover:bg-white hover:text-primary transition-all text-[18px] block !mt-8">Заказать звонок</button>
                </div>
            </Container>
            <div>
                <Container className="shadow-lg w-[90%] sm:w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-wrap justify-between bg-white/80 backdrop-blur-sm rounded-[30px] py-8 px-12 gap-y-8">
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">22</h4>
                            <h6 className="text-secondary">года</h6>
                        </div>
                        <h4 className="max-w-[170px] font-medium text-[16px] text-secondary">УСПЕШНОЙ РАБОТЫ В ОТРАСЛИ</h4>
                    </div>
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">55</h4>
                            <h6 className="text-secondary">вагонов</h6>
                        </div>
                        <h4 className="max-w-[170px] font-medium text-[16px] text-secondary">В НАШЕМ ПАРКЕ</h4>
                    </div>
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">155</h4>
                            <h6 className="text-secondary">клиентов</h6>
                        </div>
                        <h4 className="max-w-[200px] font-medium text-[16px] text-secondary">ОБРАТИЛИСЬ К НАМ И ОСТАЛИСЬ ДОВОЛЬНЫ</h4>
                    </div>
                </Container>
            </div>

        </header>
    )
}
