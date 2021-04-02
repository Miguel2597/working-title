import { motion } from 'framer-motion'

export default function Icon({ className, href, iconName }) {
  return (
    <motion.a className={className} href={href} target="_blank" rel="noopener noreferrer" 
      whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
    >
      <i className={iconName} aria-hidden="true"></i>
    </motion.a>
  )
}
