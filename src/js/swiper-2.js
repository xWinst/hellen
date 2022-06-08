const mediaQueryList = window.matchMedia("(max-width:767px)");
const test = mediaQueryList.matches? true:false;
var swiper = new Swiper('.swiper', {
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: test,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  debugger: true,
});
