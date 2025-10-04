(function ($) {
    "use strict";


    var windowOn = $(window);

    windowOn.on('load', function () {
      wowAnimation();
    }); 

    // preloader 
    windowOn.on('load',function() {
      $("#loading").fadeOut(400);
    })


    // back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function() {
      if (windowOn.scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function() {
      $('html, body').animate({scrollTop:0}, '300');
    });

    
    // sticky js 
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#tf-header-sticky").removeClass("tf-header-sticky");
      } else {
        $("#tf-header-sticky").addClass("tf-header-sticky");
      }
    });

    //filter js
       if ($('.grid').length != 0) {  
      var $grid = $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          percentfosition: true,
          masonry: {
            columnWidth: 1
          }
        })

      // filter items on button click
      $('.tfportfolio-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

        //for menu active class
        $('.tfportfolio-filter button').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });
      });
    }

    // offcanvas bar 
    $(".tf-offcanvas-toogle").on('click', function(){
      $(".tf-offcanvas").addClass("tf-offcanvas-open");
      $(".tf-offcanvas-overlay").addClass("tf-offcanvas-overlay-open");
    });
    $(".tf-offcanvas-close-toggle,.tf-offcanvas-overlay").on('click', function(){
      $(".tf-offcanvas").removeClass("tf-offcanvas-open");
      $(".tf-offcanvas-overlay").removeClass("tf-offcanvas-overlay-open");
    });

    
    // mobile menu 
    var tfMenuWrap = $('.tf-mobile-menu-active > ul').clone();
    var tfSideMenu = $('.tf-offcanvas-menu nav');
    tfSideMenu.append(tfMenuWrap);
    if ($(tfSideMenu).find('.sub-menu, .tf-mega-menu').length != 0) {
      $(tfSideMenu).find('.sub-menu, .tf-mega-menu').parent().append('<button class="tf-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tf-offcanvas-menu nav > ul > li button.tf-menu-close, .tf-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .tf-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .tf-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });



        // When window finishes loading
        $(window).on('load', function (event) {
        $('#preloader').delay(1000).fadeOut(500);

    // Odometer animation on scroll
    $('.odometer').waypoint(function (direction) {
        if (direction === 'down') {
            let countNumber = $(this.element).attr("data-count");
            $(this.element).html(countNumber);
        }
    }, {
        offset: '80%'
    });
      });

// When preloader close button is clicked
$(".preloader-close").on("click", function () {
    $('#preloader').delay(0).fadeOut(500);

    // Odometer animation on scroll (again for safety)
    $('.odometer').waypoint(function (direction) {
        if (direction === 'down') {
            let countNumber = $(this.element).attr("data-count");
            $(this.element).html(countNumber);
        }
    }, {
        offset: '80%'
    });
});


    // data bg img 
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data bg color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    
     // tf-testimonial-active
    var slider = new Swiper ('.tf-testimonial-active', {
      slidesPerView: 1,
      loop: true,
      navigation: {
          nextEl: '.tf-testimonial-button-prev',
          prevEl: '.tf-testimonial-button-next',
        },
    });

     // tf-testimonial-active-2
    var slider = new Swiper ('.tf-testimonial-active-2', {
      slidesPerView: 3,
      loop: true,
       spaceBetween: 30,
        freemode: true,
        speed: 2000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
        navigation: {
          nextEl: '.tf-test-angle-prev',
          prevEl: '.tf-test-angle-next',
        },
           breakpoints: {
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });

     // tf-test-active
    var slider = new Swiper ('.tf-test-active', {
      slidesPerView: 3,
      loop: true,
       spaceBetween: 30,
        freemode: true,
        speed: 2000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
        navigation: {
          nextEl: '.tf-testimonial-swiper-button-prev',
          prevEl: '.tf-testimonial-swiper-button-next',
        },
           breakpoints: {
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });

     // tf-brand-slider 
    var swiper = new Swiper(".tf-brand-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
    });

     // tf-brand-slider 
    var swiper = new Swiper(".tf-brand-active-2", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
    });

    // tf-team-slider 
    var swiper = new Swiper(".tf-team-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
           breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });

    // tf-team-slider 
    var swiper = new Swiper(".tf-team-active-2", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
            navigation: {
              nextEl: '.tfteam-button-prev',
              prevEl: '.tfteam-button-next',
            },
           breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });
    // tf-team-slider 
    var swiper = new Swiper(".tf-team-active-3", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
            navigation: {
              nextEl: '.tfteam-arrow-prev',
              prevEl: '.tfteam-arrow-next',
            },
           breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });


    // tf-test-active
    var slider = new Swiper ('.tf-test-active', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      freemode: true,
        speed: 3000,
        allowTouchMove: false,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
      navigation: {
          nextEl: '.tf-testimonial-button-prev',
          prevEl: '.tf-testimonial-button-next',
      },
           breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });

    // tf-blog-active
    var slider = new Swiper ('.tf-blog-active', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      freemode: true,
        speed: 3000,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
      navigation: {
          nextEl: '.tfblog-button-prev',
          prevEl: '.tfblog-button-next',
      },
           breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
      },
    });


    // wow
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
})(jQuery);