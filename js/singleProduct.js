
//Initialize product gallery

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

$('.main-carousel1').flickity({
    // options
    cellAlign: 'left',
    contain: true
});
//zoom
wheelzoom(document.querySelector('#zoom-item'), { maxZoom: 2 });

var wheelImg = document.querySelector("#zoom-item");
wheelImg.addEventListener('wheel', (event) => {

    if (event.deltaY > 0) {
        wheelImg.style.cursor = "zoom-out";
    } else {
        wheelImg.style.cursor = "zoom-in";
    }
});





