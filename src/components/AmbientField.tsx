import { motion } from 'framer-motion'

export default function AmbientField() {
  return (
    <div className="ambient" aria-hidden>
      <motion.span
        className="ambient__blob ambient__blob--a"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="ambient__blob ambient__blob--b"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="ambient__blob ambient__blob--c"
        animate={{ x: [0, 25, -35, 0], y: [0, -15, 35, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="ambient__grid" />
    </div>
  )
}
