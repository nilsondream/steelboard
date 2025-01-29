'use client'

import { containerVariants, itemVariants } from "@/animations"
import { motion } from "motion/react"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen relative overflow-hidden bg-black text-white">
      <div className="absolute z-10 w-full h-full flex flex-col justify-between md:justify-end md:gap-40">
        <div className="h-[25rem] md:h-28 px-5 mt-20 md:mt-0 overflow-hidden flex items-center">
          <motion.h1
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className="text-[33.5rem] md:text-9xl w-full flex items-center justify-center"
          >
            <motion.span variants={itemVariants}>S</motion.span>
            <motion.span variants={itemVariants}>B</motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%', transition: { duration: 2, delay: 1.5, ease: [0.6, 0.01, -0.05, 0.95], } }}
              className="h-10 md:h-3 bg-white"
            />
            <motion.span variants={itemVariants}>S</motion.span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
          className="p-10 md:p-5 flex md:flex-col items-end md:items-start md:gap-10 justify-between"
        >
          <p className="text-5xl md:text-3xl whitespace-nowrap">
            Everything you need for your <br/>passion for skateboarding, <br />in one place.
          </p>
          <span>scroll down</span>
        </motion.div>
      </div>
      <motion.img
        initial={{ scale: 1.5 }}
        animate={{ scale: 1, transition: { duration: 2.5, ease: [0.6, 0.01, -0.05, 0.95] } }}
        src="/bg.webp"
        alt="Steel Board"
        className="absolute z-0 w-full h-full object-cover opacity-85"
      />
    </main>
  );
}
