'use client'

import Image from 'next/image'
import React from 'react'
import { Container } from './Container'
import clsx from 'clsx'
import Link from 'next/link'

export const MenuButton = () => {
    const [showMenu, setShowMenu] = React.useState(false)

    const toggleMenu = () => setShowMenu((prev) => !prev)

    const closeMenu = () => setShowMenu(false)

    return (
        <div>
            <button onClick={toggleMenu} className='lg:hidden block'>
                <Image src={'/icons/menu.svg'} width={22} height={22} alt='Menu icon' />
            </button>
            <div className={clsx('absolute z-[999] top-full left-0 translate-y-[5%] rounded-[30px] w-full bg-white/100 p-3 transition-all duration-500', {
                'visible opacity-1': showMenu,
                'invisible opacity-0': !showMenu
            })}>
                <ul className='space-y-2'>
                    <li onClick={closeMenu}><a className='text-[16px] font-medium' href="#target">О компании</a></li>
                    <li onClick={closeMenu}><a className='text-[16px] font-medium' href="#services">Услуги</a></li>
                    <li onClick={closeMenu}><a className='text-[16px] font-medium' href="#footer">Контакты</a></li>
                    <li onClick={closeMenu}><Link className='text-[16px] font-medium' href="/register">Регистрация</Link></li>
                    <li onClick={closeMenu}><a className='text-[16px] font-medium' href="/login">Войти</a></li>
                </ul>
            </div>
        </div>
    )
}
