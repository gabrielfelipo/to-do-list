import { ImageProps, Image as NUIImage } from '@nextui-org/react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

const Image = (props: ImageProps) => {
  return (
    <NUIImage
      as={motion.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0 }}
      {...props}
      className={twMerge('rounded-none', props.className)}
      disableSkeleton={props.src?.endsWith('.svg')}
    />
  )
}

export { Image }
