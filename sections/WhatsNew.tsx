'use client'

import React from 'react'
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts'
import { newFeatures } from '../constants';
import NewFeatures from '../components/NewFeatures';
import { INewFeature } from '../typings';
type Props = {}

const WhatsNew = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New?" textStyles='' />
          <TitleText title={<>What's new about Metaversus?</>} textStyles='' />
          <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature:INewFeature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img src='/whats-new.png' alt='whats-new ' className='w-[90%] h-[90%] object-contain' />

        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew