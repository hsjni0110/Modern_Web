'use client'

import React from 'react'
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className='absolute w-[50%] inset-0 gradient-01' />
            <div className={`${styles.innerWidth} mx-auto flex justify-between px-8`}>
                <MagnifyingGlassIcon className='text-white w-[24px] h-[24px] object-contain'/>
                <h2 className='font-extrabold text-white'>MetaVerse</h2>

                <img src="/menu.svg" alt="menu" className='w-[24px] h-[24px] object-contain' />
            </div>
    </motion.div>
  )
}

export default Navbar