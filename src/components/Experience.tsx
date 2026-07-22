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
          initial={{ opacity: 0, y: 24 }}
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline__marker" aria-hidden>
                <span className={job.current ? 'is-live' : undefined} />
              </div>

              <div className="timeline__body">
                <div className="timeline__meta">
                  <p className="timeline__period">{job.period}</p>
                  {job.current && <span className="timeline__badge">Current</span>}
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
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
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
