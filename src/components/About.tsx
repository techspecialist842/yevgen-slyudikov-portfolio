import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/content'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="section__inner">
        <motion.div style={{ y }} className="about__grid">
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 }}
            >
              Reliable full-stack delivery for product teams and growing businesses.
            </motion.h2>
          </div>

          <div className="about__copy">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.12 + i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.ul
              className="about__stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <li>
                <strong>7+</strong>
                <span>Years experience</span>
              </li>
              <li>
                <strong>Full-stack</strong>
                <span>Web & e-commerce</span>
              </li>
              <li>
                <strong>Remote</strong>
                <span>Ukraine & abroad</span>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
