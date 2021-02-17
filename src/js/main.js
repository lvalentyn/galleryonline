$(document).ready(function () {
    // Animations
    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-off')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);

    }
    /* burgermenu */
    $('.burger').click(function () {
        $('.navbar__menu').toggleClass('nav-active');
        $('.burger').toggleClass('close');
    });
    $('.navbar__item').click(function () {
        $('.navbar__menu').removeClass('nav-active');
        $('.burger').removeClass('close');
    });
    // lightgallery
    lightGallery(document.querySelector('.lg1'));
    lightGallery(document.querySelector('.lg2'));
    lightGallery(document.querySelector('.lg3'));
    lightGallery(document.querySelector('.lg4'));
    lightGallery(document.querySelector('.lg5'));
    lightGallery(document.querySelector('.lg6'));
    lightGallery(document.querySelector('.lg7'));
    lightGallery(document.querySelector('.lg8'));
    lightGallery(document.querySelector('.lg9'));
    lightGallery(document.querySelector('.lg10'));
    lightGallery(document.querySelector('.lg11'));
    lightGallery(document.querySelector('.lg12'));
    lightGallery(document.querySelector('.lg13'));
    // navmenu on scroll
    $(window).scroll(function () {
        if (this.scrollY > 40) {
            $('.navbar').addClass('sticky');
            $('.gotop').fadeIn();
        } else {
            $('.navbar').removeClass('sticky');
            $('.gotop').fadeOut();
        }
    });
    // gotop
    $('.gotop').click(function () {
        scroll(0, 0)
    });
    // плавная прокрутка
    $("a[href]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});