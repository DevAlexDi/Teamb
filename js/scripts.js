$(document).ready(function(){

    $('.tel-inp').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    function scrollMenus() {
        if($(window).scrollTop() > 400){
            $('.header').addClass('header--fixed');
        }
        else {
            $('.header').removeClass('header--fixed');
        }
    }
   
    scrollMenus();

    $(window).scroll(function(){
        scrollMenus();
    });


    $('.button-wr__button--show-reviews').click(function(){
        if($('.reviews-list--other-reviews').hasClass('reviews-list--hidden')){
            $('.reviews-list--other-reviews').removeClass('reviews-list--hidden');
            $(this).text('Скрыть');
        }
        else {
            $('.reviews-list--other-reviews').addClass('reviews-list--hidden');
            $(this).text('Все отзывы');
        }
    });

    $('.button-wr__button--open-clients').click(function(){
        if($('.clients-list--other-logos').hasClass('clients-list--hidden')){
            $('.clients-list--other-logos').removeClass('clients-list--hidden');
            $(this).text('Скрыть');
        }
        else {
            $('.clients-list--other-logos').addClass('clients-list--hidden');
            $(this).text('Смотреть всех');
        }
    });

    

    $('.button-wr__button--open-modal').click(function(){
        $('#modal-request').modal('show');
    });


    $('.menu-list__link').click(function (e) {
        e.preventDefault;
        if ($(this).attr('href')) {
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - 80
            }, 700);
            return false;
        }
    });
});


