import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { coreSkills, skillCloud } from '../data/content'

const featured = [
  { label: 'React & Next.js', color: '#1FD6C3', detail: 'Component systems, portals, storefronts' },
  { label: 'WordPress & PHP', color: '#4F8CFF', detail: 'Themes, WooCommerce, custom workflows' },
  { label: 'Laravel & APIs', color: '#FF6B4A', detail: 'Backend services, CRM & payment integrations' },
]

export default function Skills() {
  const marquee = useMemo(() => [...skillCloud, ...skillCloud], [])
  const marqueeAlt = useMemo(() => [...skillCloud].reverse().concat([...skillCloud].reverse()), [])

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
          initial={{ opacity: 0, y: 28 }}
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
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
            >
              <div className="skills__orb" style={{ ['--orb' as string]: item.color }}>
                <span className="skills__orb-shape" aria-hidden />
                <span className="skills__orb-ring" aria-hidden />
                <span className="skills__orb-pulse" aria-hidden />
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025 }}
              whileHover={{ y: -3, color: '#0A0F14', backgroundColor: '#1FD6C3' }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="skills__marquees" aria-hidden>
        <div className="skills__marquee">
          <motion.div
            className="skills__track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
          >
            {marquee.map((skill, i) => (
              <span key={`a-${skill}-${i}`}>{skill}</span>
            ))}
          </motion.div>
        </div>
        <div className="skills__marquee skills__marquee--alt">
          <motion.div
            className="skills__track"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {marqueeAlt.map((skill, i) => (
              <span key={`b-${skill}-${i}`}>{skill}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
