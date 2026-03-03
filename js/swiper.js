let swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  cardsEffect: {
    perSlideOffset: 34,
    perSlideRotate: 3, 
    slideShadows: true,
  },
});

$(function(){

  // 위쪽 → 왼쪽 흐름
  new Swiper('.flow-top', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 7000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
     watchSlidesProgress: true
  });

  // 아래쪽 → 오른쪽 흐름
  new Swiper('.flow-bottom', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 8000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false
    }
  });

});