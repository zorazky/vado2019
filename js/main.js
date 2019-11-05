const nav = document.querySelector("nav");
const hero = document.querySelector("#hero");

const sectionOneOptions = {
    rootMargin: "-50px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.remove("navWhite");
            nav.classList.add("solidNav");
        } else {
            nav.classList.add("navWhite");
            nav.classList.remove("solidNav");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(hero);