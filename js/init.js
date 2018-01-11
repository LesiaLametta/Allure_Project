$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>']
    });
    
    $(".sliderr").owlCarousel({
        items: 5,
        nav: true,
        loop: true,
        dots: true,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],      
    });
});