import React from 'react';
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useCallback } from "react";
import Particles from "@tsparticles/react";

const StarsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          number: {
            value: 75,
            density: {
              enable: true,
              area: 800
            }
          },
          move: {
            enable: true,
            speed: 0.2
          },
          size: {
            value: { min: 0.5, max: 1.5 }
          },
          opacity: {
            value: 0.8
          }
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }}
      
    />
  );
};

export default StarsBackground;
