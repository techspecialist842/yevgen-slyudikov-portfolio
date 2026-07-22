import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="footer__name">{profile.name}</p>
        <p className="footer__note">Senior Web Developer · Portfolio</p>
        <a href="#top" className="footer__top">
          Back to top
        </a>
      </motion.div>
    </footer>
  )
}
