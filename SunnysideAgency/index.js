// Scroll Down 
let slide = document.querySelector('.arrow-down');

slide.addEventListener("click", function(){
    window.scrollTo({
     top: 2500,
     left: 0,
     behavior: 'smooth'
    });
});


// Hamburger Menu Functionality
const hamburger = document.querySelector('.nav-hamburger');
const navUL = document.querySelector('.nav-ul');
const title = document.querySelector('h1');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    title.classList.toggle('remove');
})