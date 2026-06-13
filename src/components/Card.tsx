import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={clsx(
        'bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 transition-all duration-300',
        hover && 'hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card
