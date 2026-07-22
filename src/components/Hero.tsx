import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { profile } from '../data/content'

const first = 'Yevgen'
const last = 'Slyudikov'

function LetterReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="hero__letters">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ y: '120%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.03,
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
  const sectionRef = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smoothX = useSpring(mx, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(my, { stiffness: 60, damping: 20 })
  const photoX = useTransform(smoothX, [0, 1], ['2%', '-2%'])
  const photoY = useTransform(smoothY, [0, 1], ['1.5%', '-1.5%'])
  const shapeX = useTransform(smoothX, [0, 1], [-18, 18])
  const shapeY = useTransform(smoothY, [0, 1], [12, -12])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width)
      my.set((e.clientY - rect.top) / rect.height)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [mx, my])

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero__photo">
        <motion.img
          src={`${import.meta.env.BASE_URL}avatar.png`}
          alt="Yevgen Slyudikov"
          style={{ x: photoX, y: photoY, scale: 1.08 }}
          width={960}
          height={960}
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero__photo-shade" />
      </div>

      <div className="hero__panel">
        <motion.div
          className="hero__shapes"
          aria-hidden
          style={{ x: shapeX, y: shapeY }}
        >
          <span className="hero__shape hero__shape--a" />
          <span className="hero__shape hero__shape--b" />
          <span className="hero__shape hero__shape--c" />
        </motion.div>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.title}
          <span>Ukraine</span>
        </motion.p>

        <h1 className="hero__name">
          <span className="hero__name-line">
            <LetterReveal text={first} delay={0.08} />
          </span>
          <span className="hero__name-line">
            <LetterReveal text={last} delay={0.22} />
          </span>
        </h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.65 }}
        >
          <motion.a
            className="btn btn--primary"
            href="#experience"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            View experience
          </motion.a>
          <motion.a
            className="btn btn--secondary"
            href="#skills"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore skills
          </motion.a>
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
