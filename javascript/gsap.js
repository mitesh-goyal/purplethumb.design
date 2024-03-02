gsap.fromTo(".hero-banner-images", {
    xPercent: "120",
}, {

    xPercent: "-360",
    duration: 40,
    repeat: -1,
    ease: "linear",
})

gsap.from('.loader', {
    top: "0%",
    duration: 1,
    delay: 1,
    stagger: 0.3,
})