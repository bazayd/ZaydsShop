let carouselWidth = $('.cardcarousel-inner')[0].scrollWidth;
let cardWidth = $('.Cardcarousel-item').width();

let scrollPosition = 0;

$('.carousel-control-next').on('click', function() { 
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.cardcarousel-inner').animate({scrollLeft: scrollPosition},
        600);
})