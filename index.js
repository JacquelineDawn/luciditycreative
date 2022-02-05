var tl = new TimelineLite;

window.setInterval(() => {

    tl.to("#orb", 5, {
        scaleX: 1.05,
        scaleY: 1.05,
        ease: Sine.easeIn
    })

    .to("#orb", 5, {
        scaleX: 1,
        scaleY: 1,
        ease: Sine.easeOut

    })

}, 1000 / 60);