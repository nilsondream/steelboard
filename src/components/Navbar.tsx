'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "motion/react"
import { Cross1Icon, HamburgerMenuIcon, PlusIcon } from '@radix-ui/react-icons'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
                className='fixed z-50 top-0 left-0 w-full py-5 px-10 md:px-5 flex items-center justify-between text-white'
            >
                <div className='flex gap-40 md:gap-3 items-center'>
                    <button className='hidden md:flex' onClick={handleMenu}>
                        {open ? <Cross1Icon height={20} width={20} /> : <HamburgerMenuIcon height={20} width={20} />}
                    </button>
                    <Link href={'/'} className='hover:underline underline-offset-4'>
                        Steel Board — Skate Shop
                    </Link>
                    <div className='flex gap-10 md:hidden'>
                        <span className='hover:underline underline-offset-4 cursor-pointer'>Boards</span>
                        <span className='hover:underline underline-offset-4 cursor-pointer'>Wheels</span>
                        <span className='hover:underline underline-offset-4 cursor-pointer'>Accesories</span>
                        <span className='hover:underline underline-offset-4 cursor-pointer'>Locations</span>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <span className='md:hidden'>Support</span>
                    <span>Cart(0)</span>
                </div>
            </motion.header>

            <div className={`hidden md:flex fixed flex-col gap-20 z-40 w-full p-5 top-0 bg-black text-white duration-500 ${open ? 'top-0' : '-top-[100%]'}`}>
                <div className='flex flex-col gap-3 mt-20'>
                    <span className='text-2xl flex justify-between items-center'>Boards<PlusIcon /></span>
                    <hr className='opacity-50' />
                    <span className='text-2xl flex justify-between items-center'>Wheels<PlusIcon /></span>
                    <hr className='opacity-50' />
                    <span className='text-2xl flex justify-between items-center'>Accesories<PlusIcon /></span>
                    <hr className='opacity-50' />
                    <span className='text-2xl flex justify-between items-center'>Info<PlusIcon /></span>
                    <hr className='opacity-50' />
                </div>
                <span>© 2025</span>
            </div>
        </>
    )
}

export default Navbar