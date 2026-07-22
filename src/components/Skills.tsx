import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { coreSkills, skillCloud } from '../data/content'

const featured = [
  { label: 'React & Next.js', detail: 'Component systems, portals, storefronts', num: '01' },
  { label: 'WordPress & PHP', detail: 'Themes, WooCommerce, custom workflows', num: '02' },
  { label: 'Laravel & APIs', detail: 'Backend services, CRM & payment integrations', num: '03' },
]

export default function Skills() {
  const marquee = useMemo(() => [...skillCloud, ...skillCloud], [])

  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <div className="section__head">
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
        </div>

        <div className="skills__featured">
          {featured.map((item, i) => (
            <motion.article
              key={item.label}
              className="skills__feature"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className="skills__num">{item.num}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="skills__core">
          {coreSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ backgroundColor: '#C6F135', color: '#10141C', y: -2 }}
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
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {marquee.map((skill, i) => (
            <span key={`${skill}-${i}`}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
