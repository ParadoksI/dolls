$(document).ready(function() { 
    $('.header__more').click(function() { 
        $('.header__list li').removeClass('full');
        $('.header__list li').toggleClass('active');
        $('.header__more__icon').toggleClass('active');
         
        
    });

    $('.header__more__icon').click(function() { 
        $('.header__list li').toggleClass('full')
    });

    var headerBtn = document.querySelectorAll('.header__list li');
    

    headerBtn.forEach(function(item){
        item.addEventListener("click", function(){ 
            headerBtn.forEach(function(point) { 
                point.classList.remove('clicked');
            });
            item.classList.toggle('clicked');
        })
    });

    function toggleActiveClass() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop === 0) {
            $('.header__list li').addClass('active');
            $('.header__more__icon').addClass('active');
        } else {
            $('.header__list li').removeClass('active');
            $('.header__more__icon').removeClass('active');
        }
    }

    // Вызов функции при загрузке страницы
    toggleActiveClass();

    // Вызов функции при прокрутке страницы
    $(window).scroll(function() {
        toggleActiveClass();
    });
});