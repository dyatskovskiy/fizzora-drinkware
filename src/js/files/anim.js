import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// ======== Header animation ========

const headerEl = document.querySelector(".header");

// add header height to css-variable to use later
document.documentElement.style.setProperty(
  "--header-height",
  `${headerEl.offsetHeight}px`
);

const headerTimeline = gsap.timeline();

headerTimeline.from(headerEl, { duration: 0.8, opacity: 0, y: "-100%" });

// ======== Hero animation ========

const heroTimeline = gsap.timeline();

heroTimeline.fromTo(
  ".hero",
  {
    opacity: 0.1,

    ease: "power4.in",
  },
  { duration: 1, opacity: 1 }
);

heroTimeline.from(".content__title", {
  duration: 0.4,
  opacity: 0,
  x: -150,
  ease: "power4.out",
});

heroTimeline.from([".content__top-text", ".content__button"], {
  duration: 0.4,
  opacity: 0,
  x: 150,
  ease: "power4.out",
});

// ======== Catalog animation ========

const catalogContainer = document.querySelector(".catalog__container");

const blocksArray = Array.from(catalogContainer.children);

const categoryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: catalogContainer,
    start: "top 80%",
    ease: "circ.out",
  },
});

blocksArray.forEach((block, ix) => {
  if (ix === 0) {
    return categoryTimeline.from(block, {
      duration: 0.6,
      x: "-100%",
      opacity: 0,
    });
  }

  if (ix === 2) return;

  categoryTimeline.from(block, {
    duration: 0.5,
    y: -block.offsetHeight,
    opacity: 0,
  });
});

gsap.from(blocksArray[2], {
  delay: 0.8,
  duration: 0.5,
  scrollTrigger: {
    trigger: catalogContainer,
    start: "top 80%",
    ease: "circ.out",
  },
  y: blocksArray[2].offsetHeight,
});
