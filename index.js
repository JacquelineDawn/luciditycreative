var tl = new TimelineLite;

window.setInterval(() => {

    tl.to("#orb", 4, {
        scaleX: 1.1,
        scaleY: 1.1,
        ease: Sine.easeIn
    })

    .to("#orb", 4, {
        scaleX: 1,
        scaleY: 1,
        ease: Sine.easeOut

    })

}, 1000 / 60);