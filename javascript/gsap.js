var tempElement = document.querySelector(".hero-banner-images");
if (tempElement) {
    gsap.fromTo(".hero-banner-images", {
        xPercent: "120",
    }, {

        xPercent: "-360",
        duration: 40,
        repeat: -1,
        ease: "linear",
    })
}

var tempElement = document.querySelector(".loader");
if (tempElement) {
    gsap.from('.loader', {
        top: "0%",
        duration: 1,
        delay: 1,
        stagger: 0.3,
    })
}
