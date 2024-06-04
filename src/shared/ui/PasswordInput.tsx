'use client'

import Image from 'next/image'
import React from 'react'

export const PasswordInput = () => {

    const [showPassword, setShowPassword] = React.useState(false)

    const inputType = showPassword ? 'text' : 'password'

    const togglePassword = () => setShowPassword((prev) => !prev)

    return (
        <div className='w-full'>
            <p className='mb-0.5'>Пароль</p>
            <div className='w-full relative'>
                <input type={inputType} className='h-[52px] border border-black/30 pl-4 placeholder:text-[#979797] text-[16px] rounded-full w-full' placeholder='Введите ваш пароль' />
                <button type='button' onClick={togglePassword} className='absolute top-1/2 -translate-y-1/2 right-5'>
                    <Image src="/icons/eye.svg" width={28} height={28} alt="Tick" />
                </button>
            </div>
            <p className='cursor-pointer text-[#979797] text-[15px] font-normal mt-0.5'>Забыли пароль</p>
        </div>
    )
}
