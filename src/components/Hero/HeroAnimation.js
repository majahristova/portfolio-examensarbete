import anime from "animejs/lib/anime.es.js";

export const animateHero = () => {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    anime({
      targets: ".hero-background",
      background: `linear-gradient(135deg, rgba(75, 0, 130, ${
        1 - x
      }) 0%, rgba(238, 130, 238, ${y}) 100%)`,
      easing: "easeOutQuad",
      duration: 500,
    });
  });

  anime({
    targets: ".hero-title",
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: 500,
  });

  anime({
    targets: ".hero-description",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: 1000,
  });
};
