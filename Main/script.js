function toggleMenu() {
    const nav = document.querySelector('nav');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerLinks = document.querySelector('.burger-links');

    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    burgerLinks.classList.toggle('active');
}