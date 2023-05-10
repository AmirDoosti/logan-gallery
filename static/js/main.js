$(document).ready(function () {

    // open menu
    $('.menu').click(function(){
        $('.overlay').css('height','100vh');
    });
    // close menu
    $('.closebtn').click(function(){
        $('.overlay').css('height','0vh');
    });

    // toasts
    $('.toast').fadeOut();

    $('.plus').click(function(){
        $('.toast').fadeIn('slow');
    });

    $('.toast .close').click(function(){
        $('.toast').fadeOut('slow');
    });

    // custom slider
    $('.slide1').click(function(){
        $(this).addClass('aactive');
        $('.slide2').removeClass('aactive');
        $('.slide3').removeClass('aactive');
        $('.item1').fadeIn('slow');
        $('.item2').fadeOut(0);
        $('.item3').fadeOut(0);
    });

    $('.slide2').click(function(){
        $(this).addClass('aactive');
        $('.slide1').removeClass('aactive');
        $('.slide3').removeClass('aactive');
        $('.item2').fadeIn('slow');
        $('.item1').fadeOut(0);
        $('.item3').fadeOut(0);
        
    });

    $('.slide3').click(function(){
        $(this).addClass('aactive');
        $('.slide1').removeClass('aactive');
        $('.slide2').removeClass('aactive');
        $('.item3').fadeIn('slow');
        $('.item1').fadeOut(0);
        $('.item2').fadeOut(0);
    });

    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        rtl:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    


    // js change language
    $('#eng').click(function(){
        $("link[href*='rtl.css']").remove();   
        $('#fa').html('Farsi');
        $('#eng').html('Eng');
        $('#LangName').html('Language');
    })
    
    $('#fa').click(function(){
        $('head').append('<link rel="stylesheet" href="static/css/rtl.css" type="text/css" />');
        $('#fa').html('فارسی');
        $('#eng').html('انگلیسی');
        $('#LangName').html('زبان');
    })
    
});
