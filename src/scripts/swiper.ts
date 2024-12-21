import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.swiper');

    if (swiperContainer) {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            grabCursor: true,
            speed: 700,
            pagination: {
                el: '',
            },
            navigation: {
                nextEl: '',
                prevEl: '',
            },
        });

        const prevButton = document.querySelector('.swiper-pagination-buttons__button_prev');
        const nextButton = document.querySelector('.swiper-pagination-buttons__button_next');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                swiper.slidePrev();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                swiper.slideNext();
            });
        }

        swiper.on('slideChange', function () {
            const activeIndex = swiper.realIndex;

            const dots = document.querySelectorAll('.pagination-dots__item');

            dots.forEach((dot) => dot.classList.remove('active'));

            if (activeIndex >= 3) {
                dots[0]?.classList.add('active');
            } else {
                dots[activeIndex]?.classList.add('active');
            }
        });
    }
});
