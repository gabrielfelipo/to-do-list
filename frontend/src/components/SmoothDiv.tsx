import { motion } from 'framer-motion'

interface SmoothDivProps {
  children: React.ReactNode
  className?: string
  duration?: number
}

const SmoothDiv = (props: SmoothDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: props.duration ?? 0.7 } }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
}

export { SmoothDiv }
