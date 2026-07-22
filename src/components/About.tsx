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
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.35, 1, 1, 0.45])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="section__inner">
        <motion.div style={{ y, opacity }} className="about__grid">
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              About me
            </motion.p>
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Reliable full-stack delivery for product teams and growing businesses.
            </motion.h2>
          </div>

          <div className="about__copy">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.65 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <ul className="about__stats">
              {stats.map((stat, i) => (
                <motion.li
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
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
