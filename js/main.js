const mySwiper = new Swiper ('.swiper-container', {
   breakpoints: {
      1100: {
         spaceBetween: 145,
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      660: {
         spaceBetween: 50,
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      320: {
         spaceBetween: 50,
         slidesPerView: 1,
         slidesPerGroup: 1,
      }
   },
   keyboard: {
      enabled: true,
   },
   pagination: {
      el: '.pagination',
      type: 'bullets',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet_active',
      clickable: true
   },
})