// Globe.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";

/*
  Custom atmospheric glow material using a radial, fresnel-like effect,
  for a smoother, more realistic/beautiful outer glow.
*/
function Atmosphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  // Animate the atmosphere's glow intensity and opacity
  const { glowStrength, opacity } = useSpring({
    glowStrength: 1.04,
    opacity: 0.19,
    loop: {
      reverse: true,
    },
    from: { glowStrength: 1, opacity: 0.13 },
    config: { duration: 2500 },
    delay: 100,
  });

  useFrame(() => {
    // Slow gentle rotation for subtle movement
    if (mesh.current) mesh.current.rotation.y -= 0.00018;
  });

  // Credit: basic Fresnel effect with shaderMaterial
  // We use Drei's <shaderMaterial /> for custom effects.
  // This is a "soft blue glow" with fresnel and animated alpha.

  return (
    <a.mesh ref={mesh} scale={glowStrength}>
      <sphereGeometry args={[1.77, 96, 96]} />
      <a.shaderMaterial
        attach="material"
        transparent
        blending={THREE.AdditiveBlending}
        uniforms={{
          c: { value: 0.66 },
          p: { value: 2.7 },
          glowColor: { value: new THREE.Color("#72cbff") },
          viewVector: { value: new THREE.Vector3(0, 0, 4) },
          alpha: opacity,
        }}
        vertexShader={`
          uniform vec3 viewVector;
          varying float intensity;
          void main() {
            vec3 vNormal = normalize(normalMatrix * normal);
            vec3 vNormView = normalize(normalMatrix * viewVector);
            intensity = pow(c - dot(vNormal, vNormView), p);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 glowColor;
          uniform float alpha;
          varying float intensity;
          void main() {
              gl_FragColor = vec4(glowColor, intensity * alpha);
          }
        `}
        uniforms-c={{ value: 0.66 }}
        uniforms-p={{ value: 2.7 }}
        uniforms-glowColor={{ value: new THREE.Color("#72cbff") }}
      />
    </a.mesh>
  );
}

function Earth() {
  const mesh = useRef<THREE.Mesh>(null!);

  const [colorMap, bumpMap] = useTexture([
    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe/example/img/earth-topology.png",
  ]);

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.07 : 1,
    config: { tension: 140, friction: 7 },
  });

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.0016;
  });

  return (
    <a.mesh
      ref={mesh}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.6, 64, 64]} />

      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        metalness={0.1}
        roughness={0.9}
      />
    </a.mesh>
  );
}

function Ripple({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);

  const { scale, opacity } = useSpring({
    from: { scale: 0, opacity: 0.5 },
    to: async (next) => {
      while (1) {
        await next({ scale: 2.4, opacity: 0 });
        await next({ scale: 0, opacity: 0.5 });
      }
    },
    config: { tension: 20, friction: 30 },
  });

  return (
    <a.mesh position={position} scale={scale}>
      <ringGeometry args={[0.1, 0.13, 32]} />
      <a.meshBasicMaterial
        color="#4DAEFF"
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </a.mesh>
  );
}

export default function Globe() {
  // Fade globe in
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1050 },
    delay: 100,
  });

  return (
    <a.group scale={1} opacity={opacity}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <group scale={1}>
          <Atmosphere />
          <Earth />
        </group>

        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 2, 5]} intensity={2.2} />
        <Environment preset="sunset" background={false} />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      </Canvas>
    </a.group>
  );
}
