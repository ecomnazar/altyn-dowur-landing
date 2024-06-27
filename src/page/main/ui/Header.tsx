'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/shared/ui/Container'
import { MiniButton } from '@/shared/ui/MiniButton'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { LanguageChanger } from './LanguageChanger'
import { TFunction } from 'i18next'
import { useTranslation } from '@/app/i18n/client'

interface Props {
    lng: string
}



export const Header: React.FC<Props> = ({ lng }) => {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false)
    const [openLanguage, setOpenLanguage] = React.useState(false)
    const [openLanguagePC, setOpenLanguagePC] = React.useState(false)

    const { t } = useTranslation(lng)

    const closeMenu = () => {
        // setIsOpenMenu(false)
    }

    const divRef = useOutsideClick(() => {
        setIsOpenMenu(false)
    })

    return (
        <header className="relative h-[120vh] sm:h-screen w-screen bg-header-background bg-cover bg-center pt-8">
            <Container>
                <div className="bg-white/80 backdrop-blur-sm py-3 px-5 rounded-full flex items-center justify-between">
                    <Image width={70} height={70} src="/images/logo.png" alt="Altyn Döwür HJ Logo" />
                    <ul className="hidden lg:flex items-center gap-x-8">
                        <li className='text-[18px] text-primary font-semibold'>{t('trucking')}</li>
                        <li><a href={'#target'} className="text-secondary font-medium text-[18px]" >{t('aboutTheCompany')}</a></li>
                        <li><a href={'#services'} className="text-secondary font-medium text-[18px]" >{t('services')}</a></li>
                        <li><a href={'#footer'} className="text-secondary font-medium text-[18px]" >{t('contacts')}</a></li>
                    </ul>
                    <div className='flex items-center gap-x-4'>
                        <div className='hidden lg:flex items-center gap-x-2'>
                            <button onClick={() => setOpenLanguagePC((prev) => !prev)} className='flex items-center gap-x-2 mr-2 relative'>
                                <h4 className='text-[18px] font-medium'>{lng.toUpperCase()}</h4>
                                <Image src={'/icons/arrow-down.svg'} width={14} height={14} alt='Arrow down icon' />
                                <LanguageChanger isOpen={openLanguagePC} />
                            </button>
                            <a href="tel:+99363877877">
                                <MiniButton
                                    title="+993 63 877877"
                                    icon={<Image src={'/icons/call-icon.svg'} width={22} height={22} alt="Call icon" />}
                                />
                            </a>
                        </div>
                        <div className='text-[16px] bg-[#4A6D4A] rounded-full pr-3 text-white hidden md:flex items-center justify-center h-[44px]'>
                            <Link href={'/register'} className='bg-primary h-full rounded-full mr-3 px-3 flex items-center'>{t('signUp')}</Link>
                            <Link href={'/login'}>{t('login')}</Link>
                        </div>
                        <button onClick={() => setIsOpenMenu(true)} className='lg:hidden block'>
                            <Image src={'/icons/menu.svg'} width={22} height={22} alt='Menu icon' />
                        </button>
                        {/* <MenuButton /> */}
                    </div>
                </div>


                <div onClick={closeMenu} className={clsx('fixed transition-all backdrop-blur-sm z-[999] bg-opacity-30 top-0 left-0 bg-black w-screen h-screen flex justify-end', {
                    'visible opacity-100 duration-300': isOpenMenu,
                    'invisible opacity-100 duration-100': !isOpenMenu
                })}>
                    <div ref={divRef} className={clsx('bg-[#004900A6] rounded-tl-[30px] rounded-bl-[30px] backdrop-blur-sm text-white w-[70%] h-screen p-4 transition-all duration-500 flex justify-end', {
                        'translate-x-0': isOpenMenu,
                        'translate-x-[100%]': !isOpenMenu
                    })}>
                        <ul className='space-y-3 text-right mt-8 relative'>
                            <li className='flex items-center justify-end gap-x-2 relative' onClick={() => setOpenLanguage((prev) => !prev)}>
                                <button className='text-[16px] font-semibold'>{lng.toUpperCase()}</button>
                                <Image src={'/icons/arrow-up.svg'} alt='Arrow up' width={20} height={20} />
                                <LanguageChanger isOpen={openLanguage} />
                            </li>
                            <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#target">{t('aboutTheCompany')}</a></li>
                            <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#services">{t('services')}</a></li>
                            <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#footer">{t('contacts')}</a></li>
                            <li onClick={() => setIsOpenMenu(false)}><Link className='font-semibold' href="/register">{t('signUp')}</Link></li>
                            <li onClick={() => setIsOpenMenu(false)}><Link className='font-semibold' href="/login">{t('login')}</Link></li>
                            <div onClick={() => setIsOpenMenu(false)} className='absolute bottom-5 right-4'>
                                <a href="tel:+99363877877">
                                    <MiniButton
                                        title="+993 63 87-78-77"
                                        icon={<Image src={'/icons/call-icon-green.svg'} width={22} height={22} alt="Call icon" />}
                                        className='!w-[200px] whitespace-wrap  !font-normal !bg-white !text-primary'
                                    />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="mt-[50px] sm:mt-[150px] space-y-4 text-center">
                    <h2 className="text-center text-[28px] sm:text-[34px] md:text-[46px] font-semibold max-w-[950px] mx-auto text-white">
                        {t('headerTitle')}
                    </h2>
                    <h1 className="text-center text-[28px] sm:text-[34px] md:text-[46px] font-semibold text-white">Altyn Dowur H.J.</h1>
                    <button className="text-white border rounded-full w-[250px] md:w-[350px] h-[60px] mx-auto font-semibold hover:bg-white hover:text-primary transition-all text-[18px] block !mt-8">{t('bookCall')}</button>
                </div>
            </Container>

            <div >
                <Container className="shadow-lg w-[90%] sm:w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-wrap justify-between bg-white/80 backdrop-blur-sm rounded-[30px] py-8 px-12 gap-y-8">
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">4</h4>
                            <h6 className="text-secondary">{t('years')}</h6>
                        </div>
                        <h4 className="max-w-[170px] font-medium text-[16px] text-secondary">{t('successWork')}</h4>
                    </div>
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">55</h4>
                            <h6 className="text-secondary">{t('wagons')}</h6>
                        </div>
                        <h4 className="max-w-[170px] font-medium text-[16px] text-secondary">{t('inOurPark')}</h4>
                    </div>
                    <div className="basis-[30%]">
                        <div className="flex items-start">
                            <h4 className="text-primary text-[70px] md:text-[95px] leading-[100px] font-medium">155</h4>
                            <h6 className="text-secondary">{t('clients')}</h6>
                        </div>
                        <h4 className="max-w-[200px] font-medium text-[16px] text-secondary">{t('haveClients')}</h4>
                    </div>
                </Container>
            </div>

        </header>
    )
}
