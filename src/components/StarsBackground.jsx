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
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }}
    />
  );
};

export default StarsBackground;
