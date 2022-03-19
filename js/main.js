'use strict';

import { ibg } from './modules/ibg.js';

// IBG
ibg();

// Loading
window.onload = () => {
    let loading = document.querySelector('.loading');

    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 300);
    }

    // Animation
    window.addEventListener('scroll', blocksAnim);

    function blocksAnim() {
        let animLeft = document.querySelectorAll('.animLeft');
        let animRight = document.querySelectorAll('.animRight');

        let leftRightBlocks = [];
        leftRightBlocks.push(...animLeft, ...animRight);

        let heightForLeftRight = document.body.clientHeight / 1.7;

        for (let leftRightBlock of leftRightBlocks) {
            if (leftRightBlock.getBoundingClientRect().top <= heightForLeftRight) {
                leftRightBlock.classList.add('_anim');
            } else {
                if (leftRightBlock.classList.contains('_anim')) {
                    leftRightBlock.classList.remove('_anim');
                }
            }
        }

        let animBottom = document.querySelectorAll('.animBottom');

        let heightForBottom = document.body.clientHeight / 1.3;

        for (let bottomBlock of animBottom) {
            if (bottomBlock.getBoundingClientRect().top <= heightForBottom) {
                bottomBlock.classList.add('_anim');
            } else {
                if (bottomBlock.classList.contains('_anim')) {
                    bottomBlock.classList.remove('_anim');
                }
            }
        }
    }

    blocksAnim();
}

// Burger
let burgerIcon = document.querySelector('.burger__icon');
let burgerNav = document.querySelector('.burger__nav');
let burgerBillet = document.querySelector('.burger__billet');

if (burgerIcon && burgerNav) {
    burgerIcon.onclick = () => {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        burgerNav.classList.toggle('_active');
        burgerBillet.classList.toggle('_active');
    }
}

// Header
let header = document.querySelector('.header');

if (header) {
    let headerInner = document.querySelector('.header__inner');
    let headerButton = document.querySelector('.header__button');

    window.addEventListener('scroll', headerAnim);

    headerAnim();

    function headerAnim() {
        if (scrollY > 40) {
            headerInner.style.minHeight = '60px';
            headerButton.style.padding = '8px 20px';
            header.style.boxShadow = '0px 1px 10px rgba(0,0,0,0.2)';
        } else {
            headerInner.style.minHeight = '';
            headerButton.style.padding = '';
            header.style.boxShadow = '';
        }
    }
}

// Hero Swider
let heroSwiperWrapper = document.querySelector('.hero-swiper-wrapper');
let heroSwiperBody = heroSwiperWrapper.querySelector('.swiper');

const heroSwiper = new Swiper(heroSwiperBody, {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
    },
});

// Akordion
let trust = document.querySelector('.trust');

if (trust) {
    let akordionButtons = trust.querySelectorAll('.trust__acordion-item-inner');

    for (let akordionButton of akordionButtons) {
        let akordionDropdown = akordionButton.nextElementSibling;
        let akordionHeight = akordionDropdown.offsetHeight;
        akordionDropdown.style.height = '0';

        let akordionIcon = akordionButton.querySelector('img')

        akordionButton.addEventListener('focus', () => {
            akordionDropdown.style.height = `${akordionHeight}px`;
            akordionDropdown.style.opacity = 1;
            akordionIcon.style.transform = 'rotate(45deg)';
            akordionDropdown.style.borderBottom = '2px solid rgba(0,0,0, 0.1)';
            akordionDropdown.style.borderTop = '2px solid rgba(0,0,0, 0.1)';
        });

        akordionButton.addEventListener('blur', () => {
            akordionDropdown.style.height = '0';
            akordionDropdown.style.opacity = '';
            akordionIcon.style.transform = '';
        });
    }
}

// Staff Swiper
let staffSwiperWrapper = document.querySelector('.staff-swiper-wrapper');
let staffSwiperBody = staffSwiperWrapper.querySelector('.swiper');
let staffPrev = staffSwiperWrapper.querySelector('.swiper-button-prev');
let staffNext = staffSwiperWrapper.querySelector('.swiper-button-next');
let staffPagination = staffSwiperWrapper.querySelector('.swiper-pagination');

const staffSwiper = new Swiper(staffSwiperBody, {
    loop: true,

    centeredSlides: true,

    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,

    breakpoints: {

        479.98: {
            slidesPerView: 1.5,
        },

        659.98: {
            slidesPerView: 2,
        },

        767.98: {
            slidesPerView: 2.5,
        },

        992.98: {
            slidesPerView: 3,
        },

        1199.98: {
            slidesPerView: 3.5,
        }
    },

    pagination: {
        el: staffPagination,
        clickable: true,
    },

    navigation: {
        nextEl: staffNext,
        prevEl: staffPrev,
    },
});