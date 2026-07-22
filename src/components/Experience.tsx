import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work history
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected roles and recent delivery.
        </motion.h2>

        <ol className="timeline">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.role}-${job.period}`}
              className="timeline__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6 }}
            >
              <div className="timeline__marker" aria-hidden>
                <span className={job.current ? 'is-live' : undefined} />
              </div>

              <div className="timeline__body">
                <div className="timeline__meta">
                  <p className="timeline__period">{job.period}</p>
                  {job.current && (
                    <motion.span
                      className="timeline__badge"
                      animate={{ opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <h3>{job.role}</h3>
                <p className="timeline__company">
                  {job.company}
                  {job.location ? ` · ${job.location}` : ''}
                </p>

                {job.technologies && (
                  <p className="timeline__tech">{job.technologies.join(' · ')}</p>
                )}

                <ul>
                  {job.highlights.map((item, hi) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 + hi * 0.04 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
