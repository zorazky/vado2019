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

queue.on("progress", event => {
    console.log(event);
    body.classList.add("blockScroll")
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
           
    tlstart.from(".logo_center", .6, {opacity:0, y: "-=20"}, "+=.2")
    .from(".case_content", .5, {opacity:0, y:"+=10"}, "+=.2")
    .from(".info", .4, {opacity:0, y:"-=10"});
        
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

queue.on("fileload", handleFileComplete);

queue.loadFile('../tripwing/img/tripwing_header.png');
queue.loadFile('../tripwing/img/ico_users.png');
queue.loadFile('../tripwing/img/ico_role.png');
queue.loadFile('../tripwing/img/ico_scope.png');
queue.loadFile('../tripwing/img/flow_2.png');
queue.loadFile('../tripwing/img/flow_1.png');
queue.loadFile('../tripwing/img/wireframe2.png');
queue.loadFile('../tripwing/img/ui1.png');
queue.loadFile('../tripwing/img/ui2.png');
queue.loadFile('../tripwing/img/prototype1.gif');
queue.loadFile('../tripwing/img/prototype2.gif');

function handleFileComplete(event) {
    body.classList.remove("blockScroll")
    
    // var item = event.item;
    // var type = item.type;
    
    // if (type == createjs.Types.IMAGE) {
    //     gallery.appendChild(event.result);
    //     console.log(event.result)
    // }
}





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