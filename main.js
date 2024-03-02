//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

/* Already stored into variables */
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('.body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

/* Create a instance in the window on the scroll reveal */
window.sr = ScrollReveal();

//We can access the scroll reveal by simply using sr 
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});