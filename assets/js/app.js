$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    /* Header Fixed */

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {


        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);
    });

    /* Menu-toggle */
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Slider */

    $(".about__slider").slick({
        fade: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $("#says__slider").slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000
    });



});



















