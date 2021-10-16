$(document).ready(function(){

    const responsive = {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: false,
        margin: 10,
        nav: true,
        margin: 80,
        navText: [$('.navigation .nav-prev'), $('.navigation .nav-next')],
        dots: false,
        responsive: responsive
    });

    $('.upBtn .btn').each(function(){
        $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
        });
    });

    console.log($('html, body'));

    AOS.init();
})