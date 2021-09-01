let slide = document.querySelector('.arrow-down');

slide.addEventListener("click", function(){
    window.scrollTo({
     top: 2500,
     left: 0,
     behavior: 'smooth'
    });
});