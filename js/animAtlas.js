var tlstart = gsap.timeline();
var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();

const controller = new ScrollMagic.Controller();



tlstart.from(".logo_center", .6, {opacity:0, y: "-=20"}, "+=.2")
.from(".case_content", .5, {opacity:0, y:"+=10"}, "+=.2")
.from(".info", .4, {opacity:0, y:"-=10"})





tl.from(".anim1", .4, {opacity: 0, x:"-=50", stagger:.2});

const scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1"
})


.setTween(tl)
    .addTo(controller);

tl2.from(".flow1", .4, {opacity: 0, x:"-=50"})
    .from(".flow2", .4, {opacity: 0, x:"-=50"})

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger2"
})


.setTween(tl2)
    .addTo(controller);

tl3.from(".ui1", .4, {opacity: 0, y:"-=50"})
.from(".ui2", .4, {opacity: 0, y:"-=50"})

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger3"
})


.setTween(tl3)
    .addTo(controller);

tl4.from(".mock1", .4, {opacity: 0, y:"+=50"})
.from(".mock2", .4, {opacity: 0, y:"+=50"})

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger4"
})


.setTween(tl4)
    .addTo(controller);