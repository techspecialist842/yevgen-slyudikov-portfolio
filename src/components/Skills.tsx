import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { coreSkills, skillCloud } from '../data/content'

const featured = [
  { label: 'React & Next.js', color: '#1f6f8b', detail: 'Component systems, portals, storefronts' },
  { label: 'WordPress & PHP', color: '#2a5470', detail: 'Themes, WooCommerce, custom workflows' },
  { label: 'Laravel & APIs', color: '#c4a574', detail: 'Backend services, CRM & payment integrations' },
]

export default function Skills() {
  const marquee = useMemo(() => [...skillCloud, ...skillCloud], [])

  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A practical stack for modern web products.
        </motion.h2>

        <div className="skills__featured">
          {featured.map((item, i) => (
            <motion.article
              key={item.label}
              className="skills__feature"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="skills__orb" style={{ ['--orb' as string]: item.color }}>
                <span className="skills__orb-shape" aria-hidden />
                <span className="skills__orb-ring" aria-hidden />
              </div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="skills__core">
          {coreSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.06 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="skills__marquee" aria-hidden>
        <motion.div
          className="skills__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {marquee.map((skill, i) => (
            <span key={`${skill}-${i}`}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
