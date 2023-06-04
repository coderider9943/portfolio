import * as React from 'react'
import { SvgIcon } from '@mui/material'
import { motion } from 'framer-motion'

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
}

const Logo = ({ setAnimationEnd, ...props }) => (
  <SvgIcon
    viewBox='0 0 590.96 298.43'
    {...props}
  >
    
    <g id='Layer_2' data-name='Layer 2'>
      <g id='Layer_1-2' data-name='Layer 1'>
        <motion.path
          fill='transparent'
          strokeWidth='5'
          stroke='#CCD6F6'
          strokeLinecap='round'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
          d='M588 298.43H0V3h588ZM23.25 29.19v243.13h544.63V29.19Z'
        />
        <motion.path
          fill='transparent'
          strokeWidth='5'
          stroke='#CCD6F6'
          strokeLinecap='round'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
          className='cls-1'
          d='M588 298.43V3H0C3.94 2 7.88.13 11.82.12Q301.38-.09 591 0q0 143.31-.12 286.61c-.06 3.94-1.88 7.88-2.88 11.82Z'
        />
        <motion.path
          fill='transparent'
          strokeWidth='5'
          stroke='#CCD6F6'
          strokeLinecap='round'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
          className='cls-1'
          d='M23.25 29.19h544.63v243.13H23.25ZM364.77 226.4c-13.6-13.68-13.13-13.49-6.44-30.49 5.95-15.13 14.37-25 32.44-21.71a39.23 39.23 0 0 0 14.69 0c14.54-3 21.06 6.11 24.7 17.11s18.11 22.89-3.09 34.77h33.55c-1.05-3.41-1.33-5.38-2.22-7-18.54-34.47-37-69-55.82-103.3-11.51-21-16-22.76-37.17-18.27l26.39 20.07c-26.48 36.24-36.8 80.03-74.71 108.82Zm-207.29-47c-2.72-3.74-4.69-5.82-5.94-8.27-11.32-22.18-22.24-44.58-34-66.53-2.1-3.93-7.54-6.08-11.44-9.05l-3.95 3.76c18 34.77 36 69.54 54.93 106l40.2-78.66c3.49 19.36 3.91 37.86 5.49 56.26 1.42 16.55 2.44 32.42-19.46 43.34h33.3c-2.13-43.7-4.2-86.11-6.27-128.52l-4.45-2.42c-3.65 3.78-8.37 7-10.76 11.43-12.61 23.55-24.62 47.39-37.65 72.68ZM144.74 225l4.57-1c-.5-5.89.68-12.62-1.78-17.52-15.55-31-31.8-61.73-48-92.43C89.77 95.64 83.67 93.32 61.37 99c14.75 3.86 19.66 13 18.14 27.3-1.7 16.09-2.05 32.34-2.61 48.53-.65 18.78 1.53 38.4-22 51.38h48.33c-5.48-6.3-14.21-11.68-14.43-17.39-1-26.8.34-53.69.85-80.54l4-.17Zm109.84 2c-15.31-8.71-18.36-21.75-18.73-36.86-.49-19.62-1.63-39.23-2.92-58.82-.91-13.81 2.14-25.64 17.76-35.07l-31.09 1.51c1.89 40.67 3.53 79.81 5.87 118.92.21 3.57 4.44 9.11 7.67 9.83 6.86 1.49 14.26.49 21.44.49Zm237.25.37c-6.94-9.1-16.33-18.79-22.63-30.18-17-30.8-32.52-62.46-49.34-93.39-2.07-3.79-8.54-5.2-13-7.71L404.1 100c20 37.47 40.91 74.52 59.69 112.6 7.95 16.08 19.04 16.08 28.04 14.75ZM288.4 192.09c-8.95 7.88-3.55 12.26 2.75 16 4.68 2.76 9.05 12.4 15.85 1.63Zm239.35 0c-8.81 7.78-3.72 12.23 2.7 15.94 4.71 2.72 9 12.4 15.9 1.65ZM289 228.35c10.59-9.76.85-13.61-4.64-17.41-3.42-2.37-8.42-2.47-12.71-3.59-.19 1.35-.37 2.69-.56 4 5.57 5.35 11.18 10.65 17.91 17Zm219.7-18.57L531.11 231c0-6.71 1.46-12.86-.26-13.94-6.16-3.87-10.15-15.76-22.15-7.28Z'
        />
        <motion.path
          fill='transparent'
          strokeWidth='5'
          stroke='#CCD6F6'
          strokeLinecap='round'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
          d='M364.77 226.4h-47.68c37.9-28.79 48.23-72.58 74.71-108.86l-26.39-20.07c21.17-4.49 25.66-2.73 37.17 18.27 18.82 34.32 37.28 68.83 55.82 103.3.89 1.64 1.17 3.61 2.22 7h-33.55c21.2-11.88 6.76-23.7 3.09-34.77s-10.16-20.14-24.7-17.11a39.23 39.23 0 0 1-14.69 0c-18.07-3.29-26.49 6.58-32.44 21.71-6.69 17.04-7.16 16.85 6.44 30.53Zm32.05-97.15-18.88 32.54h36.24ZM157.48 179.42c13-25.29 25-49.13 37.65-72.66 2.39-4.45 7.11-7.65 10.76-11.43l4.45 2.42c2.07 42.41 4.14 84.82 6.27 128.52h-33.3c21.9-10.92 20.88-26.79 19.46-43.34-1.58-18.4-2-36.9-5.49-56.26l-40.2 78.66c-18.9-36.46-36.91-71.23-54.93-106l3.95-3.76c3.9 3 9.34 5.12 11.44 9.05 11.76 21.95 22.68 44.35 34 66.53 1.25 2.45 3.22 4.53 5.94 8.27ZM144.74 225l-51-96.84-4 .17c-.51 26.85-1.85 53.74-.85 80.54.22 5.71 9 11.09 14.43 17.39H55c23.48-13 21.3-32.6 22-51.38.56-16.19.91-32.44 2.61-48.53C81 112 76.12 102.86 61.37 99c22.3-5.68 28.4-3.36 38.13 15 16.23 30.7 32.48 61.39 48 92.43 2.46 4.9 1.28 11.63 1.78 17.52ZM254.58 227c-7.18 0-14.6 1.06-21.44-.47-3.23-.72-7.46-6.26-7.67-9.83-2.34-39.11-4-78.25-5.87-118.92l31.09-1.53c-15.62 9.43-18.67 21.26-17.76 35.07 1.29 19.59 2.43 39.2 2.92 58.82.37 15.09 3.42 28.13 18.73 36.86ZM491.83 227.35c-9 1.33-20.09 1.33-28-14.8C445 174.47 424.13 137.42 404.1 100l2.78-3.88c4.44 2.51 10.91 3.92 13 7.71 16.82 30.93 32.3 62.59 49.34 93.39 6.28 11.34 15.67 21.03 22.61 30.13ZM288.4 192.09l18.6 17.6c-6.8 10.77-11.17 1.13-15.85-1.63-6.3-3.71-11.7-8.06-2.75-15.97ZM527.75 192.1l18.6 17.59c-6.87 10.75-11.19 1.07-15.9-1.65-6.45-3.71-11.51-8.16-2.7-15.94ZM289 228.35c-6.68-6.33-12.29-11.65-17.91-17 .19-1.35.37-2.69.56-4 4.29 1.12 9.29 1.22 12.71 3.59 5.44 3.8 15.18 7.65 4.64 17.41ZM508.7 209.78c12-8.48 16 3.41 22.15 7.26 1.72 1.08.26 7.23.26 13.94Z'
        />
        <motion.path
          fill='transparent'
          strokeWidth='5'
          stroke='#CCD6F6'
          strokeLinecap='round'
          // variants={pathVariants}
          initial='hidden'
          animate='visible'
          className='cls-1'
          d='m396.82 129.25 17.36 32.54h-36.24Z'
          onAnimationComplete={() => setAnimationEnd(true)}
        />
      </g>
    </g>
  </SvgIcon>
)

export default Logo
