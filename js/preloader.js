document.addEventListener('DOMContentLoaded', () => {
    let counter = document.querySelector('.counter');
    let loader = document.querySelector('.loader');
    let preloader = document.querySelector('.preloader');
    let count = 0;
    let counterFunction = setInterval(() => {
        if (count < 101) {
            counter.textContent = `${count}%`;
            loader.style.width = `${count}%`;
            count++;
        } else {
            clearInterval(counterFunction);
            fadeOut(preloader);
        }
    }, 20);

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
})