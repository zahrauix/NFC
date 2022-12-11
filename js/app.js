window.addEventListener("load", () => {
    "use strict";
//   Main Slider in index page
const slides = document.querySelector('.slider-item').children;
const next = document.querySelector('.next');
const next2 = document.querySelector('.next-2');
const prev = document.querySelector('.prev');
const prev2 = document.querySelector('.prev-2');
const totalSlides = slides.length;
let index = 0;
let duration = 6000;


prev.onclick = function () {
    slide('prev');
}

prev2.onclick = function () {
    slide('prev-2');
}

next.onclick = function () {
    slide('next');
}

next2.onclick = function () {
    slide('next-2');
}

function slide(direction) {
    progress()
    if (direction == 'next') {
        if (index == totalSlides - 1) {
            index = 0;
        } else {
            index++
        }

    }

    if (direction == 'prev-2') {
        if (index == totalSlides - 1) {
            index = 0;
        } else {
            index++
        }

    }

    if (direction == 'prev') {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--
        }

    }
    
    if (direction == 'next-2') {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--
        }

    }

    clearInterval(timer);

    timer = setInterval(autoSlide, duration)

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function progress() {
    document.querySelector('.progress').innerHTML = ""
    const div = document.createElement('div');
    div.style.width = "0";
    div.style.height = "5px";
    div.style.position = "absolute";
    div.style.bottom = "0";
    div.style.left = "0";
    div.style.backgroundColor = "#000";
    div.style.opacity = "50%";
    div.style.animation = "progress " + duration / 1000 + "s linear";
    document.querySelector('.progress').appendChild(div)
}


function autoSlide() {
    slide('next');
}

let timer = setInterval(autoSlide, duration)


progress()













//   Mega Menu
const dropdown = document.querySelector('#dropdown');
const megaenu = document.querySelector('.mega-menu');

dropdown.addEventListener('click', function(){
    megaenu.classList.toggle('fade')
})
//   Mega Menu




})

