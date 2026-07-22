import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { Suspense, useMemo, useRef, type MutableRefObject } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'

function FloatingShape({
  position,
  color,
  scale = 1,
  speed = 1,
  shape = 'icosahedron',
}: {
  position: [number, number, number]
  color: string
  scale?: number
  speed?: number
  shape?: 'icosahedron' | 'torus' | 'sphere' | 'octahedron'
}) {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.25 * speed
    mesh.current.rotation.y = state.clock.elapsedTime * 0.35 * speed
  })

  return (
    <Float speed={1.4 + speed} rotationIntensity={0.55} floatIntensity={1.1}>
      <mesh ref={mesh} position={position} scale={scale}>
        {shape === 'torus' && <torusGeometry args={[0.55, 0.18, 24, 48]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.55, 32, 32]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.7, 0]} />}
        {shape === 'icosahedron' && <icosahedronGeometry args={[0.65, 0]} />}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.88}
          roughness={0.25}
          metalness={0.45}
        />
      </mesh>
    </Float>
  )
}

function OrbitalRing() {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.15
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
  })

  return (
    <mesh ref={ref} position={[1.2, 0.2, -1.5]} rotation={[0.6, 0.2, 0]}>
      <torusGeometry args={[1.8, 0.02, 12, 96]} />
      <meshStandardMaterial
        color="#1fd6c3"
        emissive="#0f9f91"
        emissiveIntensity={0.3}
        metalness={0.75}
        roughness={0.25}
      />
    </mesh>
  )
}

function ParallaxGroup({ mouse }: { mouse: MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null)

  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.current.x * 0.35, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.current.y * 0.2, 0.05)
  })

  const shapes = useMemo(
    () =>
      [
        { position: [-2.4, 1.1, -1] as [number, number, number], color: '#1fd6c3', scale: 0.9, speed: 1, shape: 'icosahedron' as const },
        { position: [2.6, -0.4, -0.8] as [number, number, number], color: '#ff6b4a', scale: 0.7, speed: 1.3, shape: 'torus' as const },
        { position: [0.2, 1.6, -2] as [number, number, number], color: '#4f8cff', scale: 0.55, speed: 0.8, shape: 'sphere' as const },
        { position: [-1.8, -1.2, -0.4] as [number, number, number], color: '#7ad7ff', scale: 0.5, speed: 1.5, shape: 'octahedron' as const },
        { position: [2.1, 1.4, -1.6] as [number, number, number], color: '#1a2a3a', scale: 0.45, speed: 1.1, shape: 'icosahedron' as const },
      ] as const,
    [],
  )

  return (
    <group ref={group}>
      {shapes.map((shape) => (
        <FloatingShape key={shape.color + shape.position.join(',')} {...shape} />
      ))}
      <OrbitalRing />
      <Sparkles count={42} scale={[10, 6, 4]} size={2.2} speed={0.35} color="#9ee7de" opacity={0.45} />
    </group>
  )
}

function SceneContent({ mouse }: { mouse: MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <color attach="background" args={['#070b10']} />
      <fog attach="fog" args={['#070b10', 6, 16]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} color="#e8f4ff" />
      <pointLight position={[-4, -2, 2]} intensity={0.85} color="#1fd6c3" />
      <pointLight position={[3, 2, 4]} intensity={0.55} color="#ff6b4a" />
      <ParallaxGroup mouse={mouse} />
    </>
  )
}

export default function Scene3D() {
  const mouse = useRef({ x: 0, y: 0 })

  return (
    <div
      className="scene-3d"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#070b10', 1)
        }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
