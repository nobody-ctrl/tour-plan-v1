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
  })

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay=$('.modal__overlay');
    var modalDialog=$('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
  }
  function closeModal(event){
    event.preventDefault()
    var modalOverlay=$('.modal__overlay');
    var modalDialog=$('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }
});