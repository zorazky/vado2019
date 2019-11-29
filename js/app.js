var tl = gsap.timeline({onUpdate:updatePercentage})
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();

const controller = new ScrollMagic.Controller();

tl2.from("#background", 1, {opacity:0, y: "-=20"}, "+=.3")
    .from(".anim1", .8, {opacity:0, x:-200, stagger: .4})
    .from(".sectionProjects", .2, {opacity:0, y:10}, "-=1");
    
tl3.from(".anim4",.6, {opacity:0, y: "-=10",stagger: .3})


tl.from(".anim2", .6, {opacity: 0, x:"-=200", stagger:.2})
    .from(".projectThumb1", .4, {opacity:0, x:"+=20"}, "-=.6")
    .from(".anim3", .6, {opacity: 0, x:"+=50", stagger:.2})
    .from(".projectThumb2", .4, {opacity:0, x:"-=20"}, "-=.8")
    



const scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "200%"
})

.setPin("#trigger1")
    .setTween(tl)
        .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#trusted"
})

.setTween(tl3)
.addTo(controller);


        


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    
    //console.log(tl.progress());
    }