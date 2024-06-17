const mobileMenu = document.querySelector('#mobile-menu')
const menuNavbar = document.querySelector('.navbar_menu')

mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-active');
    menuNavbar.classList.toggle('active');
});