import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Suspense, useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import { coreSkills, skillCloud } from '../data/content'

function SkillOrb({ color }: { color: string }) {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.4
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
  })

  return (
    <Float speed={2} floatIntensity={1.4}>
      <mesh ref={ref} scale={1.35}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color={color} distort={0.35} speed={2.2} metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function MiniScene({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.4], fov: 40 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 2]} intensity={1.1} />
      <pointLight position={[-2, -1, 2]} intensity={0.6} color="#7eb8d4" />
      <Suspense fallback={null}>
        <SkillOrb color={color} />
      </Suspense>
    </Canvas>
  )
}

const featured = [
  { label: 'React & Next.js', color: '#1f6f8b', detail: 'Component systems, portals, storefronts' },
  { label: 'WordPress & PHP', color: '#2a5470', detail: 'Themes, WooCommerce, custom workflows' },
  { label: 'Laravel & APIs', color: '#c4a574', detail: 'Backend services, CRM & payment integrations' },
]

export default function Skills() {
  const marquee = useMemo(() => [...skillCloud, ...skillCloud], [])

  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A practical stack for modern web products.
        </motion.h2>

        <div className="skills__featured">
          {featured.map((item, i) => (
            <motion.article
              key={item.label}
              className="skills__feature"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="skills__orb">
                <MiniScene color={item.color} />
              </div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="skills__core">
          {coreSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.06 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="skills__marquee" aria-hidden>
        <motion.div
          className="skills__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {marquee.map((skill, i) => (
            <span key={`${skill}-${i}`}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
