"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const plasmaShader = {
  uniforms: {
    u_time: { value: 0.0 },
    u_resolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float u_time;
    uniform vec2 u_resolution;

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;

      float plasma =
        sin(uv.x * 9.0 + u_time * 0.7) *
        sin(uv.y * 7.0 + u_time * 0.5) *
        sin((uv.x + uv.y) * 6.0 + u_time * 0.9) +
        0.35 * sin(length(uv - 0.5) * 12.0 - u_time * 0.6);

      float t = plasma * 0.5 + 0.5;

      // #0059ff  →  rgb(0, 89, 255)  →  (0.000, 0.349, 1.000)
      // #19253b  →  rgb(25, 37, 59)  →  (0.098, 0.145, 0.231)
      vec3 colorA = vec3(0.000, 0.349, 1.000);
      vec3 colorB = vec3(0.098, 0.145, 0.231);

      vec3 color = mix(colorB, colorA, t);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export default function CanvasBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = 2000;
    const height = 2000;
    console.log("Canvas size:", width, height);

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Plasma plane
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
    };

    const geometry = new THREE.PlaneGeometry(4, 4);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: plasmaShader.vertexShader,
      fragmentShader: plasmaShader.fragmentShader,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      uniforms.u_time.value += 0.016;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}