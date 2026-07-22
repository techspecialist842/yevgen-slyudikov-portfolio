import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { lazy, Suspense, useRef, type MouseEvent } from 'react'
import { profile } from '../data/content'
import ErrorBoundary from './ErrorBoundary'

const Scene3D = lazy(() => import('./Scene3D'))

const first = 'Yevgen'
const last = 'Slyudikov'

function LetterReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="hero__letters">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ y: '110%', opacity: 0, rotateX: -40 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 120, damping: 18 })
  const springY = useSpring(my, { stiffness: 120, damping: 18 })
  const transform = useMotionTemplate`perspective(900px) rotateY(${springX}deg) rotateX(${springY}deg)`

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = mediaRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px * 10)
    my.set(py * -8)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

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
      <div className="hero__beam" aria-hidden />

      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          ref={mediaRef}
          className="hero__media-inner"
          style={{ transform }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <motion.div
            className="hero__media-ring"
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          />
          <img
            src={`${import.meta.env.BASE_URL}avatar.png`}
            alt="Yevgen Slyudikov"
            width={960}
            height={960}
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </motion.div>

      <div className="hero__content">
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <motion.span
            className="hero__role-dot"
            animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {profile.title} · {profile.location}
        </motion.p>

        <h1 className="hero__name">
          <span className="hero__name-line">
            <LetterReveal text={first} delay={0.12} />
          </span>
          <span className="hero__name-line hero__name-line--accent">
            <LetterReveal text={last} delay={0.28} />
          </span>
        </h1>

        <motion.div
          className="hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
        >
          <motion.a className="btn btn--primary" href="#experience" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            View experience
          </motion.a>
          <motion.a className="btn btn--ghost" href="#skills" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Explore skills
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>Scroll</span>
        <i />
      </motion.a>
    </section>
  )
}
