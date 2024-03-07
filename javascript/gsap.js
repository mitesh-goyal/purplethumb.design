let tempElement;
tempElement = document.querySelector(".hero-banner-images");
if (tempElement) {
    gsap.to(".hero-banner-images", {
        xPercent: "-300",
        duration: 20,
        repeat: -1,
        ease: "linear",
    })
}

let timeline = gsap.timeline();

tempElement = document.querySelector(".loader");
if (tempElement) {
    timeline.from('.loader', {
        top: "0%",
        duration: 1,
        delay: 0.2,
        stagger: 0.3,
    }).set('.loaders-container', { display: "none" })
}
