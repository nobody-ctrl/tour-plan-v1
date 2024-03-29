$(document).ready(function (){
  var mySwiper = new Swiper('.swiper-container-hotel', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    keyboard: {
        enabled: true,
      },
  })
  var mySwiperOne = new Swiper('.swiper-container-reviews', {
      // Optional parameters
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })

  var menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', function(){
    console.log("Button is clicked!")
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
    if ($('.no-scrolling-body').length == 1){
      $('body').removeClass('no-scrolling-body');
    }else{
      $('body').addClass('no-scrolling-body');
    }
  })

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay=$('.modal__overlay');
    var modalDialog=$('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    $('body').addClass('no-scrolling-body-modal');
  }
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      var modalOverlay=$('.modal__overlay');
      var modalDialog=$('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      $('body').removeClass('no-scrolling-body-modal');
    }
  });
  function closeModal(event){
    event.preventDefault()
    var modalOverlay=$('.modal__overlay');
    var modalDialog=$('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('body').removeClass('no-scrolling-body-modal');
  }
  $('.form-validation').each( function() {
    $(this).validate({
      rules: {
        phone: {
          rangelength:[17,17]
        },
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name should be at least 2 letters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Your phone is required",
          rangelength: "Enter at least 10 numbers!",
        },
      },
    });
  });
  $('.form-phone').mask('+7(000) 000-00-00');
  $('.form-validation-another').each( function() {
    $(this).validate({
      rules: {
        phone: {
          rangelength:[17,17]
        },
      },
      errorClass: "another-invalid",
      errorPlacement: function(error, element) {
        if ($(".another-invalid").length == 1){
          error.insertAfter(".newsletter__form");
        }
      },
      messages: {
        email: {
          required: "We need email adress to contact you!",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  AOS.init();
});