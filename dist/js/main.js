window.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.nav__burger');
    const burgerSpans = document.querySelectorAll('.nav__burger span')
    const burgerContent = document.querySelector('.header__menu');

    const burgerSpan1 = burgerSpans[0];
    const burgerSpan2 = burgerSpans[1];
    const burgerSpan3 = burgerSpans[2];


    window.addEventListener('click', (e) => {
        if (e.target == burgerBtn || e.target == burgerSpan1 || e.target == burgerSpan2 || e.target == burgerSpan3) {
            burgerBtn.classList.toggle('opened');
            burgerContent.classList.toggle('active');
        }
        else if (e.target != burgerContent) {
            burgerBtn.classList.remove('opened');
            burgerContent.classList.remove('active');
        }
    })
})
