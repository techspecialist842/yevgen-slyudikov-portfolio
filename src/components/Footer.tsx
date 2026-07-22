import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="footer__name"
          whileHover={{ letterSpacing: '0.04em' }}
          transition={{ duration: 0.3 }}
        >
          {profile.name}
        </motion.p>
        <p className="footer__note">Senior Web Developer · Portfolio</p>
        <motion.a href="#top" className="footer__top" whileHover={{ x: -4 }}>
          Back to top
        </motion.a>
      </motion.div>
    </footer>
  )
}
