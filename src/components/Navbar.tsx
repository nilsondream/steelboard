'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from "motion/react"

const Navbar = () => {
    return (
        <motion.header
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1 , delay: 2.5}}}
            className='fixed z-50 top-0 left-0 w-full py-5 px-10 md:px-5 flex items-center justify-between text-white'
        >
            <div className='flex gap-40'>
                <Link href={'/'}>
                    Steel Board — Skate Shop
                </Link>
                <div className='flex gap-10 md:hidden'>
                    <span>Tables</span>
                    <span>Wheels</span>
                    <span>Accesories</span>
                    <span>Locations</span>
                </div>
            </div>
            <div className='flex gap-10'>
                <span className='md:hidden'>Support</span>
                <span>Cart(0)</span>
            </div>
        </motion.header>
    )
}

export default Navbar