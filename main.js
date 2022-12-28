const primayHeader = document.querySelector(".primary-header");


const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    //  primaryNav.classList.toggle('opened');
    primaryNav.toggleAttribute('data-visible');
    primayHeader.toggleAttribute('data-overlay');
});



//slider
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: false
});















