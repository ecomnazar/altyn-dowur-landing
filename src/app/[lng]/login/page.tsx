import { Button } from '@/shared/ui/Button';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className='w-screen h-screen flex items-center relative justify-center'>
            <Link href={'/'} className='hover:-translate-x-2 transition-all duration-300 absolute top-6 left-9 h-[47px] bg-primary text-white rounded-full py-1 pr-5 pl-1 flex items-center gap-x-3'>
                <div className='h-[39px] w-[39px] rounded-full flex items-center justify-center bg-white'>
                    <FaArrowLeft className='text-primary' size={23} />
                </div>
                <p className='font-medium'>Вернуться</p>
            </Link>

            <form className='max-w-[80%] md:max-w-[600px] w-full'>
                <h3 className='text-[24px] md:text-[40px] font-medium text-[#292929] mb-4'>Войти</h3>
                <div className='space-y-4'>
                    <div className='w-full'>
                        <p className='mb-0.5'>Email</p>
                        <div className='w-full relative'>
                            <input className='h-[52px] border border-black/30 pl-4 placeholder:text-[#979797] text-[16px] rounded-full w-full' placeholder='hello@gmail.com' />
                            <Image src="/icons/bg-green-tick.svg" width={28} height={28} alt="Tick" className='absolute top-1/2 -translate-y-1/2 right-5' />
                        </div>
                    </div>
                    <PasswordInput />
                    <Button className='hover:!bg-white hover:!text-primary border border-primary transition-all w-full h-[52px] flex items-center !text-[16px] font-semibold justify-center'>Войти</Button>
                </div>
            </form>

        </div>
    )
}

export default LoginPage