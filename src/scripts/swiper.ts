
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
});

document.querySelector('.pagination-buttons__button_prev').addEventListener('click', () => {
    swiper.slidePrev();
});

document.querySelector('.pagination-buttons__button_next').addEventListener('click', () => {
    swiper.slideNext();
});

swiper.on('slideChange', function () {
    const activeIndex = swiper.realIndex;

    const dots = document.querySelectorAll('.pagination-dots__item');

    dots.forEach(dot => dot.classList.remove('active'));

    if (activeIndex >= 3) {
        dots[0].classList.add('active');
    } else {
        dots[activeIndex].classList.add('active');
    }
});