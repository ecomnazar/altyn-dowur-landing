// 'use client'

// import { LanguageChanger } from '@/page/main/ui/LanguageChanger'
// import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
// import { MiniButton } from '@/shared/ui/MiniButton'
// import clsx from 'clsx'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export const MenuButton = () => {
//     const [openLanguage, setOpenLanguage] = React.useState(false)

//     const [isOpenMenu, setIsOpenMenu] = React.useState(false)


//     const divRef = useOutsideClick(() => {
//         setIsOpenMenu(false)
//     })

//     const closeMenu = () => {
//         setIsOpenMenu(false)
//     }

//     return (
//         <>

//             <button onClick={() => setIsOpenMenu(true)} className='lg:hidden block'>
//                 <Image src={'/icons/menu.svg'} width={22} height={22} alt='Menu icon' />
//             </button>

//             <div onClick={closeMenu} className={clsx('absolute transition-all backdrop-blur-sm z-[999] bg-opacity-30 top-0 left-0 bg-black w-screen h-screen flex justify-end', {
//                 'visible opacity-100 duration-300': isOpenMenu,
//                 'invisible opacity-100 duration-100': !isOpenMenu
//             })}>
//                 <div ref={divRef} className={clsx('bg-[#004900A6] rounded-tl-[30px] rounded-bl-[30px] backdrop-blur-sm text-white w-[70%] h-screen p-4 transition-all duration-500 flex justify-end', {
//                     'translate-x-0': isOpenMenu,
//                     'translate-x-[100%]': !isOpenMenu
//                 })}>
//                     <ul className='space-y-3 text-right mt-8 relative'>
//                         <li className='flex items-center justify-end gap-x-2 relative' onClick={() => setOpenLanguage((prev) => !prev)}>
//                             <button className='text-[16px] font-semibold'>RU</button>
//                             <Image src={'/icons/arrow-up.svg'} alt='Arrow up' width={20} height={20} />
//                             <LanguageChanger isOpen={openLanguage} />
//                         </li>
//                         <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#target">О компании</a></li>
//                         <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#services">Услуги</a></li>
//                         <li onClick={() => setIsOpenMenu(false)}><a className='text-[16px] font-semibold' href="#footer">Контакты</a></li>
//                         <li onClick={() => setIsOpenMenu(false)}><Link className='font-semibold' href="/register">Регистрация</Link></li>
//                         <li onClick={() => setIsOpenMenu(false)}><Link className='font-semibold' href="/login">Войти</Link></li>
//                         <div onClick={() => setIsOpenMenu(false)} className='absolute bottom-5 right-4'>
//                             <a href="tel:+99363877877">
//                                 <MiniButton
//                                     title="+993 63 87-78-77"
//                                     icon={<Image src={'/icons/call-icon-green.svg'} width={22} height={22} alt="Call icon" />}
//                                     className='!font-normal !bg-white !text-primary'
//                                 />
//                             </a>
//                         </div>
//                     </ul>
//                 </div>
//             </div>

//         </>

//     )
// }
