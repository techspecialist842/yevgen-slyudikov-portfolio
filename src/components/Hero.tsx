import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { profile } from '../data/content'

const Scene3D = lazy(() => import('./Scene3D'))

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__scene">
        <Suspense fallback={<div className="hero__scene-fallback" />}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="hero__veil" />

      <div className="hero__layout">
        <div className="hero__copy">
          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {profile.title} · {profile.location}
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Yevgen</span>
            <span>Slyudikov</span>
          </motion.h1>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a className="btn btn--primary" href="#experience">
              View experience
            </a>
            <a className="btn btn--ghost" href="#skills">
              Explore skills
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Yevgen Slyudikov" />
          <div className="hero__portrait-glow" aria-hidden />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <i />
      </motion.a>
    </section>
  )
}
