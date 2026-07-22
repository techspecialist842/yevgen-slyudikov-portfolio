import { motion } from 'framer-motion'
import { languages } from '../data/content'

export default function Languages() {
  return (
    <section className="section languages" id="languages">
      <div className="section__inner languages__inner">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Languages
          </motion.p>
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Clear communication across markets.
          </motion.h2>
        </div>

        <ul className="languages__list">
          {languages.map((lang, i) => (
            <motion.li
              key={lang.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="languages__row">
                <strong>{lang.name}</strong>
                <span>{lang.level}</span>
              </div>
              <div className="languages__bar" aria-hidden>
                <motion.i
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: lang.percent / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
