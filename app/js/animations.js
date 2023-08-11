gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
  
  gsap.from(".", {
    scrollTrigger: {
      trigger: ".",
      end: "bottom bottom",
      toggleActions: "restart none none none",
    },
    css: {
      height: 1,
    },
  });

});
