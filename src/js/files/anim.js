import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// ======== HEADER ANIMATION ========
const header = document.querySelector(".header");

// add header height to css-variable to use later
document.documentElement.style.setProperty(
  "--header-height",
  `${header.offsetHeight}px`
);
// ============================

gsap.from(header, { duration: 0.8, opacity: 0, y: "-100%" });

// ======== HERO ANIMATION ========
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

// ======== CATALOG ANIMATION ========
const catalogContainer = document.querySelector(".catalog__container");

const blocksArray = Array.from(catalogContainer.children);

const categoryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: catalogContainer,
    start: "top bottom",
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
    start: "top bottom",
    ease: "circ.out",
  },
  y: blocksArray[2].offsetHeight,
});

// ======== PRODUCTS ANIMATION ========
const leftProductArticle = document.getElementById("products-article_left");
const rightProductArticle = document.getElementById("products-article_right");

gsap.from(leftProductArticle, {
  duration: 1,
  x: -leftProductArticle.offsetWidth,
  scrollTrigger: {
    trigger: leftProductArticle,
    start: "top bottom",
    end: "+=50%",
    ease: "circ.out",
  },
});

gsap.from(rightProductArticle, {
  delay: 0.4,
  duration: 0.8,
  x: rightProductArticle.offsetWidth,
  scrollTrigger: {
    trigger: rightProductArticle,
    start: "top 80%",
    end: "+=50%",
    ease: "circ.out",
  },
});

// ======== COCKTAILS ANIMATION ========
const cocktailsGrid = document.getElementById("cocktails-container");
const cocktailCards = Array.from(cocktailsGrid.children);

gsap.from(cocktailCards, {
  rotateY: "-90deg",
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: cocktailsGrid,
    start: "top bottom",
    ease: "circ.out",
  },
});

// ======== Collection animation ========
const leftCollectionArticle = document.getElementById(
  "collection-article_left"
);
const rightCollectionArticle = document.getElementById(
  "collection-article_right"
);

gsap.from(leftCollectionArticle, {
  duration: 1,
  x: -leftCollectionArticle.offsetWidth,
  scrollTrigger: {
    trigger: leftCollectionArticle,
    start: "top bottom",
    end: "+=50%",
    ease: "circ.out",
  },
});

gsap.from(rightCollectionArticle, {
  delay: 0.4,
  duration: 0.8,
  x: rightCollectionArticle.offsetWidth,
  scrollTrigger: {
    trigger: rightCollectionArticle,
    start: "top 80%",
    end: "+=50%",
    ease: "circ.out",
  },
});

// ======== STORIES ANIMATION ========

const storiesContainer = document.getElementById("stories-list");
const storiesCards = Array.from(storiesContainer.children);

gsap.from(storiesCards, {
  rotateY: "-90deg",
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: storiesContainer,
    start: "top bottom",
    ease: "circ.out",
  },
});

// ======== FOOTER ANIMATION ========

const footer = document.getElementById("footer-container");

gsap.from(footer, { duration: 0.8, opacity: 0, y: "100%" });
