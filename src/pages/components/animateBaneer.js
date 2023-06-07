import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="w-full h-full">
      <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },

          particles: {
            number: { value: 6, density: [Object] },
            color: { value: "#E76161" },
            shape: {
              type: "polygon",
              stroke: [Object],
              polygon: [Object],
              image: [Object],
            },
            opacity: { value: 0.3, random: true, anim: [Object] },
            size: { value: 50, random: false, anim: [Object] },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: [Object],
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: [Object], onclick: [Object], resize: true },
            modes: {
              grab: [Object],
              bubble: [Object],
              repulse: [Object],
              push: [Object],
              remove: [Object],
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Design;
