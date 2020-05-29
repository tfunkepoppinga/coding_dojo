const accordionTrigger = document.querySelectorAll('.js-accordion-trigger');
const accordionContent = document.querySelectorAll('.js-accordion-content');


accordionTrigger.forEach( function(accordion ) {
    accordion.addEventListener('click', function (content) {
        console.log(accordion);
        // accordion.nextSibling.classList.toggle('active');
    });
});
