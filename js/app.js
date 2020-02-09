var tlstart = gsap.timeline();
var tlBg = gsap.timeline({onUpdate:updatePercentage});
var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();

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

    //counter.textContent = `${progress}%`;
    loader.style.width = `${progress}%`;
    //this.progress.style.width = progress + '%';
    if (progress === 100) {
        console.log('all done');
       // document.querySelector('body').style.background = 'white';
    }
})

queue.on("complete", event => {
    //clearInterval(counterFunction);
    console.log("working");
    fadeOut(preloader);
    body.classList.remove("blockScroll")
   
        
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


queue.loadFile('./img/hero_bg.png');
queue.loadFile('./img/atlas_thumb.png');
queue.loadFile('./img/tripwing_thumb.png');





function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tlBg.progress();
    //console.log(tl.progress());
  }

const controller = new ScrollMagic.Controller();

tlstart.to("#background", 1, {opacity:1}, "+=.3")
.from("nav", .4, { y: "+=10"}, "-=.6")
.from(".anim1", .8, {opacity:0, x:-200, stagger: .4})
.from(".sectionProjects", .2, {opacity:0, y:10}, "-=1");




tlBg.to("#background", .2, {opacity:0});


tl.from(".anim2", .5, {opacity: 0, x:"-=200", stagger:.2})
    .from(".projectThumb1", .4, {opacity:0, x:"+=20"}, "-=.6");
    
    

tl2.from(".anim3", .5, {opacity: 0, x:"+=50", stagger:.2})
    .from(".projectThumb2", .4, {opacity:0, x:"-=20"}, "-=.6");


tl3.from(".anim4",.5, {opacity:0, y: "-=10", stagger: .2});
 
const sceneBg = new ScrollMagic.Scene({
    triggerElement: "#background",
    triggerHook: "onLeave",
    duration: "90%"
})

.setPin("#background")
.setTween(tlBg)
.addTo(controller);




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


        


