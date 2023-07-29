document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.header__btn')
    const closeBtn = document.querySelector('.rightside-menu__close')
    const headerMenu = document.querySelector('.rightside-menu')

    openBtn.addEventListener('click', () => {
        headerMenu.classList.remove('rightside-menu--close')
    })

    closeBtn.addEventListener('click', () => {
        headerMenu.classList.add('rightside-menu--close')
    })

    const headerBtn = document.querySelector('.header__btn-menu')
    const menu = document.querySelectorAll('.menu')

    headerBtn.addEventListener('click', () => {
        menu.forEach(item => item.classList.toggle('menu--open')
        )
    })

    if (document.body.clientWidth < 651) {
        document.querySelector('.work-path__list-box').append(document.querySelector('.work-path__item--measurements'))
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true
    })

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })

    $('.blog__item-slider').slick({
        prevArrow: '<button type="button" class="slick-prev blog__slider-btn"><img src="images/left-arrow.svg" alt="previous slide" class="slick-prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next blog__slider-btn"><img src="images/right-arrow.svg" alt="next slide" class="slick-next-arrow"></button>',
    })

    const mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-2'
        }
    })
})




