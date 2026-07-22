import { motion } from 'framer-motion'

export default function AmbientField() {
  return (
    <div className="ambient" aria-hidden>
      <motion.span
        className="ambient__blob ambient__blob--a"
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="ambient__blob ambient__blob--b"
        animate={{ x: [0, -35, 20, 0], y: [0, 30, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="ambient__noise" />
    </div>
  )
}
