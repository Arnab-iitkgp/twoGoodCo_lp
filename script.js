"use strict";
let videocon = document.querySelector("#video-container");
const playbtn = document.querySelector("#play");
const cursor = document.querySelector(".cursor");
const child = document.querySelectorAll(".child");
const page3 = document.querySelector("#page3");
const nav = document.querySelector(".nav");

const videoconAnimation = function () {
  videocon.addEventListener("mouseenter", function () {
    //   playbtn.style.opacity = 1;
    //   playbtn.style.scale = 1;
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videocon.addEventListener("mousemove", function (e) {
    gsap.to(playbtn, {
      // transform: `translate(-50%,-50%)`,
      left: e.x + 80,
      top: e.y + 70,
    });
  });
};

const loadingAnimation = function () {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });

  gsap.from("#page1 video", {
    y: 100,
    // scale: 0.7,
    opacity: 0,
    delay: 0,
    duration: 0.5,
  });
};
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const cursorAnimation = function () {
  document.addEventListener("mousemove", function (e) {
    gsap.to(".cursor", {
      left: e.x,
      top: e.y,
    });
  });
  child.forEach(function (c) {
    c.addEventListener("mouseenter", function (e) {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  });

  child.forEach(function (c) {
    c.addEventListener("mouseleave", function (e) {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
};

// nav intersection Api
const callfn = function (el) {
  const [entry] = el;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  }
  if (entry.isIntersecting) {
    nav.classList.remove("sticky");
  }
};
const navObserver = new IntersectionObserver(callfn, {
  root: null,
  threshold: 0.8,
  rootMargin: "-20px",
});
const vc = document.querySelector("#main h1");
navObserver.observe(vc);
videoconAnimation();
loadingAnimation();
cursorAnimation();
// LocomotiveScroll();
