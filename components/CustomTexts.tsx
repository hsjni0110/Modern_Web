'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { textContainer } from '../utils/motion';
import { textVariant2 } from '../utils/motion';

type TypingTextProps = {
    title: string;
    textStyles: string;
}

type TitleTextProps = {
    title: any;
    textStyles: string;
}
export const TypingText = ({ title, textStyles }: TypingTextProps) => (
    <motion.p variants={textContainer}
        className={`font-normal text-[20px] text-white/70 ${textStyles}`}
    >
        {Array.from(title).map(((letter, index: number) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        )))}
    </motion.p>
)

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
        {title}
    </motion.h2>
)