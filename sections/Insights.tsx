'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import { insights } from '../constants';
import { IInsight } from '../typings';
import InsightCard from '../components/InsightCard';

type Props = {}

const Insights = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Insight" textStyles='text-center' />
        <TitleText title="Insight about metaverse" textStyles='text-center' />

        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight:IInsight, index:number) => (
            <InsightCard key={`insight-${index}`} index={index} {...insight} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights