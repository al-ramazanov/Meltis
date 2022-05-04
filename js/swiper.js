
const swiper = new Swiper('.mainpage-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
        el: '.mainpage-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.mainpage-next',
        prevEl: '.mainpage-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

/* ================================================================== */
/* ================================================================== */
/* ================================================================== */

// thumb slider================================================>
const cardThumbSwiper = new Swiper('.card-thumb-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.card-thumb-pag',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.card-thumb-swiper-button-next',
        prevEl: '.card-thumb-button-prev',
    },
});
// thumb slider================================================>

/* ================================================================== */
/* ================================================================== */
/* ================================================================== */


// new history=================================================>

const page_slider_bestsellers = new Swiper('.page-slider-bestsellers', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        // when window width is >= 480px
        // 420: {
        //     slidesPerView: 2,
        //     spaceBetween: 8
        // },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.bestsellers-slider-next',
        prevEl: '.bestsellers-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const page_slider_buy = new Swiper('.page-slider-buy', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 480px
        // 420: {
        //     slidesPerView: 2,
        //     spaceBetween: 8
        // },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.buy-slider-next',
        prevEl: '.buy-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const page_slider_similar = new Swiper('.page-slider-similar', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 480px
        // 420: {
        //     slidesPerView: 2,
        //     spaceBetween: 8
        // },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.similar-slider-next',
        prevEl: '.similar-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const page_slider_recently = new Swiper('.page-slider-recently', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 480px
        // 420: {
        //     slidesPerView: 2,
        //     spaceBetween: 8
        // },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.recently-slider-next',
        prevEl: '.recently-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


setTimeout(() => {
    const page_slider_cart = new Swiper('.page-slider-cart', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 8,

        breakpoints: {
            550: {
                slidesPerView: 3,

            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.cart-slider-next',
            prevEl: '.cart-slider-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}, 0);
const page_slider_favorite = new Swiper('.page-slider-favorite', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    breakpoints: {
        // when window width is >= 480px
        420: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.favorite-slider-next',
        prevEl: '.favorite-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const page_slider_recomended = new Swiper('.page-slider-recomended', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        // when window width is >= 480px
        // 420: {
        //     slidesPerView: 2,
        //     spaceBetween: 8,
        // },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.recomended-slider-next',
        prevEl: '.recomended-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const page_slider_categories = new Swiper('.page-slider-categories', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 1,

    // breakpoints: {
    //     // when window width is >= 480px
    //     420: {
    //         slidesPerView: 2,
    //         spaceBetween: 8
    //     },
    //     // when window width is >= 640px
    //     500: {
    //         slidesPerView: 3,
    //         spaceBetween: 8,
    //     },
    //     850: {
    //         slidesPerView: 4,
    //         spaceBetween: 15,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 20,
    //     },
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.categories-slider-next',
        prevEl: '.categories-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const page_slider_comprasion = new Swiper('.page-slider-comprasion', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    breakpoints: {
        // when window width is >= 480px
        420: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 640px
        500: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.comprasion-slider-next',
        prevEl: '.comprasion-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const page_slider_new = new Swiper('.page-slider-new', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: 1,

    // breakpoints: {
    //     // when window width is >= 480px
    //     420: {
    //         slidesPerView: 2,
    //         spaceBetween: 8
    //     },
    //     // when window width is >= 640px
    //     500: {
    //         slidesPerView: 3,
    //         spaceBetween: 8,
    //     },
    //     850: {
    //         slidesPerView: 4,
    //         spaceBetween: 15,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 20,
    //     },
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.new-slider-next',
        prevEl: '.new-slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});