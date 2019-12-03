var tlstart = gsap.timeline();
var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();

const controller = new ScrollMagic.Controller();

tlstart.from("#background", 1, {opacity:0, y: "-=20"}, "+=.3")
    .from(".anim1", .8, {opacity:0, x:-200, stagger: .4})
    .from(".sectionProjects", .2, {opacity:0, y:10}, "-=1");


tl.from(".anim2", .6, {opacity: 0, x:"-=200", stagger:.2})
    .from(".projectThumb1", .4, {opacity:0, x:"+=20"}, "-=.8");
    

tl2.from(".anim3", .6, {opacity: 0, x:"+=50", stagger:.2})
    .from(".projectThumb2", .4, {opacity:0, x:"-=20"}, "-=.9");


tl3.from(".anim4",.6, {opacity:0, y: "-=10", stagger: .3});
    



const scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
})


.setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
})

.setTween(tl2)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger3"
})

.setTween(tl3)
    .addTo(controller);


        


