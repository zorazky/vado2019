
var tlstart = gsap.timeline();
var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();

const controller = new ScrollMagic.Controller();


let counter = document.querySelector('.counter');
let loader = document.querySelector('.loader');
let preloader = document.querySelector('.preloader');
let body = document.querySelector('body');
let count = 0;

var queue = new createjs.LoadQueue(false);

body.classList.add("blockScroll")
queue.on("progress", event => {
    console.log(event);
    
    let progress = Math.floor(event.progress * 100);

    counter.textContent = `${progress}%`;
    loader.style.width = `${progress}%`;
    //this.progress.style.width = progress + '%';
    if (progress === 100) {
        console.log('all done');
       // document.querySelector('body').style.background = 'white';
    }
})

queue.on("complete", event => {
    //clearInterval(counterFunction);
    fadeOut(preloader);
           
    body.classList.remove("blockScroll")

    tlstart.from(".logo_center", .6, {opacity:0, y: "-=20"}, "+=.2")
    .from(".case_content", .5, {opacity:0, y:"+=10"}, "+=.2")
    .from(".info", .4, {opacity:0, y:"-=10"})
        
 })

 function fadeOut(element) {
    element.style.opacity = 1;

    (function fade() {
        if((element.style.opacity -= .1) < 0) {
            element.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
}



queue.loadFile('../atlas/img/atlas_header.png');
queue.loadFile('../img/ico_users.png');
queue.loadFile('../img/ico_role.png');
queue.loadFile('../img/ico_scope.png');
queue.loadFile('../atlas/img/research1.png');
queue.loadFile('../atlas/img/research2.png');
queue.loadFile('../atlas/img/research3.png');
queue.loadFile('../atlas/img/sketch.png');
queue.loadFile('../atlas/img/ui_color1.png');
queue.loadFile('../atlas/img/ui_color2.png');
queue.loadFile('../atlas/img/ui_color3.png');
queue.loadFile('../atlas/img/ui1.png');
queue.loadFile('../atlas/img/ui2.png');
queue.loadFile('../atlas/img/prototype1.mp4');
queue.loadFile('../atlas/img/prototype2.mp4');
queue.loadFile('../atlas/img/prototype3.mp4');
queue.loadFile('../atlas/img/prototype4.mp4');
queue.loadFile('../atlas/img/ui_mock_1.png');











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



