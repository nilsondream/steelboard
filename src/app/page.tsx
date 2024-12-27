'use client'

import { containerVariants, itemVariants } from "@/animations"
import { motion } from "motion/react"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen relative overflow-hidden bg-black text-white">
      <div className="absolute z-10 w-full h-full flex flex-col justify-between">
        <div className="h-[25rem] px-5 mt-20 overflow-hidden flex items-center">
          <motion.h1
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className="text-[35vw] w-full flex items-center justify-center"
          >
            <motion.span variants={itemVariants}>S</motion.span>
            <motion.span variants={itemVariants}>B</motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%', transition: { duration: 2, delay: 1.5, ease: [0.6, 0.01, -0.05, 0.95], } }}
              className="h-10 bg-white"
            />
            <motion.span variants={itemVariants}>S</motion.span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
          className="p-10 flex items-end justify-between"
        >
          <p className="text-5xl">
            Everything you need for<br />your passion for skateboarding,<br />in one place.
          </p>
          <span>scroll down</span>
        </motion.div>
      </div>
      <motion.img
        initial={{ scale: 1.5 }}
        animate={{ scale: 1, transition: { duration: 2.5, ease: [0.6, 0.01, -0.05, 0.95] } }}
        src="/bg.webp"
        alt="Steel Board"
        className="absolute z-0 opacity-85"
      />
    </main>
  );
}
