import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/content'

const stats = [
  { value: '7+', label: 'Years experience' },
  { value: 'Full-stack', label: 'Web & e-commerce' },
  { value: 'Remote', label: 'Ukraine & abroad' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="section__inner">
        <motion.div style={{ y }} className="about__grid">
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About me
            </motion.p>
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Reliable full-stack delivery for product teams and growing businesses.
            </motion.h2>
          </div>

          <div className="about__copy">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <ul className="about__stats">
              {stats.map((stat, i) => (
                <motion.li
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
