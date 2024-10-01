// DOM - Document Object Model

// getElementByID ;  querySelector() ; querySelectorAll() ; getElementByClassName

// While choosing with query Selector we need to write like that :


const navbarButton = document.querySelector('.fa-bars')
const xMarkIcon = document.getElementsByClassName('fa-xmark')[0]
const mobileMenu = document.getElementById('mobile-menu')

navbarButton.addEventListener('click',function(){
    mobileMenu.classList.add('aktiv')
})

xMarkIcon.addEventListener('click',function(){
    mobileMenu.classList.remove('aktiv')
})


     const companiesSwiper = new Swiper(".companiesSwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
    } },
    
);
 