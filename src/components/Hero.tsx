import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { profile } from '../data/content'
import ErrorBoundary from './ErrorBoundary'

const Scene3D = lazy(() => import('./Scene3D'))

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__scene">
        <div className="hero__scene-fallback" aria-hidden />
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div className="hero__veil" />

      <motion.div
        className="hero__media"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={`${import.meta.env.BASE_URL}avatar.png`}
          alt="Yevgen Slyudikov"
          width={960}
          height={1200}
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      <div className="hero__content">
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {profile.title} · {profile.location}
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__name-line">Yevgen</span>
          <span className="hero__name-line hero__name-line--accent">Slyudikov</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
        >
          <a className="btn btn--primary" href="#experience">
            View experience
          </a>
          <a className="btn btn--ghost" href="#skills">
            Explore skills
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <span>Scroll</span>
        <i />
      </motion.a>
    </section>
  )
}
