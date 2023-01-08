const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


const modal = document.getElementById('email-modal')
const openButton = document.querySelector('.main__signup__btn')
const closeButton = document.querySelector('.icon')

openButton.addEventListener('click', () => {
    modal.style.display = 'block'

});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'
})