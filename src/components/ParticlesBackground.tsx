import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="fixed inset-0 -z-10"> {/* position fixed behind everything */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // disable fullScreen
          background: { color: { value: "#0f0f1a" } },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, area: 900 } },
            color: { value: ["#6b46c1", "#3182ce", "#d53f8c", "#63b3ed"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
            },
            size: { value: { min: 2, max: 6 }, random: true },
            move: {
              enable: true,
              speed: 1.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#6b46c1",
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
