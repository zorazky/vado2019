



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



