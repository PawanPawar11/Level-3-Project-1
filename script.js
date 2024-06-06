function homepageAnimation() {
    gsap.set(".slidesm", {scale: 5})

var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
})

t1
.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2,
}, 'a')
.to(".slidesm", {
    scale: 1,
    ease: Power2
}, 'a')
// .to(".slidesm", {
//     scale: 1,
//     ease: Power2
// }, 'a')
// What was the need of this extra code
.to(".lft", {
    xPercent: -10,
    stagger: .03,
    ease: Power4
}, 'b')
.to(".rgt", {
    xPercent: 10,
    stagger: .03,
    ease: Power4
}, 'b')
}

function realPageAnimation() {
    gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    },
    xPercent: -200,
    ease: Power4
});
}

homepageAnimation();
realPageAnimation();