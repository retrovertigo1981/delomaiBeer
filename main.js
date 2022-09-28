const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu')

menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu () {
    mobileMenu.classList.toggle('active')
}